import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/services/auth.service";
import { Post } from "models/post";
import { PostService } from "app/services/post.service";

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss', '../shared/common.scss']
})
export class CreatePostComponent implements OnInit {

  postBodyText: string;
  constructor(public authService: AuthService, private postService: PostService) {

   }

  ngOnInit() {
  }

  onSubmit() {
    try {
      const post = new Post({
        body: this.postBodyText,
        authorKey: this.authService._currentUsersUid,
      });
      this.postService.add(post);

      this.postBodyText = '';
    } catch (error) {
      console.error('submit failed');
    }
  }

}
