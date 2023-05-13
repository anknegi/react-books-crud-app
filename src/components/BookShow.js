import { useState } from 'react'
import BookEdit from './BookEdit'

const BookShow = ({book, onDelete, onEdit}) => {
    const [showEdit, setShowEdit] = useState(false)

    const handleDeleteClick = () => {
        onDelete(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = (id, title) => {
        onEdit(id, title)
        setShowEdit(false)
    }

    const content = (showEdit) ? <BookEdit book={book} onSubmit={handleSubmit} /> : <h3>{book.title}</h3>
    return (
        <div className="book-show">
            <img src={`https://picsum.photos/seed/${book.id}/200/200`} alt="books" />
            {content}
        <div className="action">
            <button className="edit" onClick={handleEditClick} >Edit</button>
            <button className="delete" onClick={handleDeleteClick} >Delete</button>
        </div>
        </div>
    )
}

export default BookShow