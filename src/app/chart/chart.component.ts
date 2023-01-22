import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})

export class ChartComponent {
  public chart: any;
  ngOnInit(): void {
    this.createChart();
  }
  createChart(){

    

    const data = {
      labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
      datasets: [{
        label: 'My First Dataset',
        data: [300, 50, 100],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4
      }]
    };
  
    this.chart = new Chart("MyChart", {
      type: 'doughnut', //this denotes tha type of chart
      data: data,

      options: {
        aspectRatio:2.5
      }
      
    });
  }
}

