import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
//React router 
import { BrowserRouter, Route} from 'react-router-dom'

//This will load the index.js file from the reducers folder
import reducers from './reducers';
import PostsIndex from './components/posts_index';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
		<div>
			<Route path="/" component={PostsIndex}/>
		</div>    	
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));

