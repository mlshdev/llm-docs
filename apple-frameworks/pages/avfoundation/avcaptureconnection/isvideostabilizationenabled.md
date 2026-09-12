> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/isvideostabilizationenabled](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/isvideostabilizationenabled)

# isVideoStabilizationEnabled (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

A Boolean value that indicates whether video stabilization is active for the connection.

> Use the [activeVideoStabilizationMode](activevideostabilizationmode.md) property instead.

## Declaration

```swift
var isVideoStabilizationEnabled: Bool { get }
```

## See Also

### Deprecated

- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [isVideoOrientationSupported](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

# videoStabilizationEnabled (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 6.0+ (deprecated in 8.0) · iPadOS 6.0+ (deprecated in 8.0) · Mac Catalyst 14.0+ (deprecated in 13.1)

A Boolean value that indicates whether video stabilization is active for the connection.

> Use the [activeVideoStabilizationMode](activevideostabilizationmode.md) property instead.

## Declaration

```objectivec
@property (nonatomic, readonly, getter=isVideoStabilizationEnabled) BOOL videoStabilizationEnabled;
```

## See Also

### Deprecated

- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [supportsVideoOrientation](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.
