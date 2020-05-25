import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  posts: Post[];

  constructor(private servicioService: ServicioService) { 
    this.posts = [];
  }

  async ngOnInit() {
    try {
      this.posts = await this.servicioService.getAllPosts();
    }catch(err){
      console.log(err);
    }
  }

  async onChangeCategoria($event){
    this.posts = await this.servicioService.getPostByCategoria($event.target.value);
  }
}
