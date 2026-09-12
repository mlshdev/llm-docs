> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:)](https://developer.apple.com/documentation/avfoundation/avcapturephotocapturedelegate/photooutput(_:didfinishprocessingphoto:error:))

# photoOutput(\_:didFinishProcessingPhoto:error:) (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Provides the delegate with the captured image and associated metadata resulting from a photo capture.

## Declaration

```swift
optional func photoOutput(_ output: AVCapturePhotoOutput, didFinishProcessingPhoto photo: AVCapturePhoto, error: (any Error)?)
```

## Parameters

- `output`: The photo output performing the capture.
- `photo`: An object containing the captured image pixel buffer, along with any metadata and attachments captured along with the photo (such as a preview image or depth map).

  This parameter is always non-`nil`: if an error prevented successful capture, this object still contains metadata for the intended capture.
- `error`: If the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)
- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)
- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)
- [Saving captured photos](../saving-captured-photos.md)

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of photo capture regardless of format.

> **Important**

>  Implementing this method is recommended for all still image (as opposed to Live Photo) capture workflows, and required if you request depth data delivery. The photo output validates this requirement when you call its [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

The photo output calls this method once for each primary image to be delivered in a capture request. If you request capture in both RAW and processed formats, this method fires once for each format. If you request a bracketed capture with multiple exposures, this method fires once for each exposure.

## See Also

### Receiving capture results

- [photoOutput(\_:didFinishRecordingLivePhotoMovieForEventualFileAt:resolvedSettings:)](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [photoOutput(\_:didFinishCapturingDeferredPhotoProxy:error:)](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [photoOutput(\_:didFinishProcessingPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [photoOutput(\_:didFinishProcessingRawPhoto:previewPhoto:resolvedSettings:bracketSettings:error:)](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.

# captureOutput:didFinishProcessingPhoto:error: (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Method  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 17.0+

Provides the delegate with the captured image and associated metadata resulting from a photo capture.

## Declaration

```objectivec
- (void) captureOutput:(AVCapturePhotoOutput *) output didFinishProcessingPhoto:(AVCapturePhoto *) photo error:(NSError *) error;
```

## Parameters

- `output`: The photo output performing the capture.
- `photo`: An object containing the captured image pixel buffer, along with any metadata and attachments captured along with the photo (such as a preview image or depth map).

  This parameter is always non-`nil`: if an error prevented successful capture, this object still contains metadata for the intended capture.
- `error`: If the capture process could not proceed successfully, an error object describing the failure; otherwise, `nil`.

## Mentioned In

- [Capturing photos in RAW and Apple ProRAW formats](../capturing-photos-in-raw-and-apple-proraw-formats.md)
- [Tracking photo capture progress](../tracking-photo-capture-progress.md)
- [Capturing a bracketed photo sequence](../capturing-a-bracketed-photo-sequence.md)
- [Capturing and saving Live Photos](../capturing-and-saving-live-photos.md)
- [Capturing photos with depth](../capturing-photos-with-depth.md)
- [Capturing thumbnail and preview images](../capturing-thumbnail-and-preview-images.md)
- [Capturing uncompressed image data](../capturing-uncompressed-image-data.md)
- [Saving captured photos](../saving-captured-photos.md)

<a id="Discussion"></a>

## Discussion

Use this method to receive the results of photo capture regardless of format.

> **Important**

>  Implementing this method is recommended for all still image (as opposed to Live Photo) capture workflows, and required if you request depth data delivery. The photo output validates this requirement when you call its [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method; if your delegate does not implement the correct methods, the photo output raises an exception.

The photo output calls this method once for each primary image to be delivered in a capture request. If you request capture in both RAW and processed formats, this method fires once for each format. If you request a bracketed capture with multiple exposures, this method fires once for each exposure.

## See Also

### Receiving capture results

- [captureOutput:didFinishRecordingLivePhotoMovieForEventualFileAtURL:resolvedSettings:](photooutput%28__didfinishrecordinglivephotomovieforeventualfileat_resolvedsettings_%29.md): Notifies the delegate that the movie content of a Live Photo has finished recording.
- [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md): Provides the delegate the movie file URL resulting from a Live Photo capture.
- [captureOutput:didFinishCapturingDeferredPhotoProxy:error:](photooutput%28__didfinishcapturingdeferredphotoproxy_error_%29.md): Tells the delegate when the system finishes capturing the photo proxy.
- [captureOutput:didFinishProcessingPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in a processed format (such as JPEG).
- [captureOutput:didFinishProcessingRawPhotoSampleBuffer:previewPhotoSampleBuffer:resolvedSettings:bracketSettings:error:](photooutput%28__didfinishprocessingrawphoto_previewphoto_resolvedsettings_bracketsettings_error_%29.md): Deprecated. Provides the delegate a captured image in RAW format.
