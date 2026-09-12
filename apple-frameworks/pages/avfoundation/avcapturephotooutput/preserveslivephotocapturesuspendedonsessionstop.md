> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/preserveslivephotocapturesuspendedonsessionstop](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/preserveslivephotocapturesuspendedonsessionstop)

# preservesLivePhotoCaptureSuspendedOnSessionStop (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.

## Declaration

```swift
var preservesLivePhotoCaptureSuspendedOnSessionStop: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value defaults to [false](https://developer.apple.com/documentation/swift/false), which means that Live Photo capture resumes when the session stops. Set the value to [true](https://developer.apple.com/documentation/swift/true) to save the state of the [isLivePhotoCaptureSuspended](islivephotocapturesuspended.md) property across session restarts.

## See Also

### Configuring Live Photo capture

- [isLivePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [isLivePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [isLivePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.

# preservesLivePhotoCaptureSuspendedOnSessionStop (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · tvOS 17.0+

A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.

## Declaration

```objectivec
@property (nonatomic) BOOL preservesLivePhotoCaptureSuspendedOnSessionStop;
```

<a id="Discussion"></a>

## Discussion

This value defaults to [false](https://developer.apple.com/documentation/swift/false), which means that Live Photo capture resumes when the session stops. Set the value to [true](https://developer.apple.com/documentation/swift/true) to save the state of the [livePhotoCaptureSuspended](islivephotocapturesuspended.md) property across session restarts.

## See Also

### Configuring Live Photo capture

- [livePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [livePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [livePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [livePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.
