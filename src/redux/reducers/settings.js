import { settings as D } from '../definitions';

const initialState = {
  settings: {
    data: {},
    loading: false,
    errors: [],
  },
};

export const settings = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case D.GET_APP_SETTINGS_REQUESTED:
      return {
        ...state,
        settings: {
          loading: true,
        },
      };
    case D.GET_APP_SETTINGS_SUCCESS:
      return {
        ...state,
        settings: {
          data: {
            ...state.settings.data,
            ...payload,
          },
          loading: false,
        },
      };
    case D.GET_APP_SETTINGS_FAILED:
      return {
        ...state,
        settings: {
          ...state.settings,
          loading: false,
          errors: payload,
        },
      };

    default:
      return state;
  }
};

export default { settings };
