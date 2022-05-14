import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Branch } from '../model/branch';

@Injectable({
  providedIn: 'root'
})
export class BranchesService {

  addBranchURL : string;
  getBranchURL : string;

  constructor(private http : HttpClient) { 

    this.addBranchURL = 'http://localhost:8080/CEBProject/webapi/cebproject/insertion';
    this.getBranchURL = 'http://localhost:8080/CEBProject/webapi/cebproject/retrieve';


   }

   addBranch(branch : Branch): Observable<Branch> {

    return this.http.post<Branch>(this.addBranchURL,branch);

   }

   getAllBranch(): Observable<Branch[]>{

    return this.http.get<Branch[]>(this.getBranchURL);

   }

}
