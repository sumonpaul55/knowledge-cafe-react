import PropTypes from 'prop-types'; // ES6
import Bookmark from './Bookmark';
const Bookmarks = ({bookmark,readingtime}) => {
    return (
        <div className="md:w-1/3 my-5 px-5 sticky top-0">
            <div className="">
                <h2 className="py-3 bg-[#6047ec60] px-3 font-semibold rounded-md">Spend time on read: {readingtime} min</h2>
            </div>
            <div className='my-5 bg-gray-300 py-5 px-2 rounded-md h-full'>
                <h4 className='font-bold text-2xl'>Bookmarked Blogs: {bookmark.length}</h4>
                {
                    bookmark.map((bokmarked,idx)=>(
                        <Bookmark key={idx} bookmark={bokmarked}></Bookmark>
                    ))
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes ={
    bookmark: PropTypes.array.isRequired,
    readingtime: PropTypes.number
}
export default Bookmarks;