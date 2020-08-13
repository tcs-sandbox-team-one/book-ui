import { TrainListData } from './../../models/train-list';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api-service/api.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-train-list',
  templateUrl: './train-list.component.html',
  styleUrls: ['./train-list.component.css']
})
export class TrainListComponent implements OnInit {

  private trainListData:TrainListData[] = [];
  constructor(private apiService: ApiService, private ngxService: NgxUiLoaderService) { }
  
  ngOnInit() {
    
    this.getTrainList();
  }

  getTrainList() {
    this.apiService.getTrainListData().subscribe(
      (data:TrainListData[]) =>{
        this.trainListData = data;
    },
    (error:any) =>{
      console.log(error);
    });
  }
}
