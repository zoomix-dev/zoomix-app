import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleware /* logger */)));

sagaMiddleware.run(rootSaga);
