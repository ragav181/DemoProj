import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import BookList from './BookList';
import HomeView from './Homepage';


const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

class App extends Component {
  render() {
    return (
      <div className="App">
        <ApolloProvider client={client}>
        <HomeView/>
          {/* <BookList/> */}
        </ApolloProvider>
      </div>
    );
  }
}

export default App;
