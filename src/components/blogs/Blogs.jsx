import { useEffect, useState } from 'react';
import Blog from './Blog';
import PropTypes from 'prop-types'; // ES6

const Blogs = ({handleAddtoBookmark,handleMarkAsRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch("database.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])
    return (
        <div>
            {
                blogs.map((blog)=><Blog key={blog.id} blog={blog}handleAddtoBookmark={handleAddtoBookmark}handleMarkAsRead={handleMarkAsRead}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes ={
    handleAddtoBookmark : PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;
