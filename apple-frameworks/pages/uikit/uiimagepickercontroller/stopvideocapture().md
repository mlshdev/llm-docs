> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/stopvideocapture()](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/stopvideocapture())

# stopVideoCapture() (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Stops video capture.

## Declaration

```swift
func stopVideoCapture()
```

<a id="Discussion"></a>

## Discussion

After you call this method to stop video capture, the system calls the image picker delegate’s [imagePickerController(\_:didFinishPickingMediaWithInfo:)](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) method.

## See Also

### Capturing still images or movies

- [takePicture()](takepicture%28%29.md): Captures a still image using the camera.
- [startVideoCapture()](startvideocapture%28%29.md): Starts video capture using the camera specified by the camera device property.

# stopVideoCapture (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ · iPadOS 4.0+ · Mac Catalyst 13.1+

Stops video capture.

## Declaration

```objectivec
- (void) stopVideoCapture;
```

<a id="Discussion"></a>

## Discussion

After you call this method to stop video capture, the system calls the image picker delegate’s [imagePickerController:didFinishPickingMediaWithInfo:](../uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) method.

## See Also

### Capturing still images or movies

- [takePicture](takepicture%28%29.md): Captures a still image using the camera.
- [startVideoCapture](startvideocapture%28%29.md): Starts video capture using the camera specified by the camera device property.
