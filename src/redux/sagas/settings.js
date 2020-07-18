import { put, takeLatest, call } from 'redux-saga/effects';
import { settings as D } from '../definitions';
// import { getsettingsSettings } from './services/api';

function* get({ payload }) {
  try {
    // const response = yield call(getsettingsSettings, payload);
    const response = { data: { a: 1, b: 2 } };
    yield put({
      type: D.GET_APP_SEETTINGS_SUCCESS,
      payload: response,
    });
  } catch (error) {
    yield put({
      type: D.GET_APP_SEETTINGS_FAILED,
      payload: error,
    });
  }
}

const settings = [takeLatest(D.GET_APP_SETTINGS_REQUESTED, get)];

export { settings };
