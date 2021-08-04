/*
 *
 * ImageUploading reducer
 *
 */
import produce, { isDraft } from 'immer';
import { DEFAULT_ACTION,SAVE_IMAGE_ACTION,IMAGE_UPLOADING_ACTION,UPLOAD_IMAGE,SAVE_URL } from './constants';

export const initialState = {
  savedImage:null,
  savedUrl:null

};

/* eslint-disable default-case, no-param-reassign */
const imageUploadingReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case DEFAULT_ACTION:
        console.log("THis is default action")
        break;
        case SAVE_IMAGE_ACTION:
          const file = action.saved_image
          draft.savedImage = file
          console.log("saved state: ",state.savedImage)
        break;
        case UPLOAD_IMAGE:

          console.log("IMAGE uPLOADING: ")
        break;
        case SAVE_URL:
          draft.savedUrl = action.url.url
          console.log("url: ",action.url.url)
        break;
    }
  });

export default imageUploadingReducer;
