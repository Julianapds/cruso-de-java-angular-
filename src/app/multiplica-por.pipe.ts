import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'multiplicationPor'
})
export class MultiplicaPorPipe implements PipeTransform {

  transform(valor: number, multiplication: number): any {
    return valor * multiplication;
  }

}
