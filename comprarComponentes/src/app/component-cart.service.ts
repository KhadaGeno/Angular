import { Injectable } from '@angular/core';
import { Component_type } from './component-list/component';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class ComponentCartService {

  private _cartList: Component_type[] = [];

  cartList: BehaviorSubject<Component_type[]> = new BehaviorSubject(this._cartList);
  
  addToCart (component: Component_type) {
    let item = this._cartList.find((v1) => v1.name == component.name);
    if (!item) {
      this._cartList.push({... component});
    } else {
      item.quantity += component.quantity;
    }
    this.cartList.next(this._cartList);
  }
}