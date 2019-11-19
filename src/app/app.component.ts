import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myangular-directive';
  first = false;
  heros = ['Captain America', 'Wolverine', 'Jean Grey', 'Charles', 'Magneto', 'Scott', 'Mystic'];
  ngOnInit() {
    setTimeout(() => {
      this.first = true;
    }, 1000);
  }
}
