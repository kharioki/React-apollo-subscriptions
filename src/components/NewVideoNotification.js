import gql from 'graphql-tag';
import { useSubscription } from '@apollo/client'

const SUBSCRIBE_VIDEO_ADDED = gql`
  subscription onVideoAdded($title: String!) {
    videoAdded(title: $title) {
      id
      title
      url
    }
  }
`;

const NewVideoNotification = () => {
  const { data, error, loading } = useSubscription(SUBSCRIBE_VIDEO_ADDED, {
    variables: {
      title: 'New Video Added'
    }
  });

  if (loading) return <div>Loading...</div>;


  if (error) return <div>Error! {error.message}</div>;

  return (
    <div className="notification">
      <h2>New Video Added</h2>
      <p>ID: {data.videoAdded.id}</p>
      <p>Title: {data.videoAdded.title}</p>
      <p>URL: {data.videoAdded.url}</p>
    </div>
  );
};

export default NewVideoNotification;