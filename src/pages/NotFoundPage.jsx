import { Link } from "react-router-dom"

function NotFoundPage() {
  return (
  <div className="notfoundpage">
   <div className="notfound">
     <h1 >NotFound</h1>
     
         <Link to='/'>Home</Link>
         
      </div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=nXamQ3Uj_KyJkJ93" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
   </div>
  )
}

export default NotFoundPage