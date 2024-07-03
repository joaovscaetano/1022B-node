import { test,expect} from 'vitest';
//Questão 1
import { calcularQuadrado } from './quadrado';
test('Calcular o quadrado de um número', () => {
 expect(calcularQuadrado(2)).toBe(4);
 expect(calcularQuadrado(0)).toBe(0);
 expect(calcularQuadrado(-3)).toBe(9);
 expect(calcularQuadrado(1.5)).toBe(2.25);
});

//Questão 2
import { ehPositivo } from './positivo';
test('Verificar se um número é positivo', () => {
 expect(ehPositivo(2)).toBe(true);
 expect(ehPositivo(-3)).toBe(false);
 expect(ehPositivo(0)).toBe(false);
 expect(ehPositivo(1.5)).toBe(true);
});

//Questão 3
import { calcularMedia } from './media';
test('Calcular média de três números', () => {
 expect(calcularMedia(2, 4, 6)).toBe(4);
 expect(calcularMedia(1, 1, 1)).toBe(1);
 expect(calcularMedia(-1, 0, 1)).toBe(0);
 expect(calcularMedia(10, 20, 30)).toBe(20);
});

//Questão 4
import { ehAnoBissexto } from './bissexto';
test('Verificar se um ano é bissexto', () => {
 expect(ehAnoBissexto(2020)).toBe(true);
 expect(ehAnoBissexto(2021)).toBe(false);
 expect(ehAnoBissexto(2000)).toBe(true);
 expect(ehAnoBissexto(1900)).toBe(true);
});
