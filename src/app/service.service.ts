import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  constructor(private _http: HttpClient) {}

  postdata(data: any): any {
    return this._http.post<any>('http://localhost:3000/api/post', data);
  }

  getdata(): any {
    return this._http.get<any>('http://localhost:3000/api/get').pipe(
      map((res) => {
        return res;
      })
    );
  }

  deletedata(id: number) {
    return this._http
      .delete<any>('http://localhost:3000/api/delete/' + id)
      .pipe(
        map((res: any) => {
          return res;
        })
      );
  }
}
