import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostEditComponent } from './post-edit/post-edit.component';
import { AuthComponent } from './auth/auth.component';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/post-list',
    pathMatch: 'full',
  },
  {
    path: 'post-list',
    component: PostListComponent,
  },
  {
    path: 'auth',
    component: AuthComponent,
  },
  {
    path: 'post-add',
    component: PostEditComponent,
  },
  {
    path: 'post-edit/:index',
    component: PostEditComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PostComponent,
    PostListComponent,
    PostEditComponent,
    AuthComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
