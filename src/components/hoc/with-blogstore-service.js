import React from 'react';

import { BlogstoreServiceConsumer } from './blogstore-service-context';

const withBlogstoreService = () => Wrapped => {
  return props => {
    return (
      <BlogstoreServiceConsumer>
        {blogService => {
          return <Wrapped {...props} blogService={blogService} />;
        }}
      </BlogstoreServiceConsumer>
    );
  };
};

export default withBlogstoreService;
