import { Observable } from "rxjs";

let numbers = [1, 5, 10, 12, 30, 50, 99];
let source = Observable.create(observer =>{
    let index =0;
    let produceValue = () =>{
        observer.next(numbers[index++]);
        if(index<numbers.length){
            setTimeout(produceValue, 1250)
        }else {
            observer.complete();
        }
    };
    produceValue();
});
source.subscribe(
    value => console.log(`moja wartość to: ${value}`),
    e=>console.log(`error: ${e}`),
    ()=> console.log(`skonczyl sie stream`)
);

const labirynt = [0,0,[[0,[0,0,[[0,[0,0,[0,0,[[[0,0,0,[0,1,0]],0],0]]],0],0],0,0],0],0,0]];

let counter = 0;

function countElements(tab){
    tab.map(e=>{
        if(e instanceof Array){
            countElements(e);
        }else{
            counter++;
        }
    })
}

console.log(countElements(labirynt));