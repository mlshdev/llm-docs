> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcaptureconnection/videorotationangle](https://developer.apple.com/documentation/avfoundation/avcaptureconnection/videorotationangle)

# videoRotationAngle (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A rotation angle the connection applies to a video flowing through it.

## Declaration

```swift
var videoRotationAngle: CGFloat { get set }
```

<a id="Discussion"></a>

## Discussion

Your app can set a video rotation angle that it gets from an [AVCaptureDevice.RotationCoordinator](../avcapturedevice/rotationcoordinator.md) instance’s [videoRotationAngleForHorizonLevelCapture](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelcapture.md) or [videoRotationAngleForHorizonLevelPreview](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview.md) property. The rotation angle only applies to video or depth connections, similar to [isVideoMirrored](isvideomirrored.md), and can be any angle that [isVideoRotationAngleSupported(\_:)](isvideorotationanglesupported%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true) for.

Not all capture connections rotate each frame. For example, a video connection to an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) or [AVCapturePhotoOutput](../avcapturephotooutput.md) instance applies a rotation with a QuickTime track matrix or with Exif tags, respectively.

Capture connections to [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and [AVCaptureDepthDataOutput](../avcapturedepthdataoutput.md) instances rotate video frames they provide to their [captureOutput(\_:didOutput:from:)](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) and [depthDataOutput(\_:didOutput:timestamp:connection:)](../avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md) delegate methods, respectively. Each [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance uses hardware acceleration to rotate every frame.

> **Tip**

>  Avoid potential performance issues by only rotating video with a capture connection when necessary.

You can rotate the video of a movie file you record with an [AVAssetWriter](../avassetwriter.md) instance by applying the rotation to an [AVAssetWriterInput](../avassetwriterinput.md) instance’s [transform](../avassetwriterinput/transform.md) property. This approach avoids the performance costs that come with rotating each video frame.

> **Note**

>  Your app needs to convert the [videoRotationAngleForHorizonLevelCapture](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelcapture.md) or [videoRotationAngleForHorizonLevelPreview](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview.md) value from degrees to radians for transform properties.

## See Also

### Rotating a video

- [isVideoRotationAngleSupported(\_:)](isvideorotationanglesupported%28__%29.md): Returns a Boolean value that indicates whether the connection supports a rotation angle.

# videoRotationAngle (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

A rotation angle the connection applies to a video flowing through it.

## Declaration

```objectivec
@property (nonatomic) CGFloat videoRotationAngle;
```

<a id="Discussion"></a>

## Discussion

Your app can set a video rotation angle that it gets from an [AVCaptureDeviceRotationCoordinator](../avcapturedevice/rotationcoordinator.md) instance’s [videoRotationAngleForHorizonLevelCapture](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelcapture.md) or [videoRotationAngleForHorizonLevelPreview](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview.md) property. The rotation angle only applies to video or depth connections, similar to [videoMirrored](isvideomirrored.md), and can be any angle that [isVideoRotationAngleSupported:](isvideorotationanglesupported%28__%29.md) returns [true](https://developer.apple.com/documentation/swift/true) for.

Not all capture connections rotate each frame. For example, a video connection to an [AVCaptureMovieFileOutput](../avcapturemoviefileoutput.md) or [AVCapturePhotoOutput](../avcapturephotooutput.md) instance applies a rotation with a QuickTime track matrix or with Exif tags, respectively.

Capture connections to [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) and [AVCaptureDepthDataOutput](../avcapturedepthdataoutput.md) instances rotate video frames they provide to their [captureOutput:didOutputSampleBuffer:fromConnection:](../avcapturevideodataoutputsamplebufferdelegate/captureoutput%28__didoutput_from_%29.md) and [depthDataOutput:didOutputDepthData:timestamp:connection:](../avcapturedepthdataoutputdelegate/depthdataoutput%28__didoutput_timestamp_connection_%29.md) delegate methods, respectively. Each [AVCaptureVideoDataOutput](../avcapturevideodataoutput.md) instance uses hardware acceleration to rotate every frame.

> **Tip**

>  Avoid potential performance issues by only rotating video with a capture connection when necessary.

You can rotate the video of a movie file you record with an [AVAssetWriter](../avassetwriter.md) instance by applying the rotation to an [AVAssetWriterInput](../avassetwriterinput.md) instance’s [transform](../avassetwriterinput/transform.md) property. This approach avoids the performance costs that come with rotating each video frame.

> **Note**

>  Your app needs to convert the [videoRotationAngleForHorizonLevelCapture](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelcapture.md) or [videoRotationAngleForHorizonLevelPreview](../avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview.md) value from degrees to radians for transform properties.

## See Also

### Rotating a video

- [isVideoRotationAngleSupported:](isvideorotationanglesupported%28__%29.md): Returns a Boolean value that indicates whether the connection supports a rotation angle.
