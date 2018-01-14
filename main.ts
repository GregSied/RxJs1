import {Observable} from "rxjs-es";

console.log("Sta");

const labirynt = [0, 0, [[0, [0, 0, [[0, [0, 0, [0, 0, [[[0, 0, 0, [0, 1, 0]], 0], 0]]], 0], 0], 0, 0], 0], 0, 0]];

let count = 0;

function cE (tab){
    tab.map(e=> {
        if (e instanceof Array){
            cE(e)
        } else {
            count++
        }
            // if Array.isArray(e)
    })
}

cE(labirynt);
console.log(count)

/*
labirynt.map(e => {
    if (e.toString() != null) {
        let wyn = e.toString();
        console.log(`jest: {wyn}`)
    } else {
        console.log("nie: {wyn}")
    }
})
*/

console.log(`lab: {labirynt}`)

/*

var source = Observable.create( observer => {
    // let index = 0;
    let produceValue = () => {
        // observer.next(numbers[index++])
        if (index < numbers.length) {
            setTimeout(produceValue, 250);
        } else {
            observer.complete();
        }
    }
});
*/

/*
source.subscribe(
    value => console.log(`moja wartosc to: ${value}`),
    e=> console.log(`error: ${e}`),
    ()=>console.log(`skoczyl sie stream`)
);*/
