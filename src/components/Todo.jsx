import { Link } from 'react-router-dom'
import trashCan from '../assets/images/trash-can.svg'
import checkbox from '../assets/images/checkbox-checked.svg'
import checkboxNotChecked from '../assets/images/checkbox-not-checked.svg'

import style from './Todo.module.css'

function Todo({ todo, deleteTodo, checkButton }) {

    const deleteButtonHandler = (e) => {
        // e.prevenDefault()

        deleteTodo(todo.id)
    }


    const checkButtonHandler = () => {
        checkButton({ id: todo.id, done: !todo.done})
    }

    const icon = todo.done ? checkbox : checkboxNotChecked

        return <li className={style.todo_item}>
            <span className={style.content}>
                <Link className={style.iconLink} onClick= {checkButtonHandler}>
            <img src={icon}  className={style.icon} alt='' /> 
                </Link>
                {todo.content}
                </span>
                <button className={style.trashButton} type='submit' onClick={deleteButtonHandler}>
                <img src={trashCan} alt="Borrar" className={style.trashCan} /> 

            </button>
        </li>
    }
export default Todo