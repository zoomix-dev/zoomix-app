import { settings as D } from '../definitions';

export const getAppSettings = (payload) => ({
  type: D.GET_APP_SETTINGS_REQUESTED,
  payload,
});
