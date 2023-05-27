import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'

const BookCreate = () => {
    const [title, setTitle] = useState('')
    const { createBook } = useBooksContext()

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        createBook(title)
    }
    return (
        <div className="book-create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookTitle">Book Title</label>
                <input className="input" value={title} onChange={handleTitleChange} />
                <button className="button">Create!</button>
            </form>
        </div>
    )
}

export default BookCreate