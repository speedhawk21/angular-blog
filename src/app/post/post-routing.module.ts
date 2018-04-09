import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostListComponent} from '../post-list/post-list.component';
import {PostComponent} from './post.component';
import {PostResolver} from './post-resolver.service';


const routes: Routes = [
  {
    path: 'post',
    data: {
      breadcrumbs: true,
      text: 'Post'
    },
    children: [
      {
        path: '',
        component: PostListComponent
      }, {
        path: ':title',
        component: PostComponent,
        resolve: {
          post: PostResolver
        }
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}