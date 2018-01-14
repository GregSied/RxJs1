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
}

// load("/books-api.json");

click.flatMap(e => load("/books-api.json"))
    .subscribe(
        (e) => console.log(e),
        (e) => console.log(`error: ${e}`),
            () => console.log('done')
    );