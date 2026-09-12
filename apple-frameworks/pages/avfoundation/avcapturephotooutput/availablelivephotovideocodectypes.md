> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/availablelivephotovideocodectypes](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/availablelivephotovideocodectypes)

# availableLivePhotoVideoCodecTypes (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video codecs currently available for Live Photo movie captures.

## Declaration

```swift
var availableLivePhotoVideoCodecTypes: [AVVideoCodecType] { get }
```

<a id="Discussion"></a>

## Discussion

By default, Live Photo capture encodes the movie portion of a Live Photo using the H.264 codec. To use a different codec, set the [livePhotoVideoCodecType](../avcapturephotosettings/livephotovideocodectype.md) property of your photo settings object to one of the values in this array.

The system always presents its default video codec first. If you haven’t added the photo output to an [AVCaptureSession](../avcapturesession.md) with a video source, no codecs are available.

This property is key-value observable.

## See Also

### Configuring Live Photo capture

- [isLivePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [isLivePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [isLivePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.

# availableLivePhotoVideoCodecTypes (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

An array of video codecs currently available for Live Photo movie captures.

## Declaration

```objectivec
@property (nonatomic, readonly) NSArray<NSString *> * availableLivePhotoVideoCodecTypes;
```

<a id="Discussion"></a>

## Discussion

By default, Live Photo capture encodes the movie portion of a Live Photo using the H.264 codec. To use a different codec, set the [livePhotoVideoCodecType](../avcapturephotosettings/livephotovideocodectype.md) property of your photo settings object to one of the values in this array.

The system always presents its default video codec first. If you haven’t added the photo output to an [AVCaptureSession](../avcapturesession.md) with a video source, no codecs are available.

This property is key-value observable.

## See Also

### Configuring Live Photo capture

- [livePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [livePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [livePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [livePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
