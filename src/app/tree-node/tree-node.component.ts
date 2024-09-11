import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeNode } from '../tree.service';

@Component({
  selector: 'app-tree-node',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tree-node.component.html',
  styleUrls: ['./tree-node.component.css']
})
export class TreeNodeComponent {
  @Input() node!: TreeNode;
}
