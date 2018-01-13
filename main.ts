import {Observable} from "rxjs-es";

console.log("ad");

let numbers = [1, 5, 10];

var source = Observable.create( observer => {
    // let index = 0;
/*
    let produceValue = () => {
        // observer.next(numbers[index++])
        if (index < numbers.length) {
            setTimeout(produceValue, 250);
        } else {
            observer.complete();
        }
    }
*/
});

/*
source.subscribe(
    value => console.log(`moja wartosc to: ${value}`),
    e=> console.log(`error: ${e}`),
    ()=>console.log(`skoczyl sie stream`)
);*/
