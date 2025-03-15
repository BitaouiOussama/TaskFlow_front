import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'custom-auth-view',
  standalone: true,
  imports: [
    RouterModule
  ],
  templateUrl: './auth-view.component.html',
  styleUrl: './auth-view.component.scss'
})
export class AuthViewComponent {

}
