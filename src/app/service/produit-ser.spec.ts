import { TestBed } from '@angular/core/testing';
import { ProduitSer } from './produit-ser';

describe('ProduitSer', () => {
  let service: ProduitSer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProduitSer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
