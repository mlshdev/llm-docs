> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotosettings/livephotomoviefileurl](https://developer.apple.com/documentation/avfoundation/avcapturephotosettings/livephotomoviefileurl)

# livePhotoMovieFileURL (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A URL at which to write Live Photo movie output.

## Declaration

```swift
var livePhotoMovieFileURL: URL? { get set }
```

<a id="Discussion"></a>

## Discussion

Live Photos capture both a still image and a short movie, which the system presents together in user interfaces such as the Photos app. By default, this property’s value is `nil`, disabling Live Photo capture. Set this property to a file URL to capture Live Photos.

When you enable Live Photo capture, the following requirements apply:

- The photo output’s [isLivePhotoCaptureEnabled](../avcapturephotooutput/islivephotocaptureenabled.md) property must be [true](https://developer.apple.com/documentation/swift/true), and its and [isLivePhotoCaptureSuspended](../avcapturephotooutput/islivephotocapturesuspended.md) property must be [false](https://developer.apple.com/documentation/swift/false).
- The URL you specify must be a file URL to an accessible location in your app’s sandbox.
- Your delegate object must implement the [photoOutput(\_:didFinishProcessingLivePhotoToMovieFileAt:duration:photoDisplayTime:resolvedSettings:error:)](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method.

The capture output validates these requirements when you call the [capturePhoto(with:delegate:)](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Configuring Live Photo settings

- [livePhotoMovieMetadata](livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.
- [livePhotoVideoCodecType](livephotovideocodectype.md): The video codec to use for encoding the movie portion of Live Photo output.

# livePhotoMovieFileURL (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A URL at which to write Live Photo movie output.

## Declaration

```objectivec
@property (nonatomic, copy, nullable) NSURL * livePhotoMovieFileURL;
```

<a id="Discussion"></a>

## Discussion

Live Photos capture both a still image and a short movie, which the system presents together in user interfaces such as the Photos app. By default, this property’s value is `nil`, disabling Live Photo capture. Set this property to a file URL to capture Live Photos.

When you enable Live Photo capture, the following requirements apply:

- The photo output’s [livePhotoCaptureEnabled](../avcapturephotooutput/islivephotocaptureenabled.md) property must be [true](https://developer.apple.com/documentation/swift/true), and its and [livePhotoCaptureSuspended](../avcapturephotooutput/islivephotocapturesuspended.md) property must be [false](https://developer.apple.com/documentation/swift/false).
- The URL you specify must be a file URL to an accessible location in your app’s sandbox.
- Your delegate object must implement the [captureOutput:didFinishProcessingLivePhotoToMovieFileAtURL:duration:photoDisplayTime:resolvedSettings:error:](../avcapturephotocapturedelegate/photooutput%28__didfinishprocessinglivephototomoviefileat_duration_photodisplaytime_resolvedsettings_error_%29.md) method.

The capture output validates these requirements when you call the [capturePhotoWithSettings:delegate:](../avcapturephotooutput/capturephoto%28with_delegate_%29.md) method. If your settings and delegate don’t meet these requirements, that method raises an exception.

## See Also

### Configuring Live Photo settings

- [livePhotoMovieMetadata](livephotomoviemetadata.md): A dictionary of metadata to include in the Live Photo movie file.
- [livePhotoVideoCodecType](livephotovideocodectype.md): The video codec to use for encoding the movie portion of Live Photo output.
