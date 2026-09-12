> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/takepicture()](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/takepicture())

# takePicture() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

Captures a still image using the camera.

## Declaration

```swift
func takePicture()
```

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with a custom overlay view to initiate the programmatic capture of a still image. This supports taking more than one picture without leaving the interface, but requires that you hide the default image picker controls.

Calling this method while an image is being captured has no effect. You must wait until the associated delegate object receives an [imagePickerController(\_:didFinishPickingMediaWithInfo:)](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) message before you can capture another picture.

Calling this method when the source type of the image picker is set to a value other than [UIImagePickerController.SourceType.camera](sourcetype-swift.enum/camera.md) results in the throwing of an [invalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

## See Also

### Related Documentation

- [cameraOverlayView](cameraoverlayview.md): The view to display on top of the default image picker interface.

### Capturing still images or movies

- [startVideoCapture()](startvideocapture%28%29.md): Starts video capture using the camera specified by the camera device property.
- [stopVideoCapture()](stopvideocapture%28%29.md): Stops video capture.

# takePicture (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 3.1+ · iPadOS 3.1+ · Mac Catalyst 13.1+

Captures a still image using the camera.

## Declaration

```objectivec
- (void) takePicture;
```

<a id="Discussion"></a>

## Discussion

Use this method in conjunction with a custom overlay view to initiate the programmatic capture of a still image. This supports taking more than one picture without leaving the interface, but requires that you hide the default image picker controls.

Calling this method while an image is being captured has no effect. You must wait until the associated delegate object receives an [imagePickerController:didFinishPickingMediaWithInfo:](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) message before you can capture another picture.

Calling this method when the source type of the image picker is set to a value other than [UIImagePickerControllerSourceTypeCamera](sourcetype-swift.enum/camera.md) results in the throwing of an [NSInvalidArgumentException](../../foundation/nsexceptionname/invalidargumentexception.md) exception.

## See Also

### Related Documentation

- [cameraOverlayView](cameraoverlayview.md): The view to display on top of the default image picker interface.

### Capturing still images or movies

- [startVideoCapture](startvideocapture%28%29.md): Starts video capture using the camera specified by the camera device property.
- [stopVideoCapture](stopvideocapture%28%29.md): Stops video capture.
