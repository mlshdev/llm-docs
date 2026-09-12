> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/avfoundation/avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview](https://developer.apple.com/documentation/avfoundation/avcapturedevice/rotationcoordinator/videorotationangleforhorizonlevelpreview)

# videoRotationAngleForHorizonLevelPreview (Swift)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An angle the coordinator provides your app to apply to the preview layer so that it’s level relative to gravity.

## Declaration

```swift
var videoRotationAngleForHorizonLevelPreview: CGFloat { get }
```

<a id="Discussion"></a>

## Discussion

Your app can get immediate rotation angle updates from the rotation coordinator with key-value observation (KVO) for this property. You can immediately update your app’s UI from its key-value observation code because the rotation coordinator notifies your app on the main queue.

> **Important**

>  Avoid unnecessary delays and visual artifacts by updating your app’s UI directly from an observer that monitors the property.

Apps typically apply the property’s value to an [AVCaptureConnection](../../avcaptureconnection.md) instance’s [videoRotationAngle](../../avcaptureconnection/videorotationangle.md) property, such as displaying a camera preview with the correction for an [AVCaptureVideoPreviewLayer](../../avcapturevideopreviewlayer.md) instance.

Alternatively, if your app uses an [AVCaptureVideoDataOutput](../../avcapturevideodataoutput.md) instance to display a custom camera preview, such as with effects, don’t rotate the video with [AVCaptureConnection](../../avcaptureconnection.md). Instead, set the rotation in your [CALayer](../../../quartzcore/calayer.md) instance’s [transform](../../../quartzcore/calayer/transform.md) property, such as with an [AVSampleBufferDisplayLayer](../../avsamplebufferdisplaylayer.md) instance. This approach uses less energy than rotating each frame with the capture connection.

> **Note**

>  Your app needs to convert the [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) value from degrees to radians for an asset writer layer’s transform, which is a [CATransform3D](../../../quartzcore/catransform3d.md).

## See Also

### Compensating for a device’s rotation

- [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md): An angle the coordinator provides your app to apply to photos or videos it captures with the device so that they’re level relative to gravity.

# videoRotationAngleForHorizonLevelPreview (Objective-C)

**Framework:** AVFoundation  
**Kind:** Instance Property  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+

An angle the coordinator provides your app to apply to the preview layer so that it’s level relative to gravity.

## Declaration

```objectivec
@property (nonatomic, readonly) CGFloat videoRotationAngleForHorizonLevelPreview;
```

<a id="Discussion"></a>

## Discussion

Your app can get immediate rotation angle updates from the rotation coordinator with key-value observation (KVO) for this property. You can immediately update your app’s UI from its key-value observation code because the rotation coordinator notifies your app on the main queue.

> **Important**

>  Avoid unnecessary delays and visual artifacts by updating your app’s UI directly from an observer that monitors the property.

Apps typically apply the property’s value to an [AVCaptureConnection](../../avcaptureconnection.md) instance’s [videoRotationAngle](../../avcaptureconnection/videorotationangle.md) property, such as displaying a camera preview with the correction for an [AVCaptureVideoPreviewLayer](../../avcapturevideopreviewlayer.md) instance.

Alternatively, if your app uses an [AVCaptureVideoDataOutput](../../avcapturevideodataoutput.md) instance to display a custom camera preview, such as with effects, don’t rotate the video with [AVCaptureConnection](../../avcaptureconnection.md). Instead, set the rotation in your [CALayer](../../../quartzcore/calayer.md) instance’s [transform](../../../quartzcore/calayer/transform.md) property, such as with an [AVSampleBufferDisplayLayer](../../avsamplebufferdisplaylayer.md) instance. This approach uses less energy than rotating each frame with the capture connection.

> **Note**

>  Your app needs to convert the [videoRotationAngleForHorizonLevelPreview](videorotationangleforhorizonlevelpreview.md) value from degrees to radians for an asset writer layer’s transform, which is a [CATransform3D](../../../quartzcore/catransform3d.md).

## See Also

### Compensating for a device’s rotation

- [videoRotationAngleForHorizonLevelCapture](videorotationangleforhorizonlevelcapture.md): An angle the coordinator provides your app to apply to photos or videos it captures with the device so that they’re level relative to gravity.
