import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  formulario  : FormGroup; 
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required], 
      cantidad: ['', [Validators.required, Validators.pattern(/^[0-9]*$/)]], 
      mail: ['', [Validators.required, Validators.email]], 
      telefono: ['', Validators.pattern(/^[0-9]*$/)] 
    });
  }

  onSubmit(): void {
    if (this.formulario.valid) {
      console.log('Formulario válido:', this.formulario.value);
        } else {
      console.log('Formulario inválido');
    }
  }
}
