import { useState } from 'react'

const BookCreate = ({ onCreate }) => {
    const [title, setTitle] = useState('')

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        onCreate(title)
    }
    return (
        <di className="book-create">
            <form onSubmit={handleSubmit}>
                <label htmlFor="bookTitle">Book Title</label>
                <input className="input" value={title} onChange={handleTitleChange} />
                <button className="button">Create!</button>
            </form>
        </di>
    )
}

export default BookCreate