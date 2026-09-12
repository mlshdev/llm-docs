> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessinglivephototomoviefileat:duration:photodisplaytime:resolvedsettings:error:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessinglivephototomoviefileat:duration:photodisplaytime:resolvedsettings:error:))

# photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides the delegate the movie file URL resulting from a Live Photo capture.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingLivePhotoToMovieFileAt outputFileURL: URL, duration: CMTime, photoDisplayTime: CMTime, resolvedSettings: AVCaptureResolvedPhotoSettings, error: (any Error)?)
```

## Parameters

- `output`: The photo output performing the capture.
- `outputFileURL`: The file URL at which the movie content of the Live Photo was written.
- `duration`: The duration of the Live Photo movie.
- `photoDisplayTime`: The timestamp within the movie to which the still image part of the Live Photo corresponds.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `error`: If the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of a Live Photo capture. When the photo output calls this method, the movie component of the Live Photo has been written to the location specified by the `outputFileURL` parameter and the Live Photo is ready for consumption. (To receive the still image component of the Live Photo, implement the [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.)

> **Tip**

>  To add captured Live Photos to the user’s Photos library, use the [PHAssetCreationRequest](../../photos/phassetcreationrequest.md) class. To use Live Photos from the Photos library, use the [PHLivePhoto](../../photos/phlivephoto.md) and [PHLivePhotoView](../../photosui/phlivephotoview.md) classes. To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

You don’t need to implement this method if you’re not requesting Live Photo capture.

> **Important**

>  You must implement this method if you request Live Photo capture (by setting the [livePhotoMovieFileURL](../avcapturephotosettings/livephotomoviefileurl.md) property of your photo settings object). The photo output validates this requirement when you call its [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

The photo output calls this method only once for each Live Photo capture.

## See Also

### Receiving capture results

- [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [photoOutput(\_:didFinishRecordingLivePhotoMovieForEventualFileAt:resolvedSettings:)](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [photoOutput(\_:didFinishCapturingDeferredPhotoProxy:error:)](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.

# captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Provides the delegate the movie file URL resulting from a Live Photo capture.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishProcessingLivePhotoToMovieFileAtURL:(NSURL *) outputFileURL duration:(CMTime) duration photoDisplayTime:(CMTime) photoDisplayTime resolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings error:(NSError *) error;
```

## Parameters

- `output`: The photo output performing the capture.
- `outputFileURL`: The file URL at which the movie content of the Live Photo was written.
- `duration`: The duration of the Live Photo movie.
- `photoDisplayTime`: The timestamp within the movie to which the still image part of the Live Photo corresponds.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.
- `error`: If the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of a Live Photo capture. When the photo output calls this method, the movie component of the Live Photo has been written to the location specified by the `outputFileURL` parameter and the Live Photo is ready for consumption. (To receive the still image component of the Live Photo, implement the [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md) method.)

> **Tip**

>  To add captured Live Photos to the user’s Photos library, use the [PHAssetCreationRequest](../../photos/phassetcreationrequest.md) class. To use Live Photos from the Photos library, use the [PHLivePhoto](../../photos/phlivephoto.md) and [PHLivePhotoView](../../photosui/phlivephotoview.md) classes. To display Live Photo content on the web, use the [LivePhotosKit JS](https://developer.apple.com/documentation/livephotoskitjs) framework.

You don’t need to implement this method if you’re not requesting Live Photo capture.

> **Important**

>  You must implement this method if you request Live Photo capture (by setting the [livePhotoMovieFileURL](../avcapturephotosettings/livephotomoviefileurl.md) property of your photo settings object). The photo output validates this requirement when you call its [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

The photo output calls this method only once for each Live Photo capture.

## See Also

### Receiving capture results

- [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings:](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [captureOutput:didFinishCapturingDeferredPhotoProxy:error:](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.
