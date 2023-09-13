
import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import Header from './components/blogs/Header'
import Bookmarks from './components/blogs/bookmarks/Bookmarks'

function App() {
  const [bookmark, setBookmark] = useState([]);
  const [readingtime, setreadingtime]=useState(0)

  const handleAddtoBookmark =(post)=>{
    const newBookmarks = [...bookmark, post]
    setBookmark(newBookmarks);
  }
const handleMarkAsRead=(id,time)=>{
  const updateTime = readingtime+time;
  setreadingtime(updateTime)
  
  // remove similar items or mark as read
  const remainingbookmarks = bookmark.filter((bookmark) => bookmark.id !== id);
  setBookmark(remainingbookmarks)
}
  return (
    <>
    <Header></Header>
   <main>
    <div className="container mx-auto">
      <div className='md:flex lg:gap-10'>
          <Blogs handleAddtoBookmark={handleAddtoBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmark={bookmark}readingtime={readingtime} ></Bookmarks>
      </div>
    </div>
   </main>
    </>
  )
}

export default App
