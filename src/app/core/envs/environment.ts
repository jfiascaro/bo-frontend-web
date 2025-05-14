export const environment = {
  app: {
    info: {
      version: '0.0.1',
    },
    keycloak: {
      config: {
        url: 'http://localhost:8080',
        realm: 'master',
        clientId: 'bo-vault-web',
      },
    },
    graphql: {
      bone: {
        uri: 'http://localhost:3000/graphql',
        ws: '',
      },
    },
  },
};
