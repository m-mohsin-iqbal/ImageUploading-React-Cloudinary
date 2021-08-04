/*
 *
 * ImageUploading actions
 *
 */

import {DEFAULT_ACTION,IMAGE_UPLOADING_ACTION,SAVE_IMAGE_ACTION, UPLOAD_IMAGE,SAVE_URL } from './constants';

export function defaultAction() {
  return {
    type: DEFAULT_ACTION,
  };
}
export function imageUploadingAction() {
  return {
    type: IMAGE_UPLOADING_ACTION,
  };
}
export function saveImageAction(saved_image) {
  return {
    type: SAVE_IMAGE_ACTION,
    saved_image,
  };
}
export function uploadImageAction(image) {
  return {
    type: UPLOAD_IMAGE,
    image,
  };
}
export function saveUrlAction(url) {
  return {
    type: SAVE_URL,
    url,
  };
}
