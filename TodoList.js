import React, {useContext} from 'react';
import Paper from '@material-ui/core/Paper'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import Todo from './Todo';
import {TodosContext} from './contexts/todos.context';
 

function TodoList(){
    const todos = useContext(TodosContext);

    if(todos.length)
    return(
        <Paper>
            <List>
            {todos.map((todo, index)=>( 
                <React.Fragment key={index}>
                    <Todo {...todo} 
                        key={todo.id} />
                    {todos.length-1 !==index&&<Divider/>}
                </React.Fragment> 
            ))}
            </List>
        </Paper>
    );
    return null;

}

export default TodoList;