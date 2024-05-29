import { Component } from '@angular/core';

@Component({
  selector: 'app-segundo-componente',
  templateUrl: './segundo-componente.component.html',
  styleUrls: ['./segundo-componente.component.css']
})
export class SegundoComponenteComponent {
  nome = "Alex Vause";
  dataNascimento = new Date(2000, 0, 10);
  urlImage = "/assets/Alex11.jpg";

  mostrarDataNascimento() {
    alert(`A data de nascimento da Alex Vause é: ${this.formatarData(this.dataNascimento)}`);
  }

  private formatarData(data: Date): string {
    const dia = data.getDate().toString().padStart(2, '0');
    const mes = (data.getMonth() + 1).toString().padStart(2, '0');
    const ano = data.getFullYear();
    return `${dia}/${mes}/${ano}`;
  }
}
