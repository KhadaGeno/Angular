import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Component_type } from '../component-list/component';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrl: './input-integer.component.scss'
})
export class InputIntegerComponent {

  @Input() 
  quantity!: number;

  @Input() 
  max!: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> = new EventEmitter<string>();

  upQuantity (): void {
    if (this.quantity < this.max) {
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    } else {
      this.maxReached.emit("Se alcanzó el máximo");
    }
  }

  downQuantity (): void {
    if (this.quantity > 0) {
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity (event: any) {
    if (((event.code).includes('Enter'))) {
      this.quantityChange.emit(this.quantity);
    } else if (this.quantity > this.max || this.quantity < 0 || !((event.code).includes('Digit'))) {
      this.quantity = 0;
      this.quantityChange.emit(this.quantity);
      console.log(event);
    }
  }
}
