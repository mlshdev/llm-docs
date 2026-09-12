> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/enablesvideostabilizationwhenavailable](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/enablesvideostabilizationwhenavailable)

# enablesVideoStabilizationWhenAvailable (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether the system enables video stabilization when it’s available.

> Use the [preferredVideoStabilizationMode](preferredvideostabilizationmode.md) property instead.

## Declaration

```swift
var enablesVideoStabilizationWhenAvailable: Bool { get set }
```

## See Also

### Deprecated

- [isVideoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [isVideoOrientationSupported](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

# enablesVideoStabilizationWhenAvailable (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether the system enables video stabilization when it’s available.

> Use the [preferredVideoStabilizationMode](preferredvideostabilizationmode.md) property instead.

## Declaration

```objectivec
@property (nonatomic) BOOL enablesVideoStabilizationWhenAvailable;
```

## See Also

### Deprecated

- [videoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [supportsVideoOrientation](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.
