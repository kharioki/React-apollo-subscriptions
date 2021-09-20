import { ApolloProvider } from '@apollo/client';
import apolloClient from './apolloSetup';
import './App.css';
import NewVideoNotification from './components/NewVideoNotification';

function App() {
  return (
    <ApolloProvider client={apolloClient}>
      <NewVideoNotification />
    </ApolloProvider>
  );
}

export default App;
