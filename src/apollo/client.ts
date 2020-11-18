import { ApolloClient } from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export default new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://subgraph.thugswap.vip/subgraphs/name/theothug/swap-subgraph'
  }),
  cache: new InMemoryCache()
})
