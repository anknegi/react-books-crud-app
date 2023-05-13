import { useState } from 'react'

const BookEdit = ({book, onSubmit}) => {
    const [title, setTitle] = useState(book.title)

    const onChangeHandle = (event) => {
        setTitle(event.target.value)
    }
    const onClickSaveHandle = (event) => {
        event.preventDefault()
        onSubmit(book.id, title)
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