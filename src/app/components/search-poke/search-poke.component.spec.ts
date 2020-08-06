import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPokeComponent } from './search-poke.component';

describe('SearchPokeComponent', () => {
  let component: SearchPokeComponent;
  let fixture: ComponentFixture<SearchPokeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchPokeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
