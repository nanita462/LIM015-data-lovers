import funciones  from '../src/data.js';

import data from '../src/data/pokemon/pokemon';


describe('funciones', () => {
  it('deberia ser objeto', () => {
    expect(typeof funciones).toBe('object');
  });
  describe('funciones.sortData', () => {
    it('deberia ser una función', () => {
      expect(typeof funciones.sortData).toBe('function');
    });

    it('sort by `ascendente`', () => {
      const result = funciones.sortData( data.pokemon, 'ascendente');
    
        expect(result[0].name).toBe('abra');
      });
    it('sort by `descendente`', () => {
      const result = funciones.sortData( data.pokemon, 'descendente');
      
       expect(result[0].name).toBe('zubat');
      });
    
  });

  describe('funciones.filterDatabyName', () => {
    it('deberia ser una función', () => {
      expect(typeof funciones.filterDatabyName).toBe('function');
    });

    it('search by name', () => {
      const result = funciones.filterDatabyName(data.pokemon,'bulbasaur');
    
        expect(result[0].name).toBe('bulbasaur');
      });
        
  });

  describe('funciones.filterDataByCP', () => {
    it('deberia ser una función', () => {
      expect(typeof funciones.filterDataByCP).toBe('function');
    });

    it('search by num', () => {
      const result = funciones.filterDataByCP(data.pokemon,'001');
    
        expect(result[0].num).toBe('001');
      });
        
  });

  describe('funciones.ilterDataByType', () => {
    it('deberia ser una función', () => {
      expect(typeof funciones.filterDataByType).toBe('function');
    });

    it('search by type', () => {
      const result = funciones.filterDataByType(data.pokemon,'fire');
    
        expect(result[0].type).not.toHaveLength(3);
      });        
  });

  describe('funciones.computeStats', () => {
    it('deberia ser una función', () => {
      expect(typeof funciones.computeStats).toBe('function');
    });

    it('Percents by type', () => {
      const result = funciones.computeStats(data.pokemon,'fire');
    
        expect(result).toBe('8.76');
      });        
  });
});
/*

describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
