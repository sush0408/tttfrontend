import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TTT';
  num: any;
  words: any = []; 
  number = { val : 0};
  constructor(private http: HttpClient)
  {
  
  }
 /* callServer()
  {  
   console.log(this.num); 
    
    const req = this.http.post('https://backendttt.herokuapp.com:5000/num', {
      num:this.num
    })
      .subscribe(
        res => {
         this.words=[{data:'abc', freq: 1},{data:'1234', freq: 1}];
          console.log(res);
        },
        err => {
          console.log("Error occured");
        }
      );
  }*/
  callServer() {
    this.number.val=this.num;
    const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
    this.http.post('https://backendttt.herokuapp.com/num', JSON.stringify(this.number), {
      headers: headers
    })
    .subscribe(data => {
      console.log(data);
      this.words=data;
    });
  }
}
