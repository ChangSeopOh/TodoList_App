import React, {useContext, memo} from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Checkbox from '@material-ui/core/Checkbox'
import IconButton from '@material-ui/core/IconButton'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import {DispatchContext} from './contexts/todos.context';
import useToggle from './hooks/useToggle';
import EditTodoForm from './EditTodoForm';

function Todo({id, task, completed }) {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggle();

    return ( 
    <ListItem style={{height:"64px"}}>
        {isEditing? <EditTodoForm task={task} id={id} toggle={toggle}/>:
            <>
                <Checkbox tabIndex={-1} checked={completed} onClick={()=>dispatch({type:"TOGGLE",id})}/>
                <ListItemText style={{textDecoration: completed?"line-through":"none"}}>
                    {task}
                </ListItemText>
                <ListItemSecondaryAction>
                    <IconButton aria-label="Delete" onClick={()=>dispatch({type:"REMOVE",id})}>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton aria-label="Edit" onClick={toggle}>
                        <EditIcon />
                    </IconButton>
                </ListItemSecondaryAction>
                
            </>
    }
        
    </ListItem>
    
    )
}

export default memo(Todo);