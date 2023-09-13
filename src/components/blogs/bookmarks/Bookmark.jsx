import PropTypes from 'prop-types'; // ES6
const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div className='bg-white p-4 my-4 rounded-md'>
            <h2 className='font-semibold'>{title}</h2>
        </div>
    );
};
Bookmark.propTypes ={
    bookmark: PropTypes.object.isRequired
}
export default Bookmark;