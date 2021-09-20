import { WebSocketLink } from "apollo-link-ws";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const wsLink = new WebSocketLink({
  uri: "ws://localhost:8000/graphql",
  options: {
    reconnect: true,
  },
});

export default new ApolloClient({
  cache: new InMemoryCache(),
  link: wsLink,
});
