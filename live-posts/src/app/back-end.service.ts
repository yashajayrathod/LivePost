import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BackEndService {
  constructor(private postService: PostService, private http: HttpClient) {}

  //fun1 -save
  //step1 -get list of post from services.
  SaveData() {
    const listOfPosts: Post[] = this.postService.getPosts();

    //step2-send list of postto backend.
    this.http
      .put(
        'https://live-posts-f4ac9-default-rtdb.firebaseio.com/posts.json',
        
        
        listOfPosts
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  //fun2--fetch
  fetchData() {
    this.http
      .get<Post[]>(
        'https://live-posts-f4ac9-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        tap((listOfPosts: Post[]) => {
          console.log(listOfPosts);
          this.postService.setPosts(listOfPosts);
        })
      )
      .subscribe();
  }
}
