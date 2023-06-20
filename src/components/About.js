

export default function About(props) {

    

    

    
    
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
    <h1 className='my-3' style={{color: props.mode==='dark' ? 'black': 'black'}}><u>About Us </u></h1>
    
    

    <div className='container' style={{color: props.mode==='dark'? 'white': 'black'}}>
    <p className='my-4' style={{color: props.mode==='dark'? 'white': 'black'}}> 
    <strong style={{color: props.mode==='dark' ? 'black': 'black'}}>What is a TextUtils ?</strong> <br />
    It is a tool that allows you to analyse a text by counting the number of sentences, words and characters present. It also provides statistical information on the repetition of phrases and keywords. Our online TextUtils is easy to use and free of charge.
    </p>
    <p className='my-4'>
        <strong style={{color: props.mode==='dark' ? 'black': 'black'}}>Who can use it ?</strong> <br />
        It is aimed at any type of writer (author, journalist, student, etc.) who writes texts that are limited to a minimum and/or maximum number of words. It helps writers to identify unnecessary repetitions of words and promotes better harmonisation of the terminology being used. In addition, translators can easily calculate the price of a text based on their word rates.

        This tool is also intended for teachers, who can use it to assess the level of difficulty and skill required to understand a text. They can also easily extract a list of vocabulary to study.
    </p>

    <p>
      <strong style={{color: props.mode==='dark' ? 'black': 'black'}}>How do I use it ?</strong> <br />
      Our TextUtils app is very easy to use. Simply when you write your text in text box , it will automatically tell you the total count of words and character written in your text. <br />
      Some buttons are also added below the text editor which can help the user/writer to convert their own text. When the user/writer wants his/her text to be in uppercase , then he/she can use 'Convert to Uppercase' button. 
      If the user/writer wants his/her text to be in lowercase , then he/she can use 'Convert to Lowercase' button. 
      If the user/writer wants to remove extra spaces between the text , then he/she can use 'Remove Extra Spaces' button. 
      If the user/writer wants to clear the whole text , then he/she can use 'Clear Text' button.
    </p>
    </div>

    </div>
    
    </>
  )
}
