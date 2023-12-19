import { Component } from '@angular/core';
import { DonutService } from '../../services/donut.service';
import { Donut } from '../../models/donut';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-donut-details',
  standalone: true,
  imports: [],
  templateUrl: './donut-details.component.html',
  styleUrl: './donut-details.component.css'
})
export class DonutDetailsComponent {
  constructor(private donutService:DonutService, private route:ActivatedRoute){}
  donut:Donut = {} as Donut;

  ngOnInit(){
    let params = this.route.snapshot.paramMap;
    let id = Number(params.get("id"));
    this.donutService.getById(id).subscribe((response) => this.donut = response);
  }
}
