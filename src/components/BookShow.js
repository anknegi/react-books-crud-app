import { useState } from 'react'
import BookEdit from './BookEdit'
import useBooksContext from '../hooks/use-books-context'

const BookShow = ({book, onDelete}) => {
    const [showEdit, setShowEdit] = useState(false)
    const { deleteBookById } = useBooksContext()

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }
    const handleEditClick = () => {
        setShowEdit(!showEdit)
    }

    const handleSubmit = () => {
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