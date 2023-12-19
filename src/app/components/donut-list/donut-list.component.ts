import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { DonutList } from '../../models/donut-list';
import { response } from 'express';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-donut-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './donut-list.component.html',
  styleUrl: './donut-list.component.css'
})
export class DonutListComponent {
  constructor(private donutService:DonutService){}
  donuts:DonutList = {} as DonutList;

  ngOnInit(){
    this.donutService.getAll().subscribe((response) => this.donuts = response);
  }
}
