> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessingrawphoto:previewphoto:resolvedsettings:bracketsettings:error:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessingrawphoto:previewphoto:resolvedsettings:bracketsettings:error:))

# photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Provides the delegate a captured image in RAW format.

> In iOS 11 and later, implement the [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md) method instead.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingRawPhoto rawSampleBuffer: CMSampleBuffer?, previewPhoto previewPhotoSampleBuffer: CMSampleBuffer?, resolvedSettings: AVCaptureResolvedPhotoSettings, bracketSettings: AVCaptureBracketedStillImageSettings?, error: (any Error)?)
```

## Parameters

- `output`: The photo output performing the capture.
- `rawSampleBuffer`: A sample buffer containing the captured RAW image. The format of this buffer matches the format you requested for the RAW image (see the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property of your photo settings).

  If an error prevented successful capture, this parameter is `nil`—see the `error` parameter for a description of the failure.
- `previewPhotoSampleBuffer`: If you requested a thumbnail-sized version of the photo (with the [previewPhotoFormat](../avcapturephotosettings/previewphotoformat.md) property of your photo settings object), a sample buffer containing the thumbnail photo in the requested format. If you did not request preview delivery, or if an error prevented capture, this parameter is `nil`.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `bracketSettings`: If you requested a bracketed capture of multiple images with a [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md), a bracketed still image settings object describing which image in the bracket this delegate call corresponds to. If you did not request bracketed capture, this parameter is `nil`.
- `error`: If an the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of a RAW format capture. (If you request capture in both RAW and a processed format, the photo output calls both this method and the [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.)

> **Important**

>  You must implement either this method or the [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md) method if you request capture in a RAW format. The photo output validates this requirement when you call its [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

If you request RAW format capture, the photo output calls this method once for each exposure in the capture request. If you request a single image capture, this method is called once. If you request a bracketed capture with multiple exposures, this method is called once for each exposure.

## See Also

### Receiving capture results

- [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [photoOutput(\_:didFinishRecordingLivePhotoMovieForEventualFileAt:resolvedSettings:)](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [photoOutput(\_:didFinishCapturingDeferredPhotoProxy:error:)](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).

# captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ (deprecated in 11.0) · iPadOS 10.0+ (deprecated in 11.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

Provides the delegate a captured image in RAW format.

> In iOS 11 and later, implement the [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md) method instead.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishProcessingRawPhotoSampleBuffer:(CMSampleBufferRef) rawSampleBuffer previewPhotoSampleBuffer:(CMSampleBufferRef) previewPhotoSampleBuffer resolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings bracketSettings:(AVCaptureBracketedStillImageSettings *) bracketSettings error:(NSError *) error;
```

## Parameters

- `output`: The photo output performing the capture.
- `rawSampleBuffer`: A sample buffer containing the captured RAW image. The format of this buffer matches the format you requested for the RAW image (see the [rawPhotoPixelFormatType](../avcapturephotosettings/rawphotopixelformattype.md) property of your photo settings).

  If an error prevented successful capture, this parameter is `nil`—see the `error` parameter for a description of the failure.
- `previewPhotoSampleBuffer`: If you requested a thumbnail-sized version of the photo (with the [previewPhotoFormat](../avcapturephotosettings/previewphotoformat.md) property of your photo settings object), a sample buffer containing the thumbnail photo in the requested format. If you did not request preview delivery, or if an error prevented capture, this parameter is `nil`.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `bracketSettings`: If you requested a bracketed capture of multiple images with a [AVCapturePhotoBracketSettings](../avcapturephotobracketsettings.md), a bracketed still image settings object describing which image in the bracket this delegate call corresponds to. If you did not request bracketed capture, this parameter is `nil`.
- `error`: If an the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of a RAW format capture. (If you request capture in both RAW and a processed format, the photo output calls both this method and the [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.)

> **Important**

>  You must implement either this method or the [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md) method if you request capture in a RAW format. The photo output validates this requirement when you call its [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

If you request RAW format capture, the photo output calls this method once for each exposure in the capture request. If you request a single image capture, this method is called once. If you request a bracketed capture with multiple exposures, this method is called once for each exposure.

## See Also

### Receiving capture results

- [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings:](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [captureOutput:didFinishCapturingDeferredPhotoProxy:error:](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
