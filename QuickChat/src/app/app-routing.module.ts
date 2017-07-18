import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from "app/+main/main.component";
import { SignInComponent } from "app/+sign-in/sign-in.component";
import { MyPostsComponent } from "app/+my-posts/my-posts.component";
import { AuthGuard } from "app/services/auth.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: MainComponent, canActivate: [AuthGuard] },
  { path: 'signin', component: SignInComponent },
  { path: 'myposts', component: MyPostsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
