import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productListReducer, productDetailsReducer } from "./reducers/productReducers.js";

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer
});
const initialState = {}
const middleware = [thunk];
const reduxStore = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)));

export default reduxStore;