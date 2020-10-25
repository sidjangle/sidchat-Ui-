import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

  myid:any = 1 ;
  constructor() { }


  public array = [
    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},
    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    {'id':1,'name':'siddhant','msg':'Hello How are you?','time':'12:00'},
    {'id':2,'name':'pooja','msg':'Good What about you?' ,'time':'12:00'},    
  ]
  ngOnInit() {

  }

}
