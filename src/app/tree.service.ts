import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface TreeNode {
  id: string;
  label: string;
  info: string;
  children?: TreeNode[];
}

@Injectable({
  providedIn: 'root'
})
export class TreeService {

  constructor(private http: HttpClient) { }

  getTree(): Observable<TreeNode> {
    return this.http.get<TreeNode>('assets/tree.json');
  }
}
