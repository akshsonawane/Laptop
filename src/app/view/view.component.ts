import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ServiceService} from 'src/app/services/service.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  
  user:any=[]
  constructor(private userservice:ServiceService,private router:Router) { }
  
  getuserdata(){
    this.userservice.getData().subscribe((res)=>{
      this.user= res
    })
  }



  ngOnInit(): void {
  }

}
