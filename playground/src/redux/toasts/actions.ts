import { createAction } from 'typesafe-actions';

export type IToast = {
  id: string;
  text: string;
};

export const toastsActions = {
  addToast: createAction('toasts/ADD_TOAST', (toast: IToast) => ({
    type: 'toasts/ADD_TOAST',
    payload: toast,
  })),
  removeToast: createAction('toasts/REMOVE_TOAST', (id: string) => ({
    type: 'toasts/REMOVE_TOAST',
    payload: id,
  })),
};
