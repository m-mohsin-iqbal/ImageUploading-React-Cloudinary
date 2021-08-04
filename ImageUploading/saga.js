import { put, takeLatest, all, fork, call } from 'redux-saga/effects';
import { postRequest } from 'utils/request';
import * as constants from './constants';
import * as actions from './actions';
function* postImageHandler(action) {
  console.log(action.image)
  try {
    const formData = new FormData()
    formData.append("file",action.image)
    formData.append("upload_preset","w0jq5jbk")
    const data = yield postRequest('https://api.cloudinary.com/v1_1/dxr8ybhav/image/upload',formData);
    console.log(data)
    yield put(actions.saveUrlAction(data))
  } catch (error) {
    yield put(setError(error));
  }
}

function* postImageWatcher() {
  yield takeLatest(constants.UPLOAD_IMAGE, postImageHandler);
}

export default function* rootSaga() {
  yield all([
    fork(postImageWatcher),
  ]);
}