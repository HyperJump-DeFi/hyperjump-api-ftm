import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import fetch from 'node-fetch'

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: 'https://api.thegraph.com/subgraphs/name/angry-mech/hyperjump-ftm-blocks' // https://ftm-blocks.hyperjump.app'
  }),
  cache: new InMemoryCache()
})
