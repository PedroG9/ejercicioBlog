import { Injectable } from '@angular/core';
import { Post } from './models/post.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  arrPosts: Post[];

  constructor() { 
    this.arrPosts = [
      new Post( 'La existencia de un universo paralelo: desmentida', 
                'No ha durado demasiado el sorprendente hallazgo de la existencia de un universo paralelo en el que el tiempo corre hacia atrás a cargo de científicos de la NASA. Dichas evidencias, al parecer, no eran más que una interpretación errónea de diversos hechos.', 
                'Autor 1', 
                'https://www.elfinanciero.com.mx/uploads/2020/05/20/c44bebb9731589994742_standard_desktop_medium_retina.webp', 
                '24/05/2020', 
                'Universo'),
      new Post( 'La NASA revela los misterios detrás de la neblina de Plutón', 
                'Observaciones remotas de Plutón por el telescopio aerotransportado SOFIA de la NASA muestran que la neblina delgada que envuelve al planeta enano está hecha de partículas muy pequeñas que permanecen en la atmósfera durante períodos prolongados de tiempo en lugar de caer inmediatamente a la superficie.', 
                'Autor 2', 
                'https://upload.wikimedia.org/wikipedia/commons/8/80/Nh-pluto-in-true-color_2x_JPEG.jpg', 
                '01/04/2020', 
                'Planetas'),
      new Post( 'Cómo fotografiar las manchas solares', 
                'Aunque parezca mentira, es posible hacer fotografías al Sol y poder ver las manchas solares. Eso sí, hay que ir con mucho cuidado y nunca, nunca, hay que mirar al Sol usando un telescopio, prismáticos o cámaras fotográficas si no están preparados para ello ya que podríamos provocarnos una lesión permanente en los ojos. No se necesita un gran equipo para ver las manchas solares. Lo único que necesitamos es un filtro solar. En internet podemos encontrar de todos los precios y tamaños. Fotografiar el Sol es sencillo y con un filtro podemos incluso hacer la fotografía con exposición automática. Las manchas se verán claramente de color oscuro ya que contrastan con el resto de la superficie. Cada uno de estos puntos o manchas, que en inglés se denominan sunspots, tiene menor temperatura que el resto del Sol.', 
                'Autor 3', 
                'https://okdiario.com/img/2020/05/19/la-nasa-lanza-una-advertencia_-el-sol-se-esta-debilitando-655x368.jpg', 
                '12/03/2020', 
                'DIY-Astronomía')
    ];
  }

  agregarPost({titulo, texto, autor, imagen, fecha, categoria}): Promise<Post[]>{
    return new Promise((resolve, reject) =>{
      const newPost = new Post(titulo, texto, autor, imagen, fecha, categoria);
      this.arrPosts.push(newPost);
      resolve(this.arrPosts);
    })
    
  }

  getAllPosts(): Promise<Post[]>{
    const promise = new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts);
    });
    return promise
  }

  getPostByCategoria(pCategoria): Promise<Post[]>{
    return new Promise<Post[]>((resolve, reject) => {
      resolve(this.arrPosts.filter(post => post.categoria.toLowerCase().includes(pCategoria.toLowerCase())));
    
    });
  }

}
