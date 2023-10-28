import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { todo } from './todo.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  dataobj = new todo();
  todoarray: any;
  mydata: any = '';

  // this is for db.json database
  // dataobj:todo = new todo();
  // todoarray:[]=[];
  // data:any = '';

  constructor(private sobj: ServiceService) {}
  ngOnInit(): void {
    this.getAllData();
  }
  getAllData() {
    this.sobj.getdata().subscribe(
      (res: any) => {
        this.todoarray = res;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
  tododata() {
    this.dataobj.name = this.mydata;

    this.sobj.postdata(this.dataobj).subscribe((res: any) => {
      alert('Added successfully');
      this.getAllData();
      this.mydata = ''; // for reset the adding the value.
    }),
      (err: any) => {
        console.log('error found', err);
        alert('err');
      };
  }
  // done(_id:number){
  // this.dataobj.isCompleted = true;
  //   this.todoarray[_id].isCompleted = !this.todoarray[_id].isCompleted;
  // }

  deletetodo(data: any) {
    this.sobj.deletedata(data).subscribe(
      (res: any) => {
        console.log(res);
        alert('Todo Data Deleted Successfully');
        this.getAllData();
      },
      (err: any) => {
        console.log(err);
      }
    );
  }
}
