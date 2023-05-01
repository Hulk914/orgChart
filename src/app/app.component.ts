import { Component } from '@angular/core';
import * as Highcharts from "highcharts";
import HCSankey from "highcharts/modules/sankey";
import HCOrganization from "highcharts/modules/organization";

HCSankey(Highcharts);
HCOrganization(Highcharts);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-org-highchart';
  Highcharts: typeof Highcharts = Highcharts;

  chartOptions: Highcharts.Options = {
    chart: {
      height: 600,
      inverted: true
    },
    series: [{
      type: 'organization',
      name: 'Highsoft',
      keys: ['from', 'to'],
      data: [
        { from: 'Shareholders', to: 'Board' },
        { from: 'Board', to: 'CEO' },
        { from: 'CEO', to: 'CTO' },
        { from: 'CEO', to: 'CPO' },
        { from: 'CEO', to: 'CSO' },
        { from: 'CEO', to: 'HR' },
        { from: 'CTO', to: 'Product' },
        { from: 'CTO', to: 'Web' },
        { from: 'CSO', to: 'Sales' },
        { from: 'HR', to: 'Market' },
        { from: 'CSO', to: 'Market' },
        { from: 'HR', to: 'Market' },
        { from: 'CTO', to: 'Market' }
      ],
      levels: [{
        level: 0,
        color: 'silver',
        dataLabels: {
          color: 'black'
        }
      }, {
        level: 1,
        color: 'silver',
        dataLabels: {
          color: 'black'
        }
      }, {
        level: 2,
        color: '#980104'
      }, {
        level: 4,
        color: '#359154'
      }],
      nodes: [{
        id: 'Shareholders'
      }, {
        id: 'Board'
      }, {
        id: 'CEO',
        title: 'CEO',
        name: 'Atle Sivertsen',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg'
      }, {
        id: 'HR',
        title: 'CFO',
        name: 'Anne Jorunn Fjærestad',
        color: '#007ad0',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg'
      }, {
        id: 'CTO',
        title: 'CTO',
        name: 'Christer Vasseng',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131120/Highsoft_04074_.jpg'
      }, {
        id: 'CPO',
        title: 'CPO',
        name: 'Torstein Hønsi',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg'
      }, {
        id: 'CSO',
        title: 'CSO',
        name: 'Anita Nesse',
        image: 'https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131156/Highsoft_03834_.jpg'
      }, {
        id: 'Product',
        name: 'Product developers'
      }, {
        id: 'Web',
        name: 'Web devs, sys admin'
      }, {
        id: 'Sales',
        name: 'Sales team'
      }, {
        id: 'Market',
        name: 'Marketing team',
        column: 5
      }],
      colorByPoint: false,
      color: '#007ad0',
      dataLabels: {
        color: 'white'
      },
      borderColor: 'white',
      nodeWidth: 65
    }]
  };
}
