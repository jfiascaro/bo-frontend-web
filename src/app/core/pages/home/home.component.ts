import { Component } from '@angular/core';
import { KeycloakUserService } from '../../utilities/services/keycloak-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  constructor(public keycloakService: KeycloakUserService) {}
}
