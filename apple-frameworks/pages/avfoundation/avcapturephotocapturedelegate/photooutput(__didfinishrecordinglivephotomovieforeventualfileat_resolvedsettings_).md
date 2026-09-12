> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishrecordinglivephotomovieforeventualfileat:resolvedsettings:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishrecordinglivephotomovieforeventualfileat:resolvedsettings:))

# photoOutput(\_:didFinishRecordingLivePhotoMovieForEventualFileAt:resolvedSettings:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Notifies the delegate that the movie content of a Live Photo has finished recording.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishRecordingLivePhotoMovieForEventualFileAt outputFileURL: URL, resolvedSettings: AVCaptureResolvedPhotoSettings)
```

## Parameters

- `output`: The photo output performing the capture.
- `outputFileURL`: The file URL at which the Live Photo movie will be written.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as soon as it has captured all movie data for a Live Photo. However, at this moment, that media content has not yet been processed or written to storage. (To be notified when the complete movie file has finished writing and is ready for consumption, implement the [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method.)

Use this method to determine when it is appropriate to change your displayed UI to indicate that Live Photo movie capture is no longer in progress. For example, the Camera app displays a “LIVE” icon when the user presses the shutter button, then hides that icon when movie capture ends.

The photo output calls this method only once for each Live Photo capture.

## See Also

### Receiving capture results

- [photoOutput(\_:didFinishProcessingPhoto:error:)](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [photoOutput(\_:didFinishCapturingDeferredPhotoProxy:error:)](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.

# captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

Notifies the delegate that the movie content of a Live Photo has finished recording.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishRecordingLivePhotoMovieForEventualFileAtURL:(NSURL *) outputFileURL resolvedSettings:(AVCaptureResolvedPhotoSettings *) resolvedSettings;
```

## Parameters

- `output`: The photo output performing the capture.
- `outputFileURL`: The file URL at which the Live Photo movie will be written.
- `resolvedSettings`: An object describing the settings used for this capture. Match this object’s [uniqueID](../avcapturephotosettings/uniqueid.md) value to the [uniqueID](../avcapturephotosettings/uniqueid.md) property of the photo settings object you initiated capture with to determine which capture request this delegate call corresponds to. You can also use this object to find out which values the photo output has chosen for automatic settings.

## Mentioned In

- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)

<a id="Discussion"></a>

## Discussion

The photo output calls this method as soon as it has captured all movie data for a Live Photo. However, at this moment, that media content has not yet been processed or written to storage. (To be notified when the complete movie file has finished writing and is ready for consumption, implement the [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method.)

Use this method to determine when it is appropriate to change your displayed UI to indicate that Live Photo movie capture is no longer in progress. For example, the Camera app displays a “LIVE” icon when the user presses the shutter button, then hides that icon when movie capture ends.

The photo output calls this method only once for each Live Photo capture.

## See Also

### Receiving capture results

- [captureOutput:didFinishProcessingPhoto:error:](photooutput%28__didfinishprocessingphoto_error_%29.md): Provides the delegate with the captured image and associated metadata resulting from a photo capture.
- [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [captureOutput:didFinishCapturingDeferredPhotoProxy:error:](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.
