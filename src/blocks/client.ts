import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://subgraph.bscswap.com/subgraphs/name/bscswap/bsc-blocks-timestamp'
  }),
  cache: new InMemoryCache()
})
