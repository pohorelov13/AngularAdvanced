import {CanActivateFn} from '@angular/router';

export const exitGuard: CanActivateFn = (route, state) => {
  return confirm("Are you sure you want to exit?");
};
