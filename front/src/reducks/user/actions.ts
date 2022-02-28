import actionCreatorFactory from "typescript-fsa";
import { User } from "../../types/entity/user";

const actionCreator = actionCreatorFactory();

export const signUpAction = actionCreator<User>("SIGN_UP");
export const signInAction = actionCreator<User>("SIGN_IN");
export const signOutAction = actionCreator("SIGN_OUT");
export const editExperiencePointAction = actionCreator<User>("EDIT_EXPERIENCE_POINT");
export const editUserInfoAction = actionCreator<User>("EDIT_USER_INFO");
export const editUserImageAction = actionCreator<User>("EDIT_USER_IMAGE");
export const deleteUserImageAction = actionCreator("DELETE_USER_IMAGE");
