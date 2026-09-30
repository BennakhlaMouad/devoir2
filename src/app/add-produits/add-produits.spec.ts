import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddProduits } from './add-produits';

describe('AddProduits', () => {
  let component: AddProduits;
  let fixture: ComponentFixture<AddProduits>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddProduits],
    }).compileComponents();

    fixture = TestBed.createComponent(AddProduits);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
