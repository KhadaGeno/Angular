import { Component, OnInit } from '@angular/core';
import { Component_type } from './component';
import { ComponentCartService } from '../component-cart.service';
import { ComponentDataService } from '../component-data.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrl: './component-list.component.scss'
})
export class ComponentListComponent {

  components: Component_type[] = [];

  constructor(
    private cart: ComponentCartService,
    private componentsDataService: ComponentDataService) {
  }

  ngOnInit(): void {
    this.componentsDataService.getAll()
    .subscribe(components => this.components = components);
  }

  addToCart(component: Component_type): void {
    this.cart.addToCart(component);
    component.stock -= component.quantity;
    component.quantity = 0;
  }

  maxReached (m: string) {
    alert(m);
  }
}