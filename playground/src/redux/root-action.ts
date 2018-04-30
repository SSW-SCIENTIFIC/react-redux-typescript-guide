// RootActions
import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { ActionsUnion } from 'typesafe-actions';

import { countersActions as counters } from '@src/redux/counters/actions';
import { actions as todos } from '@src/redux/todos';
import { toastsActions as toasts } from '@src/redux/toasts/actions';

const actions = {
  counters,
  todos,
  toasts,
};

type AppAction = ActionsUnion<typeof actions>;
type ReactRouterAction = RouterAction | LocationChangeAction;

export type RootAction = AppAction | ReactRouterAction;
