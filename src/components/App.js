import React, { PropTypes } from 'react';
import PostBody from './PostBody';
import CommentBox from './CommentBox';


class App extends React.Component {
  render () {
    return(
      <div>
        <div className="top clearfix">
          <PostBody />
        </div>
        <div className="bottom clearfix">
          <CommentBox />
        </div>
      </div>
    )

  }
}

export default App;
