import './App.css';
import { useQuery, gql } from '@apollo/client';

const GET_MESSAGE = gql`
  query getMessage {
    hello
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_MESSAGE);

  if (loading) return <p>Loading...</p>;
  if (error) return <p> Error...</p>;
  return <div className="App">{data.hello}</div>;
}

export default App;
