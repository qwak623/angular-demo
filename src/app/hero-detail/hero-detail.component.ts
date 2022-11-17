import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {

  hero?: Hero;

  constructor(private route: ActivatedRoute,
    private location: Location,
    private heroService: HeroService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.hero = this.heroService.getHero(Number(id));
  }

  goBack(): void {
    this.location.back();
  }
}
