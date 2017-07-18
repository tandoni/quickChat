import { Component, OnInit, Input } from '@angular/core';
import { Post, PostWithAuthor } from "models/post";
import { AuthService } from "app/services/auth.service";

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
  
  constructor(private authService: AuthService) {
   }

  ngOnInit() {
    if (this.postWithAuthor.authorKey == this.authService.currentUsersUid){
      this.editingMode = EditMode.displayEditButtons;
    }
  }

  enableEditing() {

  }

  remove() {

  }

}
