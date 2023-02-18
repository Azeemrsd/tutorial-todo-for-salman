import { TestBed } from '@angular/core/testing';

import { AppRouterResolver } from './app-router.resolver';

describe('AppRouterResolver', () => {
  let resolver: AppRouterResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(AppRouterResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
