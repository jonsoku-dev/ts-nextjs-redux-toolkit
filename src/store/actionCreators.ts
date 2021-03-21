import { todosActions } from '@/store/todos';
import { selectedTodoActions } from '@/store/selectedTodo';
import { counterActions } from '@/store/counter';
import { jsonTodosActions } from '@/store/jsonTodos';

export default {
  ...todosActions,
  ...selectedTodoActions,
  ...counterActions,
  ...jsonTodosActions,
};
