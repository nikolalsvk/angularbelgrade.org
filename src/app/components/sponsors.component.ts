import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bgd-sponsors',
  standalone: true,
  template: `
    <h2 id="sponsors" class="section-title">Sponsors</h2>

    <div class="logos">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
      .logos {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 2rem;
      }

      :host {
        display: block;
        padding-bottom: 2rem;
        border-bottom: 1px solid #303b57;
      }

      @media only screen and (min-width: 850px) {
        .logos {
          flex-direction: row;
          gap: 4rem;
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SponsorsComponent {}
