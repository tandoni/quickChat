import { Injectable } from '@angular/core';
import { Post } from "models/post";
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";

@Injectable()
export class PostService {
  readonly postsPath = 'posts';
  private _postStream: FirebaseListObservable<Post[]>

  constructor(private db: AngularFireDatabase) {
    this._postStream = this.db.list(this.postsPath);
   }

  add(post: Post) {
    this._postStream.push(post);
  }
}
