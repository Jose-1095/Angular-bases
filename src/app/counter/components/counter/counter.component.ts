import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>counter {{ counter }}</p>

    <button (click)="increaseBy(1)">+1</button>
    <button (click)="resetCounter()">reset</button>
    <button (click)="increaseBy(-1)">-1</button>
  `,
})
export class CounterComponent {
  constructor() {}

  public title: string = 'Hola Mundo';
  public counter: number = 10;

  increaseBy(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 10;
  }
}
