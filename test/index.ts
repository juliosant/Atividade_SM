'use strict';

import { expect } from 'chai';
import { AlgoritmosCompressao } from '../src/index';

describe('AlgoritmosCompressao class', () => {
	it('should create an instance using its constructor', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		expect(example, 'example should exit').to.exist; // tslint:disable-line:no-unused-expression
	});

	it('Testa o metodo comprimeFequenciaCaractere com o texto ABCD', () => {
		const example: AlgoritmosCompressao = new AlgoritmosCompressao();
		const param: string = 'ABCD';
		const returnValue: string = example.comprimeFequenciaCaractere(param);
		expect(returnValue).to.equal('ABCD', 'returns the value passed as a parameter');
	});

});