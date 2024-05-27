import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {

height='';
weight='';
inputHandler(event){
    const {name,value}= event.target;
    if(name==="height"){
        this.height=value;
    }
    if(name==="weight"){
        this.weight=value;
    }


}
submitHandler(event){
    event.preventDefault();
    console.log("height" ,this.height);
    console.log("weight" ,this.weight);
}

}