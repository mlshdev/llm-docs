> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/startvideocapture()](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/startvideocapture())

# startVideoCapture() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Starts video capture using the camera specified by the camera device property.

## Declaration

```swift
func startVideoCapture() -> Bool
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) on success or [false](https://developer.apple.com/documentation/swift/false) on failure. This method may return a value of [false](https://developer.apple.com/documentation/swift/false) for various reasons, among them the following:

- Movie capture is already in progress
- The device does not support movie capture
- The device is out of disk space

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with a custom overlay view to initiate the programmatic capture of a movie. You can take more than one movie without leaving the interface, but to do so requires you to hide the default image picker controls.

Calling this method while a movie is being captured has no effect. You must call the [stopVideoCapture()](stopvideocapture%28%29.md) method, and then wait until the associated delegate object receives an [imagePickerController(\_:didFinishPickingMediaWithInfo:)](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) message, before you can capture another movie.

Calling this method when the source type of the image picker is set to a value other than [UIImagePickerController.SourceType.camera](sourcetype-swift.enum/camera.md) results in the throwing of an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

If you require additional options or more control over movie capture, use the movie capture methods in the AVFoundation framework. Refer to [AVFoundation](../../avfoundation.md).

## See Also

### Capturing still images or movies

- [takePicture()](takepicture%28%29.md): Captures a still image using the camera.
- [stopVideoCapture()](stopvideocapture%28%29.md): Stops video capture.

# startVideoCapture (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Starts video capture using the camera specified by the camera device property.

## Declaration

```objectivec
- (BOOL) startVideoCapture;
```

<a id="return-value"></a>

## Return Value

[true](https://developer.apple.com/documentation/swift/true) on success or [false](https://developer.apple.com/documentation/swift/false) on failure. This method may return a value of [false](https://developer.apple.com/documentation/swift/false) for various reasons, among them the following:

- Movie capture is already in progress
- The device does not support movie capture
- The device is out of disk space

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with a custom overlay view to initiate the programmatic capture of a movie. You can take more than one movie without leaving the interface, but to do so requires you to hide the default image picker controls.

Calling this method while a movie is being captured has no effect. You must call the [stopVideoCapture](stopvideocapture%28%29.md) method, and then wait until the associated delegate object receives an [imagePickerController:didFinishPickingMediaWithInfo:](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) message, before you can capture another movie.

Calling this method when the source type of the image picker is set to a value other than [UIImagePickerControllerSourceTypeCamera](sourcetype-swift.enum/camera.md) results in the throwing of an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

If you require additional options or more control over movie capture, use the movie capture methods in the AVFoundation framework. Refer to [AVFoundation](../../avfoundation.md).

## See Also

### Capturing still images or movies

- [takePicture](takepicture%28%29.md): Captures a still image using the camera.
- [stopVideoCapture](stopvideocapture%28%29.md): Stops video capture.
