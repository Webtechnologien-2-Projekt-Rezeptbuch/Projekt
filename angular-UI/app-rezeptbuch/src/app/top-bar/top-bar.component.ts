import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  bild1:string= 'assets/images/recipebookIMG.png';
  tags:boolean= false;
  
  constructor() { }

  ngOnInit(): void {
  }
  
  showTags(){
	this.tags = true;
	}

  hideTags(){
	this.tags = false;
}
}
