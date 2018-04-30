// import { action } from 'typesafe-actions';
import cuid from 'cuid';

import { TodosFilter, Todo } from './models';
import { ADD, TOGGLE, CHANGE_FILTER } from './types';

export const add = (title: string) => ({
  type: ADD as typeof ADD,
  payload: {
    id: cuid(),
    title: title,
    completed: false,
  } as Todo,
});
export const toggle = (id: string) => ({ type: TOGGLE as typeof TOGGLE, payload: id });
export const changeFilter = (todosFilter: TodosFilter) => ({
  type: CHANGE_FILTER as typeof CHANGE_FILTER,
  payload: todosFilter,
});
