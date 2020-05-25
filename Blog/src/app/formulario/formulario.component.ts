import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Post } from '../models/post.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  formPost: FormGroup;
  
  

  constructor(private servicioService: ServicioService, private router: Router) { 
    this.formPost = new FormGroup({
      titulo: new FormControl('', [
        Validators.required
      ]),
      texto: new FormControl('', [
        Validators.required
      ]),
      autor: new FormControl('', [
        Validators.required
      ]),
      imagen: new FormControl('', [
        Validators.required
      ]),
      fecha: new FormControl('', [
        Validators.required
      ]),
      categoria: new FormControl('', [
        Validators.required
      ])
    });
    
  }

  ngOnInit(): void {
    
  }

  onSubmit(){
    console.log(this.formPost.value);
    let newPost: Post = this.formPost.value;
    this.servicioService.agregarPost(newPost);
    this.router.navigate(['blog']);
    
  }
  
}
