import { useState } from 'react'
import useBooksContext from '../hooks/use-books-context'


const BookEdit = ({book, onSubmit}) => {
    const [title, setTitle] = useState(book.title)
    const { editBookById } = useBooksContext()

    const onChangeHandle = (event) => {
        setTitle(event.target.value)
    }
    const onClickSaveHandle = (event) => {
        event.preventDefault()
        onSubmit()
        editBookById(book.id, title)
    }
    return (
        <form className="book-edit">
            <label>Title</label>
            <input className="input" type="text" onChange={onChangeHandle} value={title} />
            <button className="button isPrimary" onClick={onClickSaveHandle}>Save</button>
        </form>
    )
}

export default BookEdit