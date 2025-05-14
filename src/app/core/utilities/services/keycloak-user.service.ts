import { Injectable } from '@angular/core';
import { KeycloakService } from 'keycloak-angular';
import { KeycloakProfile } from 'keycloak-js';

interface CustomAttributes extends Record<string, string[] | undefined> {
  companyId?: string[];
}

@Injectable({
  providedIn: 'root',
})
export class KeycloakUserService {
  public perfilUsuario: KeycloakProfile | null = null; // Información del usuario logueado
  public rolesUsuario: string[] | undefined; // Roles del usuario
  public companyId: string = '';
  public userId: string = '';
  public sub: string = '';

  constructor(private readonly keycloakService: KeycloakService) {}

  public async getUserInfo() {
    this.perfilUsuario = await this.keycloakService.loadUserProfile();
    this.userId = this.perfilUsuario.id ?? '';
    const attrs = this.perfilUsuario.attributes as CustomAttributes;
    if (attrs?.companyId?.length) {
      this.companyId = attrs.companyId[0];
      //console.log('Company ID:', this.companyId);
    } else {
      console.warn('companyId no está definido en los atributos del usuario');
    }
  }

  public logout() {
    this.keycloakService.logout('http://localhost:4200');
  }
}
