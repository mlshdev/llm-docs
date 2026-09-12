> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/islivephotoautotrimmingenabled](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/islivephotoautotrimmingenabled)

# isLivePhotoAutoTrimmingEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.

## Declaration

```swift
var isLivePhotoAutoTrimmingEnabled: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

This value defaults to [true](https://developer.apple.com/documentation/swift/true) when [isLivePhotoCaptureSupported](islivephotocapturesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

Use this option to enable the same automatic trimming behavior found in the Camera app. By default, a Live Photo capture is about three seconds in duration, centered on the time of the capture request. If the user moves the camera during capture, iOS analyzes the capture and automatically trims the duration of the Live Photo to avoid capturing excess movement.

Changing this value while your session is running requires a lengthy reconfiguration of the session. If you intend to take any Live Photo captures, set this value to [true](https://developer.apple.com/documentation/swift/true) before calling [AVCaptureSession](../avcapturesession.md) [startRunning()](../avcapturesession/startrunning%28%29.md). If you change this property while the session is running, in-progress Live Photo captures end immediately, unfulfilled photo requests cancel, and the video preview temporarily freezes.

## See Also

### Configuring Live Photo capture

- [isLivePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [isLivePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.

# livePhotoAutoTrimmingEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.

## Declaration

```objectivec
@property (nonatomic, getter=isLivePhotoAutoTrimmingEnabled) BOOL livePhotoAutoTrimmingEnabled;
```

<a id="Discussion"></a>

## Discussion

This value defaults to [true](https://developer.apple.com/documentation/swift/true) when [livePhotoCaptureSupported](islivephotocapturesupported.md) is [true](https://developer.apple.com/documentation/swift/true).

Use this option to enable the same automatic trimming behavior found in the Camera app. By default, a Live Photo capture is about three seconds in duration, centered on the time of the capture request. If the user moves the camera during capture, iOS analyzes the capture and automatically trims the duration of the Live Photo to avoid capturing excess movement.

Changing this value while your session is running requires a lengthy reconfiguration of the session. If you intend to take any Live Photo captures, set this value to [true](https://developer.apple.com/documentation/swift/true) before calling [AVCaptureSession](../avcapturesession.md) [startRunning](../avcapturesession/startrunning%28%29.md). If you change this property while the session is running, in-progress Live Photo captures end immediately, unfulfilled photo requests cancel, and the video preview temporarily freezes.

## See Also

### Configuring Live Photo capture

- [livePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [livePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [livePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.
