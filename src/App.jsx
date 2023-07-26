import TwitterFollowCard from "./TwitterFollowCard"

function App() {
const users=[
  {
    userName: 'midudev',
    name:'Miguel Ángel Durán',
    isFollowing:true
  },
  {
    userName: 'billieeilish',
    name:'Billie Eilish',
    isFollowing:true
  },
  {
    userName: 'NetflixLAT',
    name:'Netflix Latinoamérica',
    isFollowing:true
  },
  {
    userName: 'pheralb',
    name:'Pablo H.',
    isFollowing:false
  },
  {
    userName: 'TMChein',
    name:'Tomas',
    isFollowing:false
  },
]

  return (
<section className="App">
  {
    users.map(({userName, name, isFollowing}) =>(
      <TwitterFollowCard 
      key={userName}
      userName={userName}
      initialIsFollowing={isFollowing}>
      {name}
      </TwitterFollowCard>

    )
    )
  }


</section>
 
  )
}

export default App
