> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturephotooutput/islivephotocapturesuspended](https://developer.apple.com/documentation/avfoundation/avcapturephotooutput/islivephotocapturesuspended)

# isLivePhotoCaptureSuspended (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether Live Photo capture is currently in a suspended state.

## Declaration

```swift
var isLivePhotoCaptureSuspended: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

By default, this property’s value is [false](https://developer.apple.com/documentation/swift/false). Set this value to [true](https://developer.apple.com/documentation/swift/true) to stop any current Live Photo movie captures in progress. Doing this prevents recording additional actions in the Live Photo movie. For example, if you want to capture a still photo that makes a shutter sound, you can prevent recording that action.

When you change this value to [true](https://developer.apple.com/documentation/swift/true), the system trims any Live Photo movie captures in progress to the current time. Likewise, when you change this value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), subsequent Live Photo movie captures won’t contain any earlier recordings.

By default, this property resets to [false](https://developer.apple.com/documentation/swift/false) when the [AVCaptureSession](../avcapturesession.md) stops. You can prevent this behavior by setting [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md) to [true](https://developer.apple.com/documentation/swift/true) before stopping the session.

> **Important**

>  Setting this property to [true](https://developer.apple.com/documentation/swift/true) throws an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md) property’s value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Live Photo capture

- [isLivePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [isLivePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [isLivePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.

# livePhotoCaptureSuspended (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 10.0+ · iPadOS 10.0+ · Mac Catalyst 14.0+ · tvOS 17.0+

A Boolean value that indicates whether Live Photo capture is currently in a suspended state.

## Declaration

```objectivec
@property (nonatomic, getter=isLivePhotoCaptureSuspended) BOOL livePhotoCaptureSuspended;
```

<a id="Discussion"></a>

## Discussion

By default, this property’s value is [false](https://developer.apple.com/documentation/swift/false). Set this value to [true](https://developer.apple.com/documentation/swift/true) to stop any current Live Photo movie captures in progress. Doing this prevents recording additional actions in the Live Photo movie. For example, if you want to capture a still photo that makes a shutter sound, you can prevent recording that action.

When you change this value to [true](https://developer.apple.com/documentation/swift/true), the system trims any Live Photo movie captures in progress to the current time. Likewise, when you change this value from [true](https://developer.apple.com/documentation/swift/true) to [false](https://developer.apple.com/documentation/swift/false), subsequent Live Photo movie captures won’t contain any earlier recordings.

By default, this property resets to [false](https://developer.apple.com/documentation/swift/false) when the [AVCaptureSession](../avcapturesession.md) stops. You can prevent this behavior by setting [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md) to [true](https://developer.apple.com/documentation/swift/true) before stopping the session.

> **Important**

>  Setting this property to [true](https://developer.apple.com/documentation/swift/true) throws an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) if the [livePhotoCaptureEnabled](islivephotocaptureenabled.md) property’s value is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring Live Photo capture

- [livePhotoCaptureSupported](islivephotocapturesupported.md): A Boolean value that indicates whether the capture output currently supports Live Photo capture.
- [livePhotoCaptureEnabled](islivephotocaptureenabled.md): A Boolean value that indicates whether to configure the capture pipeline for Live Photo capture.
- [preservesLivePhotoCaptureSuspendedOnSessionStop](preserveslivephotocapturesuspendedonsessionstop.md): A Boolean value that indicates whether to preserve the suspended state of Live Photo capture when the session stops.
- [livePhotoAutoTrimmingEnabled](islivephotoautotrimmingenabled.md): A Boolean value that indicates whether to automatically trim Live Photo movie captures to avoid excessive movement.
- [availableLivePhotoVideoCodecTypes](availablelivephotovideocodectypes.md): An array of video codecs currently available for Live Photo movie captures.
