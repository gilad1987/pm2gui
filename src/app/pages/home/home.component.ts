import './home.component.css';
import {Component, ViewChildren} from '@angular/core';
import {Pm2Service} from '../../shared/pm2/pm2.service';

@Component({
    selector: "main-app",
    template: require('html-loader!./home.component.html')
})
export class HomeComponent {
    private processData: Array<any>;
    private serverInfo: Object;

    public searchQuery: string;

    constructor(private pm2Service: Pm2Service) {
        let self = this;
        self.getData();
    }

    getData() {
        let self = this;
        self.pm2Service.getProcesses().subscribe(processes => {
            self.processData = processes;
        });

        self.pm2Service.getServerInfo().subscribe(serverInfo => {
            self.serverInfo = serverInfo;
        });
    }
}