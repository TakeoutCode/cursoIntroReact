import { useMemo, useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

const useTodos = () => {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1', []);

  const [searchValue, setSearchValue] = useState('');
  const [openModal, setOpenModal] = useState(false);

  const completedTodos = useMemo(
    () => todos.filter(todo => todo.completed).length,
    [todos]
  );

  const totalTodos = todos.length;

  const searchedTodos = useMemo(() => {
    if (searchValue.length === 0) return todos;

    const searchText = searchValue.toLowerCase();
    return todos.filter(todo =>
      todo.text.toLowerCase().includes(searchText)
    );
  }, [todos, searchValue]);

  const addTodo = (text) => {
    saveTodos([
      ...todos,
      { text, completed: false },
    ]);
  };

  const toggleCompleteTodos = (text) => {
    saveTodos(
      todos.map(todo =>
        todo.text === text
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  const deleteTodos = (text) => {
    saveTodos(
      todos.filter(todo => todo.text !== text)
    );
  };

  return {
    loading,
    error,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    addTodo,
    toggleCompleteTodos,
    deleteTodos,
    openModal,
    setOpenModal,
  };
};

export { useTodos };
