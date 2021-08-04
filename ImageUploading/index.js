/**
 *
 * ImageUploading
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectImageUploading,SelectImageUploading, selectImageUploadingDomain,SavedImageUrl} from './selectors';
import reducer from './reducer';
import saga from './saga';
import {Image} from 'cloudinary-react'
import { imageUploadingAction, saveImageAction,uploadImageAction } from './actions';
import ReactPlayer from 'react-player';
export function ImageUploading({dispatch,saveImageAction,savedImage,savedUrl}) {
  useInjectReducer({ key: 'imageUploading', reducer });
  useInjectSaga({ key: 'imageUploading', saga });
  const saveImageHandler = (event) =>{
    dispatch(saveImageAction(event.target.files[0]))
  }
  const imageUploadHandler = () =>{
    dispatch(uploadImageAction(savedImage))
  }
  console.log("saved imag in index: ",savedImage)
  console.log("SavedImageURL: ",savedUrl)
  return(
    <div>
      <Image cloudName="dxr8ybhav"  publicId={savedUrl}></Image>
    <div style={{margin:'100px 100px 100px 100px',width:"400px"}}>
      <input onChange ={saveImageHandler} type="file"/>
      <button onClick={imageUploadHandler}>Upload</button>
    </div>
    </div>
  );;
}

ImageUploading.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = state =>({
  savedImage:SelectImageUploading(state),
  savedUrl:SavedImageUrl(state)
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    saveImageAction,
    uploadImageAction

  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(ImageUploading);
