import { ApolloClient, createNetworkInterface } from 'apollo-client';

const networkInterface = createNetworkInterface({ uri: 'https://api.graph.cool/simple/v1/cj6d2hxtd2k0x0121khax7nzl' })

const client = new ApolloClient({ networkInterface });

export function provideClient(): ApolloClient {
  return client;
}
