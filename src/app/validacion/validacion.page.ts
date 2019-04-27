import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-validacion',
  templateUrl: './validacion.page.html',
  styleUrls: ['./validacion.page.scss'],
})
export class ValidacionPage implements OnInit {
  todo = {}

  ngOnInit(){
  }

  async ingreso(forma : NgForm) {
    console.log("Hola 2s" );
  }


}
