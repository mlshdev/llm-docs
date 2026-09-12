> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey/livephoto](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey/livephoto)

# livePhoto (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The Live Photo representation of the selected or captured photo.

## Declaration

```swift
static let livePhoto: UIImagePickerController.InfoKey
```

<a id="Discussion"></a>

## Discussion

A Live Photo is a picture, that includes motion and sound from the moments just before and after its capture. On compatible devices, the Camera app captures all photos as Live Photos by default, but the [imagePickerController:didFinishPickingImage:editingInfo:](../../uiimagepickercontrollerdelegate/imagepickercontroller_didfinishpickingimage_editinginfo_.md) method’s `image` parameter contains only the still image representation.

To obtain the motion and sound content of a live photo for display (using the [PHLivePhotoView](../../../photosui/phlivephotoview.md) class), include the `kUTTypeImage` and `kUTTypeLivePhoto` identifiers in the allowed media types when configuring an image picker controller. When the user picks or captures a Live Photo, the `editingInfo` dictionary contains the [livePhoto](livephoto.md) key, with a [PHLivePhoto](../../../photos/phlivephoto.md) representation of the photo as the corresponding value.

## See Also

### Constants

- [cropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [editedImage](editedimage.md): An image edited by the user.
- [imageURL](imageurl.md): The URL of the image file.
- [mediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [mediaType](mediatype.md): The media type selected by the user.
- [mediaURL](mediaurl.md): The filesystem URL for the movie.
- [originalImage](originalimage.md): The original, uncropped image selected by the user.
- [phAsset](phasset.md): Deprecated. A Photos asset for the image.
- [referenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.

# UIImagePickerControllerLivePhoto (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 9.1+ · iPadOS 9.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

The Live Photo representation of the selected or captured photo.

## Declaration

```objectivec
extern UIImagePickerControllerInfoKey const UIImagePickerControllerLivePhoto;
```

<a id="Discussion"></a>

## Discussion

A Live Photo is a picture, that includes motion and sound from the moments just before and after its capture. On compatible devices, the Camera app captures all photos as Live Photos by default, but the [imagePickerController:didFinishPickingImage:editingInfo:](../../uiimagepickercontrollerdelegate/imagepickercontroller_didfinishpickingimage_editinginfo_.md) method’s `image` parameter contains only the still image representation.

To obtain the motion and sound content of a live photo for display (using the [PHLivePhotoView](../../../photosui/phlivephotoview.md) class), include the `kUTTypeImage` and `kUTTypeLivePhoto` identifiers in the allowed media types when configuring an image picker controller. When the user picks or captures a Live Photo, the `editingInfo` dictionary contains the [UIImagePickerControllerLivePhoto](livephoto.md) key, with a [PHLivePhoto](../../../photos/phlivephoto.md) representation of the photo as the corresponding value.

## See Also

### Constants

- [UIImagePickerControllerCropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerEditedImage](editedimage.md): An image edited by the user.
- [UIImagePickerControllerImageURL](imageurl.md): The URL of the image file.
- [UIImagePickerControllerMediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [UIImagePickerControllerMediaType](mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](phasset.md): Deprecated. A Photos asset for the image.
- [UIImagePickerControllerReferenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.
