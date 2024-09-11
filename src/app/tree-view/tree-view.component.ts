import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeService, TreeNode } from '../tree.service';
import { HttpClientModule } from '@angular/common/http';
import { TreeNodeComponent } from '../tree-node/tree-node.component';

@Component({
  selector: 'app-tree-view',
  standalone: true,
  imports: [CommonModule, HttpClientModule, TreeNodeComponent],
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css']
})
export class TreeViewComponent {
  rootNode: TreeNode | undefined;

  constructor(private treeService: TreeService) {}

  ngOnInit(): void {
    this.treeService.getTree().subscribe(tree => {
      this.rootNode = tree; // Root node is the tree itself
    });
  }
}
