> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishcapturingdeferredphotoproxy:error:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishcapturingdeferredphotoproxy:error:))

# photoOutput(\_:didFinishCapturingDeferredPhotoProxy:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+

Tells the delegate when the system finishes capturing the photo proxy.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishCapturingDeferredPhotoProxy deferredPhotoProxy: AVCaptureDeferredPhotoProxy?, error: (any Error)?)
```

## Parameters

- `output`: The output instance.
- `deferredPhotoProxy`: A [AVCaptureDeferredPhotoProxy](../avcapturedeferredphotoproxy.md) instance that contains a proxy [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) as a placeholder for the final image.
- `error`: If the system couldn’t create the photo proxy, or any of the underlying intermediate files, an error object that describes the failure.

<a id="Discussion"></a>

## Discussion

You can use the output’s [fileDataRepresentation()](../avcapturephoto/filedatarepresentation%28%29.md) with [PHAssetCreationRequest](../../photos/phassetcreationrequest.md) to eventually produce the final, processed photo into the user’s Photo Library. Add the in-memory proxy file data representation to the photo library as quickly as possible after this call to ensure that the photo library can begin background processing. It’s also important so that the intermediates aren’t removed by a periodic clean-up job looking for abandoned intermediates produced by using the deferred photo processing APIs.

Your delegate implementation must adopt this method to opt into deferred photo processing, otherwise calling [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) throws an exception.

## See Also

### Receiving capture results

- [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [photoOutput(\_:didFinishRecordingLivePhotoMovieForEventualFileAt:resolvedSettings:)](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.

# captureOutput:didFinishCapturingDeferredPhotoProxy:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+

Tells the delegate when the system finishes capturing the photo proxy.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishCapturingDeferredPhotoProxy:(AVCaptureDeferredPhotoProxy *) deferredPhotoProxy error:(NSError *) error;
```

## Parameters

- `output`: The output instance.
- `deferredPhotoProxy`: A [AVCaptureDeferredPhotoProxy](../avcapturedeferredphotoproxy.md) instance that contains a proxy [CVPixelBuffer](../../corevideo/cvpixelbuffer-q2e.md) as a placeholder for the final image.
- `error`: If the system couldn’t create the photo proxy, or any of the underlying intermediate files, an error object that describes the failure.

<a id="Discussion"></a>

## Discussion

You can use the output’s [fileDataRepresentation](../avcapturephoto/filedatarepresentation%28%29.md) with [PHAssetCreationRequest](../../photos/phassetcreationrequest.md) to eventually produce the final, processed photo into the user’s Photo Library. Add the in-memory proxy file data representation to the photo library as quickly as possible after this call to ensure that the photo library can begin background processing. It’s also important so that the intermediates aren’t removed by a periodic clean-up job looking for abandoned intermediates produced by using the deferred photo processing APIs.

Your delegate implementation must adopt this method to opt into deferred photo processing, otherwise calling [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) throws an exception.

## See Also

### Receiving capture results

- [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings:](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.
