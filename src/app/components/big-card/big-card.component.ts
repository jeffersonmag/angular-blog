import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css'],
})
export class BigCardComponent implements OnInit {
  @Input() photoCover: string = 'https://i.stack.imgur.com/luaq2.png';
  @Input() cardTitle: string = 'Saiu a nova versão do Angular';
  @Input() cardDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec aliquam tortor erat, nec rhoncus urna imperdietsed. Phasellus hendrerit velit a dolor condimentum euismod.';
  constructor() {}

  ngOnInit(): void {}
}
