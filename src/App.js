import { CreateTodoButton } from './components/CreateTodoButton';
import { EmptySearch } from './components/EmptySearch';
import { EmptyTodos } from './components/EmptyTodos';
import { Modal } from './components/Modal';
import { TodoCounter } from './components/TodoCounter';
import { TodoForm } from './components/TodoForm';
import { TodoHeader } from './components/TodoHeader';
import { TodoItem } from './components/TodoItem';
import { TodoList } from './components/TodoList';
import { TodoSearch } from './components/TodoSearch';
import { TodosError } from './components/TodosError';
import { TodosLoading } from './components/TodosLoading';
import { useTodos } from './components/useTodos';

const App = () => {
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodos,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
  } = useTodos();

  return (
    <>
      <TodoHeader>
        <TodoCounter
          totalTodos={totalTodos}
          completedTodos={completedTodos}
        />
        <TodoSearch
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
      </TodoHeader>

      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        searchValue={searchValue}
        totalTodos={totalTodos}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResult={() => (
          <EmptySearch searchValue={searchValue} />
        )}
      >
        {(todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => toggleCompleteTodos(todo.text)}
            onDelete={() => deleteTodos(todo.text)}
          />
        )}
      </TodoList>

      {openModal && (
        <Modal>
          <TodoForm
            addTodo={addTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}

      <CreateTodoButton
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
    </>
  );
};

export default App;
