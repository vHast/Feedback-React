import React from 'react'

//Recent change, you dont have to do this anymore but before you had to had import React in every component to use JSX

function App() {
  //We can create functions and so on

  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
  {id: 1, text: 'Comment one'},
  {id: 2, text: 'Comment two'},
  {id: 3, text: 'Comment three'},
  ]

  // We can access these JS variables with {} as shown next

  const loading = false
  const showComments = false

  if (loading) return <h1>Loading...</h1>


  return (
    <div className='container'>
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments ? 'yes' : 'no'};

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
          </ul>
          
          </div>
      </div>
  )
    // Youre allowed to put one item in return, make sure to create a div to enclose them all, you can use fragment (empty angle brckets)

    /* 
    <>
      <h1>My App</h1>
      <p>Hello</p>
    </>
    */

    
  
  //This function/component seems like its exporting HTML5 but its exporting JSX, we have to export this
}

export default App