import { createAction } from 'typesafe-actions';

export const countersActions = {
  increment: createAction('counters/INCREMENT'),
  add: createAction('counters/ADD', (amount: number) => ({
    type: 'counters/ADD',
    payload: amount,
  })),
};
