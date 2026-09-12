> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontroller(_:didfinishpickingmediawithinfo:)](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontroller(_:didfinishpickingmediawithinfo:))

# imagePickerController(\_:didFinishPickingMediaWithInfo:) (Swift)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

Tells the delegate that the user picked a still image or movie.

## Declaration

```swift
optional func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any])
```

## Parameters

- `picker`: The controller object managing the image picker interface.
- `info`: A dictionary containing the original image and the edited image, if an image was picked; or a filesystem URL for the movie, if a movie was picked. The dictionary also contains any relevant editing information. The keys for this dictionary are listed in [UIImagePickerController.InfoKey](../uiimagepickercontroller/infokey.md).

<a id="Discussion"></a>

## Discussion

Your delegate object’s implementation of this method should pass the specified media on to any custom code that needs it, and should then dismiss the picker view.

When editing is enabled, the image picker view presents the user with a preview of the currently selected image or movie along with controls for modifying it. (This behavior is managed by the picker view prior to calling this method.) If the user modifies the image or movie, the editing information is available in the `info` parameter. The original image is also returned in the `info` parameter.

If you set the image picker’s [showsCameraControls](../uiimagepickercontroller/showscameracontrols.md) property to [false](https://developer.apple.com/documentation/swift/false) and provide your own custom controls, you can take multiple pictures before dismissing the image picker interface. However, if you set that property to [true](https://developer.apple.com/documentation/swift/true), your delegate must dismiss the image picker interface after the user takes one picture or cancels the operation.

Implementation of this method is optional, but expected.

## See Also

### Closing the picker

- [imagePickerControllerDidCancel(\_:)](imagepickercontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled the pick operation.

# imagePickerController:didFinishPickingMediaWithInfo: (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Tells the delegate that the user picked a still image or movie.

## Declaration

```objectivec
- (void) imagePickerController:(UIImagePickerController *) picker didFinishPickingMediaWithInfo:(NSDictionary<NSString *,id> *) info;
```

## Parameters

- `picker`: The controller object managing the image picker interface.
- `info`: A dictionary containing the original image and the edited image, if an image was picked; or a filesystem URL for the movie, if a movie was picked. The dictionary also contains any relevant editing information. The keys for this dictionary are listed in [UIImagePickerControllerInfoKey](../uiimagepickercontroller/infokey.md).

<a id="Discussion"></a>

## Discussion

Your delegate object’s implementation of this method should pass the specified media on to any custom code that needs it, and should then dismiss the picker view.

When editing is enabled, the image picker view presents the user with a preview of the currently selected image or movie along with controls for modifying it. (This behavior is managed by the picker view prior to calling this method.) If the user modifies the image or movie, the editing information is available in the `info` parameter. The original image is also returned in the `info` parameter.

If you set the image picker’s [showsCameraControls](../uiimagepickercontroller/showscameracontrols.md) property to [false](https://developer.apple.com/documentation/swift/false) and provide your own custom controls, you can take multiple pictures before dismissing the image picker interface. However, if you set that property to [true](https://developer.apple.com/documentation/swift/true), your delegate must dismiss the image picker interface after the user takes one picture or cancels the operation.

Implementation of this method is optional, but expected.

## See Also

### Closing the picker

- [imagePickerControllerDidCancel:](imagepickercontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled the pick operation.
- [imagePickerController:didFinishPickingImage:editingInfo:](imagepickercontroller_didfinishpickingimage_editinginfo_.md): Deprecated. Tells the delegate that the user picked an image.
