import _ from 'lodash'
import {FETCH_POSTS, FETCH_POST, DELETE_POST} from '../actions';
 
export default function(state = {},action){
	switch(action.type){
	case DELETE_POST:
		return _.omit(state, action.payload)
	//Fetch individual post
	case FETCH_POST:
		// const post = action.payload.data;
		// const newState = {...state }
		// newState[post.id]=post;
		// return newState;
		return {...state, [action.payload.data.id]:action.payload.data}
	case FETCH_POSTS:
		//Remap api object to use the post id as the key for ease of use
		return _.mapKeys(action.payload.data, 'id')
	default:
		return state;
	} 
} 