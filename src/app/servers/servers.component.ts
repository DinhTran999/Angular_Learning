import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverName: string = 'Test server';
  // greating: string = 'alo';
  serverCreationStatus = 'No server was created!';
  serverCreated: boolean = false;
  servers = ['Test Server','Production Server'];


  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      // this.greating = 'xin chao!';
    }, 2000);

  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    // this.serverCreationStatus = 'Server created is: '+this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement> event.target).value
  }

}
