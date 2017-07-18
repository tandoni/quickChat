import { Component, OnInit, Input } from '@angular/core';
import { Post, PostWithAuthor } from "models/post";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss', '../shared/common.scss']
})
export class PostComponent implements OnInit {
  @Input() postWithAuthor: PostWithAuthor;
  
  constructor() { }

  ngOnInit() {
  }

}
