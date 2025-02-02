import { RouteMeta } from '@analogjs/router';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

export const routeMeta: RouteMeta = {
  title: 'Not Found | Angular Belgrade',
};

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Oops! Something went wrong.</h1>

    <p>Take me <a routerLink="/">home</a>.</p>
  `,
  styles: [
    `
      h1 {
        margin: 2rem;
        text-align: center;
      }

      p {
        text-align: center;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Page404 {}
