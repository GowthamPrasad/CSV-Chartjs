import { Component, OnInit, ViewChild } from '@angular/core';
import { CSVRecord } from '../CSVRecord';  
import { Router } from '@angular/router';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})

export class FileUploadComponent {  
  title = 'Angular-readCSV'; 
  public chart: any;
  csvArr:any = [];  

  constructor(public router:Router) 
  {}
  public records: any[] = [];  
  @ViewChild('csvReader') csvReader: any;  
  route: any;
  headerArray:any=[];
  record1:any;
  
  uploadListener($event: any): void {  
  
    let text = [];  
    let files = $event.srcElement.files;  
  
    if (this.isValidCSVFile(files[0])) {  
  
      let input = $event.target;  
      let reader = new FileReader();  
      reader.readAsText(input.files[0]);  
  
      reader.onload = () => {  
        let csvData = reader.result;  
        let csvRecordsArray = (<string>csvData).split(/\r\n|\n/);  
  
        let headersRow = this.getHeaderArray(csvRecordsArray);  
  
        this.records = this.getDataRecordsArrayFromCSVFile(csvRecordsArray, headersRow.length);  
        
        this.record1=this.records;
        console.log(this.record1)
    };  
  
      reader.onerror = function () {  
        console.log('error is occured while reading file!');  
      };  
  
    } else {  
      alert("Please import valid .csv file.");  
      this.fileReset();  
    }  
  }  

  
  getDataRecordsArrayFromCSVFile(csvRecordsArray: any, headerLength: any) {  
    let csvArr = [];  
  
    for (let i = 1; i < csvRecordsArray.length; i++) {  
      let curruntRecord = (<string>csvRecordsArray[i]).split(',');  
      if (curruntRecord.length == headerLength) {  
        let csvRecord: CSVRecord = new CSVRecord();  
        csvRecord.c1 = curruntRecord[0];  
        csvRecord.c2 = curruntRecord[1];  
        csvRecord.c3 = curruntRecord[2];  
        csvRecord.c4 = curruntRecord[3];  
        csvRecord.c5 = curruntRecord[4];  
        csvRecord.c6 = curruntRecord[5];  
        csvRecord.c7 = curruntRecord[6]; 
        csvRecord.c8 = curruntRecord[7];  
        csvRecord.c9 = curruntRecord[8];
        // csvRecord.Position1 = curruntRecord[9];  
        // csvRecord.ArtistName1 = curruntRecord[10];  
        // csvRecord.SongName1 = curruntRecord[11];  
        //  //csvRecord.Days1 = curruntRecord[12];  
        // csvRecord.Top10Times1 = curruntRecord[13];  
        // csvRecord.PeakPosition1 = curruntRecord[14];  
        //  csvRecord.PeakPositionxTimes1 = curruntRecord[15]; 
        // // csvRecord.PeakStreams1 = curruntRecord[16];  
        // // csvRecord.TotalStreams1 = curruntRecord[17];  
        csvArr.push(csvRecord);  
        // console.log(csvRecord)
      }  
    }  
    return csvArr;  
  }  
  
  isValidCSVFile(file: any) {  
    return file.name.endsWith(".csv");  
  }  
  
  getHeaderArray(csvRecordsArr: any) {  
    let headers = (<string>csvRecordsArr[0]).split(',');  
    // this.headerArray = [];  
    for (let j = 0; j < headers.length; j++) {  
      this.headerArray.push(headers[j]);  
    }  
    console.log(this.headerArray);
    return this.headerArray;  
  }  
  
  fileReset() {  
    this.csvReader.nativeElement.value = "";  
    this.records = [];  
  }  
  onchart(){
    this.router.navigateByUrl('/chart')
  }
  // chartOptions = {
	//   animationEnabled: true,
	//   title: {
	// 	text: "Sales by Department"
	//   },
	//   data: [{
	// 	type: "pie",
	// 	startAngle: -90,
	// 	indexLabel: "{name}: {y}",
	// 	yValueFormatString: "#,###.##'%'",
	// 	dataPoints: [
	// 	  { y: 14.1, name: "Toys" },
	// 	  { y: 28.2, name: "Electronics" },
	// 	  { y: 14.4, name: "Groceries" },
	// 	  { y: 43.3, name: "Furniture" }
	// 	]
	//   }]
	// }
  // sortee() {
  //   $(function(){
  //     $('#keywords').tablesorter(); 
  //   });

  createChart(){
    console.log(this.records[2].SongName);

    for (let i = 0; i < 10; i++) {
    
    this.chart = new Chart("MyChart", {
      type: 'bar', //this denotes tha type of chart

      
      data: {// values on X-Axis
        labels: [ this.records[0].SongName,this.records[1].SongName,this.records[2].SongName,this.records[3].SongName,this.records[4].SongName,this.records[5].SongName], 
	       datasets: [
          {
            label: "Sales",
            data: [this.records[0]],
            backgroundColor: 'blue'
          },
          {
            label: "Profit",
            data: [],
            backgroundColor: 'limegreen'
          }  
        ]
      },
      options: {
        aspectRatio:2.5
      }
      
    }); }
  }
  }
