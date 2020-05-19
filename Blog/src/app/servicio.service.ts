import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];

  constructor() { 
    this.arrPosts = [];
  }

  agregarPost($event: Post){
    this.arrPosts.push($event);
  }

  getAllPosts(): Post[]{
    return this.arrPosts;
  }

  getPostByCategoria(pCategoria): Promise<Post[]>{
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts.filter(post => post.categoria.toLowerCase().includes(pCategoria.toLowerCase())));
    
    });
  }

}
