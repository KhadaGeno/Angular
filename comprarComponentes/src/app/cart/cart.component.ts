import { Component } from '@angular/core';
import { ComponentCartService } from '../component-cart.service';
import { Component_type } from '../component-list/component';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {

  cartList$: Observable<Component_type[]>;

  constructor(private cart: ComponentCartService) {
    this.cartList$ = cart.cartList.asObservable();
  }
}