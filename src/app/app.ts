import { Component, inject, OnInit, signal } from '@angular/core';
import { ThiingsGridComponent } from './thiingsGrid';
import { FormsModule } from '@angular/forms';

import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Gallery } from './gallery';

import { Pane } from 'tweakpane';

@Component({
  selector: 'app-root',
  imports: [ThiingsGridComponent, FormsModule, NzModalModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App implements OnInit {
  protected readonly title = signal('thiings.co');
  private readonly modal = inject(NzModalService);

  public gridSize = 100;

  public adesewaPictures = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
    '9.jpg',
    '10.jpg',
    '11.jpg',
    '12.jpg',
    '13.jpg',
    '14.jpg',
    '15.jpg',
    '16.jpg',
    '17.jpg',
    '18.jpg',
    '19.jpg',
    '20.jpg',
    '21.jpg',
    '22.jpg',
    '23.jpg',
    '24.jpg',
    '25.jpg',
    '26.jpg',
    '27.jpg',
    '28.jpg',
    '29.jpg',
    '30.jpg',
    '31.jpg',
    '32.jpg',
    '33.jpg',
    '34.jpg',
    '35.jpg',
    '36.jpg',
    '37.jpg',
    '38.jpg',
    '39.jpg',
    '40.jpg',
    '41.jpg',
    '42.jpg',
    '43.jpg',
    '44.jpg',
    '45.jpg',
    '46.jpg',
    '47.jpg',
  ];

  ngOnInit(): void {
    const pane = new Pane() as any;
    pane.addBinding(this, 'gridSize', { min: 50, max: 200, step: 1, label: 'Image size' });
  }

  public onCellClick(item: any, pic: any): void {
    // console.log(item, pic);

    this.modal.create({
      nzTitle: `Infinite Scroll Gallery`,
      nzContent: Gallery,
      nzClosable: false,
      nzCentered: true,
      nzOkText: null,
      nzData: pic,
    });
  }

  onChange(value: number): void {
    console.log(`onChange: ${value}`);
  }
}
