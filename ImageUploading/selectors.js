import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the imageUploading state domain
 */

const selectImageUploadingDomain = state =>
  state.imageUploading || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by ImageUploading
 */

const makeSelectImageUploading = () =>
  createSelector(
    selectImageUploadingDomain,
    substate => substate,
  );

const SelectImageUploading = 
  createSelector(
    selectImageUploadingDomain,
    state => state.savedImage,
  );
  const SavedImageUrl = 
  createSelector(
    selectImageUploadingDomain,
    state => state.savedUrl,
  );

  
export default makeSelectImageUploading;
export { selectImageUploadingDomain,SelectImageUploading,SavedImageUrl };
