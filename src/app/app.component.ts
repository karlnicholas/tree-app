import { Component } from '@angular/core';
import { TreeViewComponent } from './tree-view/tree-view.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: '<app-tree-view></app-tree-view>',
  imports: [TreeViewComponent]
})
export class AppComponent {}
