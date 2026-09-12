> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontrollerdidcancel(_:)](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontrollerdidcancel(_:))

# imagePickerControllerDidCancel(\_:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user canceled the pick operation.

## Declaration

```swift
optional func imagePickerControllerDidCancel(_ picker: UIImagePickerController)
```

## Parameters

- `picker`: The controller object managing the image picker interface.

<a id="Discussion"></a>

## Discussion

Your delegate’s implementation of this method should dismiss the picker view by calling the [dismiss(animated:completion:)](../uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent view controller.

Implementation of this method is optional, but expected.

## See Also

### Closing the picker

- [imagePickerController(\_:didFinishPickingMediaWithInfo:)](imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md): Tells the delegate that the user picked a still image or movie.

# imagePickerControllerDidCancel: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the user canceled the pick operation.

## Declaration

```objectivec
- (void) imagePickerControllerDidCancel:(UIImagePickerController *) picker;
```

## Parameters

- `picker`: The controller object managing the image picker interface.

<a id="Discussion"></a>

## Discussion

Your delegate’s implementation of this method should dismiss the picker view by calling the [dismissViewControllerAnimated:completion:](../uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent view controller.

Implementation of this method is optional, but expected.

## See Also

### Closing the picker

- [imagePickerController:didFinishPickingMediaWithInfo:](imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md): Tells the delegate that the user picked a still image or movie.
- [imagePickerController:didFinishPickingImage:editingInfo:](imagepickercontroller_didfinishpickingimage_editinginfo_.md): Deprecated. Tells the delegate that the user picked an image.
