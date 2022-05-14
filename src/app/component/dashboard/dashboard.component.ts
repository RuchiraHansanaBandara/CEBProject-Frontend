import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Branch } from 'src/app/model/branch';
import { BranchesService } from 'src/app/service/branches.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  branchDetail !: FormGroup;
  branchObj : Branch = new Branch();
  branchList : Branch[] = [];

  constructor(private formBuilder : FormBuilder, private branchServise : BranchesService) { }

  ngOnInit(): void {

    this.getAllBranch();

    this.branchDetail = this.formBuilder.group({
      branchname : [''],
      location : [''],
      branchCode : ['']
    });

  }

  addBranch() {

    console.log(this.branchDetail);
    this.branchObj.id = this.branchDetail.value.id;
    this.branchObj.branchname = this.branchDetail.value.branchname;
    this.branchObj.location = this.branchDetail.value.location;
    this.branchObj.branchCode = this.branchDetail.value.branchCode;

    this.branchServise.addBranch(this.branchObj).subscribe(res=>{
      console.log(res);
      this.getAllBranch();
    },err=>{
      console.log(err);
    });

  }

  editBranch(branch: Branch) {

    this.branchDetail.controls['id'].setValue(branch.id);
    this.branchDetail.controls['branchname'].setValue(branch.branchname);
    this.branchDetail.controls['location'].setValue(branch.location);
    this.branchDetail.controls['branchCode'].setValue(branch.branchCode);

  }

  getAllBranch() {

    this.branchServise.getAllBranch().subscribe(res=>{
      this.branchList = res;
    },err => {
      console.log("error  while fetching data.")
    });

  }
}
