import PropTypes from 'prop-types'; // ES6
import{BsBookmark}from "react-icons/bs"
const Blog = ({blog,handleAddtoBookmark,handleMarkAsRead}) => {
    const {title,cover,reading_time,author_image,author,post_date,hashtag,id}=blog;
    
    return (
        <div className='border-b py-5 mb-20'>
            <img src={cover} alt={title} className='mb-4' />
            <div className="flex justify-between">
                <div className='flex gap-3 items-center my-6'>
                    <img src={author_image} alt={author} className='rounded-full w-16 h-16'/>
                    <div>
                        <h4 className='text-2xl font-bold'>{author}</h4>
                        <span className='text-base text-gray-500 text-semibold'>{post_date}</span>
                    </div>
                </div>
                <div className='py-6 flex items-center gap-2'>
                    <h4 className=''>{reading_time} Minutes Ago</h4>
                    <button onClick={()=>handleAddtoBookmark(blog)}><BsBookmark/></button>
                </div>
            </div>
          <h1 className='text-4xl'>{title}</h1>
          <div className='flex gap-3'>
            {
            hashtag.map((hash,idx)=> (
                <span key={idx} className='text-red-400'>
                    <a href="#">{hash}</a>
                </span>
            ))
          }
          </div>
            <button className='my-4 text-indigo-400 active:text-red-400' onClick={()=>handleMarkAsRead(id,reading_time)}>Mark As Read</button>
        </div>
    );
};

// protypes 
Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddtoBookmark: PropTypes.func.isRequired,
    handleMarkAsRead: PropTypes.func
}
export default Blog;