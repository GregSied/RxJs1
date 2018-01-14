import {Observable} from "rxjs";
//by element id moze
const button = document.querySelector('button');
const output = document.querySelector('#output');

let click = Observable.fromEvent(button, 'click');

function load(url: string) {

    return Observable.create(observer => {

        let xhr = new XMLHttpRequest();
        xhr.addEventListener("load", () => {
            if (xhr.status == 200) {
                let data = JSON.parse(xhr.responseText);
                observer.next(data);
                observer.complete();

                console.log(data);
                console.table(data);
            } else {
                observer.error(xhr.statusText);
            }
        });
        xhr.open("GET", url);
        xhr.send();
    })
        .map((a) => a.sort((a,b) => a.pages > b.pages))
}

// load("/books-api.json");

function renderBooks(books){
    books.forEach(b => {
        let node = document.createElement('div');
        node.innerText="title: "+b.title+", pages:"+b.pages;
        output.appendChild(node);
    })
}

click.flatMap(e => load("/books-api.json"))
    .subscribe(
        (e) => {
            console.log(e);
            renderBooks(e);
        },
                (e) => console.log(`error: ${e}`),
                () => console.log('done')
    );
