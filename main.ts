import {Observable} from "rxjs";

// import {Observable} from "rxjs/Observable";
// import "rxjs/add/operator/map";
// import "rxjs/add/operator/filter";

let numbers = [1, 5, 50, 30, 7, 8,9, 10];
let source = Observable.create(observer => {

    let index = 0;
    let produceValue = () => {
        observer.next(numbers[index++]);

        if(index < numbers.length) {
            setTimeout(produceValue, 1250);
        }
        else {
            observer.complete();
        }
    }

    produceValue();

}).map(n => n * 2)
    .map(n => n < 18 ? `mlody: ${n}` : `stary: ${n}`);
    // .filter(n => n > 1);

// *3 czy mniejsze od 18tu

source.subscribe(
    value => console.log(`val: ${value}`),
    e => console.log(`error: ${e}`),
    () => console.log("complete")
);
