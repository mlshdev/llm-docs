> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturevideoorientation](https://developer.apple.com/documentation/avfoundation/avcapturevideoorientation)

# AVCaptureVideoOrientation (Swift)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

Constants indicating video orientation.

> See [videoRotationAngle](avcaptureconnection/videorotationangle.md) instead.

## Declaration

```swift
enum AVCaptureVideoOrientation
```

<a id="overview"></a>

## Overview

You can set these constants to [videoOrientation](avcaptureconnection/videoorientation.md) for a connection that has an [AVCaptureVideoPreviewLayer](avcapturevideopreviewlayer.md) output.

## Topics

### Constants

- [AVCaptureVideoOrientation.portrait](avcapturevideoorientation/portrait.md): Deprecated. Indicates that video should be oriented vertically, top at the top.
- [AVCaptureVideoOrientation.portraitUpsideDown](avcapturevideoorientation/portraitupsidedown.md): Deprecated. Indicates that video should be oriented vertically, top at the bottom.
- [AVCaptureVideoOrientation.landscapeRight](avcapturevideoorientation/landscaperight.md): Deprecated. Indicates that video should be oriented horizontally, top on the left.
- [AVCaptureVideoOrientation.landscapeLeft](avcapturevideoorientation/landscapeleft.md): Deprecated. Indicates that video should be oriented horizontally, top on the right.

### Initializers

- [init(rawValue:)](avcapturevideoorientation/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Deprecated

- [isVideoStabilizationEnabled](avcaptureconnection/isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](avcaptureconnection/enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [isVideoOrientationSupported](avcaptureconnection/isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](avcaptureconnection/videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.

# AVCaptureVideoOrientation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Enumeration  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

Constants indicating video orientation.

> See [videoRotationAngle](avcaptureconnection/videorotationangle.md) instead.

## Declaration

```objectivec
enum AVCaptureVideoOrientation : NSInteger;
```

<a id="overview"></a>

## Overview

You can set these constants to [videoOrientation](avcaptureconnection/videoorientation.md) for a connection that has an [AVCaptureVideoPreviewLayer](avcapturevideopreviewlayer.md) output.

## Topics

### Constants

- [AVCaptureVideoOrientationPortrait](avcapturevideoorientation/portrait.md): Deprecated. Indicates that video should be oriented vertically, top at the top.
- [AVCaptureVideoOrientationPortraitUpsideDown](avcapturevideoorientation/portraitupsidedown.md): Deprecated. Indicates that video should be oriented vertically, top at the bottom.
- [AVCaptureVideoOrientationLandscapeRight](avcapturevideoorientation/landscaperight.md): Deprecated. Indicates that video should be oriented horizontally, top on the left.
- [AVCaptureVideoOrientationLandscapeLeft](avcapturevideoorientation/landscapeleft.md): Deprecated. Indicates that video should be oriented horizontally, top on the right.

## See Also

### Deprecated

- [videoStabilizationEnabled](avcaptureconnection/isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](avcaptureconnection/enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [supportsVideoOrientation](avcaptureconnection/isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [videoOrientation](avcaptureconnection/videoorientation.md): Deprecated. An orientation that tells the connection how to rotate a video flowing through it.
