import { Component, OnInit } from '@angular/core';

var RutrackerApi = require('rutracker-api');

@Component({
    selector: 'body',
    //styleUrls: ['./app.component.css'],
    templateUrl: './rutracker.component.html'  
  })

  export class RutrackerComponent implements OnInit {
    public rutracker: any;

    ngOnInit(){ 

    }

    login() {
        
        var username = 'vk_31',
            password = '198600';
        
        // Вариант №2: с помощью метода 'login' 
        this.rutracker = new RutrackerApi();
        this.rutracker.login(username, password);

        
    }

    search() {
        console.log(this.rutracker);
        var query = "transformers",
        callback = console.log.bind(console);
        
        this.rutracker.search(query, callback);
    }

  }