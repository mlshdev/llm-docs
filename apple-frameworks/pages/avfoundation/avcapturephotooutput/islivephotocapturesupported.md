> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/islivephotocapturesupported](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/islivephotocapturesupported)

# isLivePhotoCaptureSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture output currently supports Live Photo capture.

## Declaration

```swift
var isLivePhotoCaptureSupported: Bool { get }
```

<a id="Discussion"></a>

## Discussion

Live Photo captures both a still image and a short movie centered on the moment of capture, and the system presents them together in user interfaces such as the Photos app.

Not all devices and capture formats support Live Photo capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

When this value changes to [false](https://developer.apple.com/documentation/swift/false), the [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md) property’s value also changes to [false](https://developer.apple.com/documentation/swift/false). If you previously opted in for Live Photo capture and then change configurations, you may need to set [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md) to [true](https://developer.apple.com/documentation/swift/true) again.

## See Also

### Configuring Live Photo capture

- [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [isLivePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [isLivePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.

# livePhotoCaptureSupported (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether the capture output currently supports Live Photo capture.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isLivePhotoCaptureSupported) BOOL livePhotoCaptureSupported;
```

<a id="Discussion"></a>

## Discussion

Live Photo captures both a still image and a short movie centered on the moment of capture, and the system presents them together in user interfaces such as the Photos app.

Not all devices and capture formats support Live Photo capture. This property’s value can change if the [sessionPreset](../avcapturesession/sessionpreset.md) property of the current capture session or the [activeFormat](../avcapturedevice/activeformat.md) property of the underlying capture device changes.

When this value changes to [false](https://developer.apple.com/documentation/swift/false), the [livePhotoCaptureEnabled](islivephotocaptureenabled.md) property’s value also changes to [false](https://developer.apple.com/documentation/swift/false). If you previously opted in for Live Photo capture and then change configurations, you may need to set [livePhotoCaptureEnabled](islivephotocaptureenabled.md) to [true](https://developer.apple.com/documentation/swift/true) again.

## See Also

### Configuring Live Photo capture

- [livePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [livePhotoCaptureSuspended](islivephotocapturesuspended.md): A Boolean value that indicates whether Live Photo capture is currently in a suspended state.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [livePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.
