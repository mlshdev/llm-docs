> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideoorientationsupported](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideoorientationsupported)

# isVideoOrientationSupported (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 17.0) · iPadOS 4.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

A Boolean value that indicates whether the connection supports changing the orientation of the video.

> Use [isVideoRotationAngleSupported(\_:)](isvideorotationanglesupported%28__%29.md) instead.

## Declaration

```swift
var isVideoOrientationSupported: Bool { get }
```

## See Also

### Deprecated

- [isVideoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

# supportsVideoOrientation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 17.0) · iPadOS 4.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

A Boolean value that indicates whether the connection supports changing the orientation of the video.

> Use [isVideoRotationAngleSupported:](isvideorotationanglesupported%28__%29.md) instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoOrientationSupported) BOOL supportsVideoOrientation;
```

## See Also

### Deprecated

- [videoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.
