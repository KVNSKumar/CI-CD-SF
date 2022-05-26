import { LightningElement ,track, wire} from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';


export default class Lwc_createrecord_thru_wire extends LightningElement {
   
    @track lfname;
    @track llname;
    
   fields = {'FiratName':'$lfname','LastName':'$llname'};
    recordInput = {apiName:'Contact',fields}; 
   //createRecord( recordInput );
    
   fname(event){
        this.lfname = event.target.value;
    }
    lname(event){
        this.llname = event.target.value;
    }
    
}