> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontroller:didfinishpickingimage:editinginfo:](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate/imagepickercontroller:didfinishpickingimage:editinginfo:)

# imagePickerController:didFinishPickingImage:editingInfo:

**Interface language:** Objective-C

**Framework:** UIKit  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ (deprecated in 3.0) · iPadOS 2.0+ (deprecated in 3.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Tells the delegate that the user picked an image.

> Use [imagePickerController:didFinishPickingMediaWithInfo:](imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) instead.

## Declaration

```objectivec
- (void) imagePickerController:(UIImagePickerController *) picker didFinishPickingImage:(UIImage *) image editingInfo:(NSDictionary<NSString *,id> *) editingInfo;
```

## Parameters

- `picker`: The controller object managing the image picker interface.
- `image`: The image that the user picked. If user editing is enabled, this may be a cropped and adjusted version of the original image. In this case, the original image, and the editing information, are available in the `editingInfo` parameter.
- `editingInfo`: A dictionary containing any relevant editing information. If editing is disabled, this parameter is `nil`. The keys for this dictionary are listed in `Editing Information Keys`.

<a id="Discussion"></a>

## Discussion

Your delegate’s implementation of this method should pass the specified image on to any custom code that needs it and then dismiss the picker view.

When user editing is enabled, the picker view presents the user with a preview of the currently selected image along with controls for modifying it. (This behavior is managed by the picker view prior to calling this method.) If the user modifies the image, the editing information is available in the `editingInfo` parameter. If you don’t need the editing information, simply use the image in the `image` parameter as is.

<a id="Special-Considerations"></a>

### Special Considerations

This deprecated method supports picking only still pictures. The replacement method, [imagePickerController:didFinishPickingMediaWithInfo:](imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md), supports picking movies as well as still pictures.

## See Also

### Closing the picker

- [imagePickerController:didFinishPickingMediaWithInfo:](imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md): Tells the delegate that the user picked a still image or movie.
- [imagePickerControllerDidCancel:](imagepickercontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled the pick operation.
