import React from 'react';
import { useState } from "react";
import heartEmoji from './media/heart-emoji.png';
import './css/style.css'



export default function App(){

  const emojiDirectory = {
    '😀':'Grinning Face',
    '😃':'Grinning Face with Big Eyes',
    '😉':'Winking Face',
    '😇':'Smiling Face with Halo',
    '🥺':'Pleading Face',
    '😊':'Smiling Face with Smiling Eyes',
    '😂':'Face with Tears of Joy'
  }

  const [likeCounter, setLikeCounter] = useState(0)
  const [emojiMeaning, setEmojiMeaning] = useState('')
  const [clickCounter, setClickCounter] = useState(0)

  const emojiArr = Object.keys(emojiDirectory)

// functions

  function inputChangeHandeler(event){
    let inputEmoji = event.target.value
    let meaning = emojiDirectory[inputEmoji]
    if(meaning === undefined){
      meaning = 'not available in database'
    }
    setEmojiMeaning(meaning)
  }
  function emojiClickHandler(emoji){
    let meaning = emojiDirectory[emoji]
    setEmojiMeaning(meaning)
    emojiItentityHandler(emoji)
  }
  function emojiItentityHandler(emoji){
    emojiArr.forEach(item => {
      if(item === emoji){emojiClickCounter()} //all emoji seems to have the same value, the counter will apply for all the elemnts for emojiArr
    })
  }
  function emojiClickCounter(){
    setClickCounter(clickCounter+1)
  }
  function clickHandler(){
    setLikeCounter(likeCounter+1)
  }

  function clickCalculator(){
    console.log(`likeButtonClicked: ${likeCounter}`)
    console.log(emojiArr.map(emoji => {return (console.log(`${emojiDirectory[emoji]}:${clickCounter}`))}))

    return (likeCounter + clickCounter)
  }

  let clicks = clickCalculator()

  console.log(`Total clicks: ${clicks}`)

// the view part of the app

  return (
    <div className='App'>

      <h1>inside out!</h1>


      <div><input onChange={inputChangeHandeler} placeholder='Enter Emoji'/><h2>{`meaning ${emojiMeaning}`}</h2></div>


      <div className='emojiArr'>{emojiArr.map(emoji => {return (
        <span key={emoji} onClick={() => emojiClickHandler(emoji)}>
          {emoji}
        </span>
        )})}
      </div>


      <div className='like'>
        <button onClick={clickHandler}>Like the App!</button>
        <img src={heartEmoji} alt="Like the App!"/> {likeCounter}
      </div>

    </div>
  )
    
}
