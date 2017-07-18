import { Component, OnInit, Input } from '@angular/core';
import { Post, PostWithAuthor } from "models/post";
import { AuthService } from "app/services/auth.service";
import { PostService } from "app/services/post.service";
import { MdSnackBar } from "@angular/material";

enum EditMode {
  notEditable,
  displayEditButtons,
  editing,
}

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss', '../shared/common.scss']
})
export class PostComponent implements OnInit {
  @Input() postWithAuthor: PostWithAuthor;

  public editingMode = EditMode.notEditable;

  constructor(private authService: AuthService,
    private postService: PostService, private snackBar: MdSnackBar) {
  }

  ngOnInit() {
    if (this.postWithAuthor.authorKey == this.authService.currentUsersUid) {
      this.editingMode = EditMode.displayEditButtons;
    }
  }

  enableEditing() {

  }

  remove() {
    this.postService.remove(this.postWithAuthor.$key);
    const sbRef = this.snackBar.open('Post removed', 'UNDO', {
      duration: 5000,
    });

    sbRef.onAction().subscribe((post) => {
      const restoredPost = new Post();
      restoredPost.body = this.postWithAuthor.body;
      restoredPost.authorKey = this.authService.currentUsersUid;
      this.postService.udpate(this.postWithAuthor.$key, restoredPost);

      this.snackBar.open('Post restored', '', {
        duration: 5000,
      });
    });
  }

}
