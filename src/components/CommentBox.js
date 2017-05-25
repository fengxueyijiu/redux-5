import React, { PropTypes } from 'react';
import store from '../redux/store';


class CommentBox extends React.Component {
  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state={
      comments:store.getState()
    }
  }
  handleSubmit(e){
    e.preventDefault()
    const content = this.refs.content.value;
    this.setState({ comments: [...this.state.comments, content] })
    this.refs.commentForm.reset()

  }
  render () {

    let commentList = this.state.comments.map((item,i) => {
      return (<div key={i} className='comment'>
        {item}
      </div>)
    })
    return(
      <div className="comment-box">
        {commentList}
        <form ref='commentForm' onSubmit={this.handleSubmit} className='comment-form'>
          <input type='text' className='input' ref='content'/>
          <button type='submit' className='submit-btn'>提交</button>

        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox;
