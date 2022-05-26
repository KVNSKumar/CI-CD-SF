import { LightningElement ,track} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';

export default class Lwc_event_parent_component extends LightningElement {
/*
@track vol = 0;
@track actionname = 'Control Name'
incr1(event){
this.vol = this.vol+1;
this.actionname = event.detail;

}
decr1(event){
if(this.vol > 0){
    this.vol = this.vol - 1;
    this.actionname = event.detail;
    }
} */
@track lfname;
@track llname;
@track lemail;
@track lid;
inputcontact(event){

this.lfname = event.detail.FirstName;
this.llname = event.detail.LastName;
this.lemail = event.detail.Email;
const name = this.lfname+this.llname;
const fields = {Name:name};
const inputRecord ={apiName:'Account',fields};
createRecord(inputRecord).then(()=>{});

}

constructor(){

    super();
    this.addEventListener('evtprogram',this.showme);
}
showme(){

    alert('Called from Chile Event');
}

}