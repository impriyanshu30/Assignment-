import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fn : any;
  sn: any;
  ans : any;

  add()
  {
    this.ans=parseInt(this.fn)+parseInt(this.sn);
  }
  sub()
  {
    this.ans=parseInt(this.fn)-parseInt(this.sn);
  }
  mul()
  {
    this.ans=parseInt(this.fn)*parseInt(this.sn);
  }
  title = 'newproject';
}
