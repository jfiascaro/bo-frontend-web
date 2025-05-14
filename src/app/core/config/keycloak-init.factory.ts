import { KeycloakService } from 'keycloak-angular';
import { environment } from '../envs/environment';

export function keycloakInitializer(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: environment.app.keycloak.config.url,
        realm: environment.app.keycloak.config.realm,
        clientId: environment.app.keycloak.config.clientId,
      },
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false,
      },
    });
}
