> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videoorientation](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videoorientation)

# videoOrientation (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 17.0) · iPadOS 4.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

An orientation that tells the connection how to rotate a video flowing through it.

> See [videoRotationAngle](videorotationangle.md) instead.

## Declaration

```swift
var videoOrientation: AVCaptureVideoOrientation { get set }
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection.

If the value of [isVideoOrientationSupported](isvideoorientationsupported.md) is [true](https://developer.apple.com/documentation/swift/true), you can set `videoOrientation` to rotate the video buffers consumed by the connection’s output. Setting `videoOrientation` doesn’t necessarily result in a physical rotation of video buffers. For example, a video connection to an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) object handles orientation using a QuickTime track matrix. A video connection to an [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) object handles orientation using Exif tags.

[AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) clients may receive physically rotated pixel buffers in their [captureOutput(\_:didOutput:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate callback. The `AVCaptureVideoDataOutput` hardware accelerates the rotation operation and supports all four [AVCaptureVideoOrientation](../avcapturevideoorientation.md) modes. A client sets `videoOrientation` or [isVideoMirrored](isvideomirrored.md) on the video data output’s video [AVCaptureConnection](../avcaptureconnection.md) to request physical buffer rotation.

> **Important**

>  Physically rotating buffers comes with a performance cost, so only request rotation when necessary. If you want to write rotated video to a movie file using [AVAssetWriter](../avassetwriter.md), set the [transform](../avassetwriterinput/transform.md) property on the [AVAssetWriterInput](../avassetwriterinput.md) instead.

## See Also

### Deprecated

- [isVideoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [isVideoOrientationSupported](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.

# videoOrientation (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 4.0+ (deprecated in 17.0) · iPadOS 4.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 10.7+ (deprecated in 14.0)

An orientation that tells the connection how to rotate a video flowing through it.

> See [videoRotationAngle](videorotationangle.md) instead.

## Declaration

```objectivec
@property (nonatomic) AVCaptureVideoOrientation videoOrientation;
```

## Mentioned In

- [Setting up a capture session](../setting-up-a-capture-session.md)

<a id="Discussion"></a>

## Discussion

The property only applies to a video connection.

If the value of [supportsVideoOrientation](isvideoorientationsupported.md) is [true](https://developer.apple.com/documentation/swift/true), you can set `videoOrientation` to rotate the video buffers consumed by the connection’s output. Setting `videoOrientation` doesn’t necessarily result in a physical rotation of video buffers. For example, a video connection to an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) object handles orientation using a QuickTime track matrix. A video connection to an [AVCaptureStillImageOutput](../avcapturestillimageoutput.md) object handles orientation using Exif tags.

[AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) clients may receive physically rotated pixel buffers in their [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) delegate callback. The `AVCaptureVideoDataOutput` hardware accelerates the rotation operation and supports all four [AVCaptureVideoOrientation](../avcapturevideoorientation.md) modes. A client sets `videoOrientation` or [videoMirrored](isvideomirrored.md) on the video data output’s video [AVCaptureConnection](../avcaptureconnection.md) to request physical buffer rotation.

> **Important**

>  Physically rotating buffers comes with a performance cost, so only request rotation when necessary. If you want to write rotated video to a movie file using [AVAssetWriter](../avassetwriter.md), set the [transform](../avassetwriterinput/transform.md) property on the [AVAssetWriterInput](../avassetwriterinput.md) instead.

## See Also

### Deprecated

- [videoStabilizationEnabled](isvideostabilizationenabled.md): Deprecated. A Boolean value that indicates whether video stabilization is active for the connection.
- [enablesVideoStabilizationWhenAvailable](enablesvideostabilizationwhenavailable.md): Deprecated. A Boolean value that indicates whether the system enables video stabilization when it’s available.
- [supportsVideoOrientation](isvideoorientationsupported.md): Deprecated. A Boolean value that indicates whether the connection supports changing the orientation of the video.
- [AVCaptureVideoOrientation](../avcapturevideoorientation.md): Deprecated. Constants indicating video orientation.
