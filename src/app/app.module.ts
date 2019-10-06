import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app-component/app.component';
import { NavbarComponent } from './navbar-component/navbar.component';
import { HeadingComponent } from './heading-component/heading.component';
import { BlogPostsComponent } from './blog-posts-component/blog-posts.component';
import { FooterComponent } from './footer-component/footer.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, HeadingComponent, BlogPostsComponent, FooterComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
