import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://ftmgraph2.hyperswap.fi/subgraphs/name/ftm-subgraph'
  }),
  cache: new InMemoryCache()
})
