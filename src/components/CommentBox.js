import React, { PropTypes } from 'react'

class CommentBox extends React.Component {
  constructor(){
    super();
    this.state={
      comments:[
        'hello1',
        'hello2',
      ]
    }
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
        <form className='comment-form'>
          <input type='text' className='input' />
          <button type='submit' className='submit-btn'>提交</button>

        </form>
        <div className='underline'></div>
      </div>
    )
  }
}

export default CommentBox;
