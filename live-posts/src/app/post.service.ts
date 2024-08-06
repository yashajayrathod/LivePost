import { EventEmitter, Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class PostService{
  listChangedEvent:EventEmitter<Post[]>=new EventEmitter();
    listOfPosts: Post[] = [
    // new Post(
    //   'Nature1',
    //   '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos eius necessitatibus minus facere soluta! Eum repellat commodi reiciendis quo esse beatae laboriosam fugiat dolorem. Rerum culpa nisi perspiciatis exercitationem',
    //   'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1694365365~exp=1694365965~hmac=eb3d07025ca50605adceab11ac3fab39542db1856d903375509222a324e488a2',
    //   'yash rathod',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Nature2',
    //   '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos eius necessitatibus minus facere soluta! Eum repellat commodi reiciendis quo esse beatae laboriosam fugiat dolorem. Rerum culpa nisi perspiciatis exercitationem',
    //   'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1694365365~exp=1694365965~hmac=eb3d07025ca50605adceab11ac3fab39542db1856d903375509222a324e488a2',
    //   'yash rathod',
    //   new Date(),
    //   6
    // ),
    // new Post(
    //   'Nature3',
    //   '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos eius necessitatibus minus facere soluta! Eum repellat commodi reiciendis quo esse beatae laboriosam fugiat dolorem. Rerum culpa nisi perspiciatis exercitationem',
    //   'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1694365365~exp=1694365965~hmac=eb3d07025ca50605adceab11ac3fab39542db1856d903375509222a324e488a2',
    //   'yash rathod',
    //   new Date(),
    //   7
    // ),
    // new Post(
    //   'Nature4',
    //   '4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos eius necessitatibus minus facere soluta! Eum repellat commodi reiciendis quo esse beatae laboriosam fugiat dolorem. Rerum culpa nisi perspiciatis exercitationem',
    //   'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1694365365~exp=1694365965~hmac=eb3d07025ca50605adceab11ac3fab39542db1856d903375509222a324e488a2',
    //   'yash rathod',
    //   new Date(),
    //   5
    // ),
    // new Post(
    //   'Nature5',
    //   '5Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis, dignissimos eius necessitatibus minus facere soluta! Eum repellat commodi reiciendis quo esse beatae laboriosam fugiat dolorem. Rerum culpa nisi perspiciatis exercitationem',
    //   'https://img.freepik.com/free-photo/lone-tree_181624-46361.jpg?w=740&t=st=1694365365~exp=1694365965~hmac=eb3d07025ca50605adceab11ac3fab39542db1856d903375509222a324e488a2',
    //   'yash rathod',
    //   new Date(),
    //   3
    // ),
  ];
  getPosts(){
    return this.listOfPosts;
  }

  deletePost(index:number){
    this.listOfPosts.splice(index, 1);
  }
  addPosts(post:Post){
    this.listOfPosts.push(post);
  }
  updatePost(index:number,post:Post){
    this.listOfPosts[index]=post;
  }
  getPost(index:number){
    return this.listOfPosts[index];
  }
  likePost(index:number){
    this.listOfPosts[index].numberOfLikes += 1;
  }
  setPosts(listOfPosts:Post[]){
    this.listOfPosts = listOfPosts;
    this.listChangedEvent.emit(listOfPosts);
  }
}
