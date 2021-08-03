import { ApolloServer, makeExecutableSchema } from 'apollo-server-micro'
import typeDefs from '../../db/schema'
import resolvers from '../../db/resolvers'
import connectDb from '../../db/config'

connectDb()

export const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

export const config = {
  api: {
    bodyParser: false,
  },
}

export default new ApolloServer({ schema }).createHandler({
  path: '/api/graphql',
})