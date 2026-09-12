> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontrollerdelegate](https://developer.apple.com/documentation/uikit/uiimagepickercontrollerdelegate)

# UIImagePickerControllerDelegate (Swift)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods that your delegate object must implement to interact with the image picker interface.

## Declaration

```swift
@MainActor protocol UIImagePickerControllerDelegate : NSObjectProtocol
```

<a id="overview"></a>

## Overview

The methods of this protocol notify your delegate when the user either picks an image or movie, or cancels the picker operation. The delegate methods are responsible for dismissing the picker when the operation completes. To dismiss the picker, call the [dismiss(animated:completion:)](uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent controller responsible for displaying the [UIImagePickerController](uiimagepickercontroller.md) object.

To save a still image to the user’s Camera Roll album, call the [UIImageWriteToSavedPhotosAlbum(\_:\_:\_:\_:)](uiimagewritetosavedphotosalbum%28________%29.md) function from within the body of the [imagePickerController(\_:didFinishPickingMediaWithInfo:)](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) method. To save a movie to the user’s Camera Roll album, instead call the [UISaveVideoAtPathToSavedPhotosAlbum(\_:\_:\_:\_:)](uisavevideoatpathtosavedphotosalbum%28________%29.md) function. These functions, described in `UIKit Functions`, save the image or movie only; they don’t save metadata.

To write additional metadata when saving an image to the Camera Roll, use the [PHAssetChangeRequest](../photos/phassetchangerequest.md) class from the Photos framework. See the description for the [mediaMetadata](uiimagepickercontroller/infokey/mediametadata.md) key.

## Topics

### Closing the picker

- [imagePickerController(\_:didFinishPickingMediaWithInfo:)](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md): Tells the delegate that the user picked a still image or movie.
- [imagePickerControllerDidCancel(\_:)](uiimagepickercontrollerdelegate/imagepickercontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled the pick operation.

### Getting the editing information

- [UIImagePickerController.InfoKey](uiimagepickercontroller/infokey.md): Keys you use to retrieve information from the editing dictionary about the media that the user selected.

## Relationships

### Inherits From

- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to interactions with the picker

- [delegate](uiimagepickercontroller/delegate.md): The image picker’s delegate object.

# UIImagePickerControllerDelegate (Objective-C)

**Framework:** UIKit  
**Kind:** Protocol  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

A set of methods that your delegate object must implement to interact with the image picker interface.

## Declaration

```objectivec
@protocol UIImagePickerControllerDelegate <NSObject>
```

<a id="overview"></a>

## Overview

The methods of this protocol notify your delegate when the user either picks an image or movie, or cancels the picker operation. The delegate methods are responsible for dismissing the picker when the operation completes. To dismiss the picker, call the [dismissViewControllerAnimated:completion:](uiviewcontroller/dismiss%28animated_completion_%29.md) method of the parent controller responsible for displaying the [UIImagePickerController](uiimagepickercontroller.md) object.

To save a still image to the user’s Camera Roll album, call the [UIImageWriteToSavedPhotosAlbum](uiimagewritetosavedphotosalbum%28________%29.md) function from within the body of the [imagePickerController:didFinishPickingMediaWithInfo:](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md) method. To save a movie to the user’s Camera Roll album, instead call the [UISaveVideoAtPathToSavedPhotosAlbum](uisavevideoatpathtosavedphotosalbum%28________%29.md) function. These functions, described in `UIKit Functions`, save the image or movie only; they don’t save metadata.

To write additional metadata when saving an image to the Camera Roll, use the [PHAssetChangeRequest](../photos/phassetchangerequest.md) class from the Photos framework. See the description for the [UIImagePickerControllerMediaMetadata](uiimagepickercontroller/infokey/mediametadata.md) key.

## Topics

### Closing the picker

- [imagePickerController:didFinishPickingMediaWithInfo:](uiimagepickercontrollerdelegate/imagepickercontroller%28__didfinishpickingmediawithinfo_%29.md): Tells the delegate that the user picked a still image or movie.
- [imagePickerControllerDidCancel:](uiimagepickercontrollerdelegate/imagepickercontrollerdidcancel%28__%29.md): Tells the delegate that the user canceled the pick operation.
- [imagePickerController:didFinishPickingImage:editingInfo:](uiimagepickercontrollerdelegate/imagepickercontroller_didfinishpickingimage_editinginfo_.md): Deprecated. Tells the delegate that the user picked an image.

### Getting the editing information

- [UIImagePickerControllerInfoKey](uiimagepickercontroller/infokey.md): Keys you use to retrieve information from the editing dictionary about the media that the user selected.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobjectprotocol.md)

## See Also

### Responding to interactions with the picker

- [delegate](uiimagepickercontroller/delegate.md): The image picker’s delegate object.
