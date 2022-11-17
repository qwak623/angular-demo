import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  heroes = this.heroService.getHeroes()
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
  }

}
