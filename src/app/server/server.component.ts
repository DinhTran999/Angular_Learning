//S1: import component
import { Component } from "@angular/core";
import { UrlWithStringQuery } from "url";

//S2: Decorator that marks a class as an Angular component
//and provides configuration metadata that determines how the component should be processed, instantiated, and used at runtime.
@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[
       `
       .online {
           color: orange;
       }
       `
    ]
})

//S3: Define a component like a Class
export class ServerComponent{
    serverId:number = 10;
    serverStatus;
    currentStyle;
    
    constructor(){
        this.serverStatus = Math.random()>0.5 ? 'online' : 'offline';
        this.currentStyle = {
            'color': this.serverStatus==='offline'? 'red' : 'green',
            'background-color': this.serverStatus==='offline'? 'yellow' : 'black'
        }
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.serverStatus==='online'? 'red' : 'green';
    }

    getBackgroundColor(){
        return this.serverStatus==='online'? 'yellow' : 'black';
    }
   


}