import React, {useContext} from 'react' 
import TextField from '@material-ui/core/TextField' 
import useInputState from './hooks/useInputState';
import {DispatchContext} from './contexts/todos.context';
function EditTodoForm({id,task, toggle}) {
    const dispatch = useContext(DispatchContext);
    
    const [value, handleChange] = useInputState(task);

    return (
        <form onSubmit={(e)=>{
            e.preventDefault();
            dispatch({type:"EDIT",id, task:value});
            toggle();
        }}
        style={{marginLeft:"1rem", width:"100%"}}
        >

            <TextField 
                        margin="normal" 
                        value={value} 
                        onChange={handleChange} 
                        fullWidth
                        autoFocus
            />
        </form>
    )
}

export default EditTodoForm;