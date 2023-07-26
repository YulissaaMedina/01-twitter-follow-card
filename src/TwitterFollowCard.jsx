import './App.css'
import { useState } from 'react'

const TwitterFollowCard = ({ children, userName, initialIsFollowing }) => {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

const text = isFollowing ? 'Siguiendo' : 'Seguir'
const buttonClassName = isFollowing 
? 'tw-followCard-button is-following'
: 'tw-followCard-button'

const handleClick = ()=>{
    setIsFollowing(!isFollowing)
}

  return (
    <article className='tw-followCard'>
<header className='tw-followCard-header'>
  <img className='tw-followCard-img' 
   src={`https://unavatar.io/${userName}`} 
  alt="Netflix" />
  <div className='tw-followCard-div'>
    <strong>{children}</strong>
    <span  className='tw-followCard-span'>@{userName}</span>
  </div>
</header>
<aside>
  <button  className={buttonClassName} onClick={handleClick}>
    <span className='tw-followCard-text'> {text} </span> 
    <span  className='tw-followCard-stopFollow'>Dejar de seguir</span>
  </button>
</aside>
 </article>
  )
}
export default TwitterFollowCard