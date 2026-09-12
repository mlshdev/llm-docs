> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey/referenceurl](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey/referenceurl)

# referenceURL (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.1+ (deprecated in 11.0) · iPadOS 4.1+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The Assets Library URL for the original version of the picked item.

> Use [PHPickerViewController](../../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```swift
static let referenceURL: UIImagePickerController.InfoKey
```

<a id="Discussion"></a>

## Discussion

After the user edits a picked item—such as by cropping an image or trimming a movie—the URL continues to point to the original version of the picked item.

The value for this key is an [NSURL](../../../foundation/nsurl.md) object.

## See Also

### Constants

- [cropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [editedImage](editedimage.md): An image edited by the user.
- [imageURL](imageurl.md): The URL of the image file.
- [livePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [mediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [mediaType](mediatype.md): The media type selected by the user.
- [mediaURL](mediaurl.md): The filesystem URL for the movie.
- [originalImage](originalimage.md): The original, uncropped image selected by the user.
- [phAsset](phasset.md): Deprecated. A Photos asset for the image.

# UIImagePickerControllerReferenceURL (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.1+ (deprecated in 11.0) · iPadOS 4.1+ (deprecated in 11.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

The Assets Library URL for the original version of the picked item.

> Use [PHPickerViewController](../../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```objectivec
extern UIImagePickerControllerInfoKey const UIImagePickerControllerReferenceURL;
```

<a id="Discussion"></a>

## Discussion

After the user edits a picked item—such as by cropping an image or trimming a movie—the URL continues to point to the original version of the picked item.

The value for this key is an [NSURL](../../../foundation/nsurl.md) object.

## See Also

### Constants

- [UIImagePickerControllerCropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerEditedImage](editedimage.md): An image edited by the user.
- [UIImagePickerControllerImageURL](imageurl.md): The URL of the image file.
- [UIImagePickerControllerLivePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [UIImagePickerControllerMediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [UIImagePickerControllerMediaType](mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](phasset.md): Deprecated. A Photos asset for the image.
