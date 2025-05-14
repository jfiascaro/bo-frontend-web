import { inject } from '@angular/core';
import {
  ApolloClientOptions,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client/core';
import { setContext } from '@apollo/client/link/context';
import { KeycloakService } from 'keycloak-angular';
import { environment } from '../envs/environment';

export function createApollo(): ApolloClientOptions<any> {
  const keycloak = inject(KeycloakService);

  const httpLink = createHttpLink({
    uri: environment.app.graphql.bone.uri,
  });

  const authLink = setContext(async (_, { headers }) => {
    const token = await keycloak.getToken(); // todavía es async pero ejecutado en runtime
    return {
      headers: {
        ...headers,
        Authorization: token ? `Bearer ${token}` : '',
      },
    };
  });

  return {
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  };
}
