import { reducerWithInitialState } from "typescript-fsa-reducers";
import initialState from "../store/initialState";
import * as Actions from "./actions";

export const UsersReducer = reducerWithInitialState(initialState.users)
  .case(Actions.signUpAction, (state, payload) => ({
    ...state,
    isSignedIn: true,
    uid: payload.uid,
    name: payload.name,
    email: payload.email,
    image: payload.image,
  }))
  .case(Actions.signInAction, (state, payload) => ({
    ...state,
    isSignedIn: true,
    uid: payload.uid,
    name: payload.name,
    email: payload.email,
    image: payload.image,
  }))
  .case(Actions.signOutAction, () => ({
    ...initialState.users,
  }))
  .case(Actions.editUserInfoAction, (state, payload) => ({
    ...state,
    name: payload.name,
    email: payload.email,
  }))
  .case(Actions.editUserImageAction, (state, payload) => ({
    ...state,
    image: payload.image,
  }))
  .case(Actions.deleteUserImageAction, (state) => ({
    ...state,
    image: null,
  }))
