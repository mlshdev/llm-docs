> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey/editedimage](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey/editedimage)

# editedImage (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An image edited by the user.

## Declaration

```swift
static let editedImage: UIImagePickerController.InfoKey
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [UIImage](../../uiimage.md) object.

## See Also

### Constants

- [cropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [imageURL](imageurl.md): The URL of the image file.
- [livePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [mediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [mediaType](mediatype.md): The media type selected by the user.
- [mediaURL](mediaurl.md): The filesystem URL for the movie.
- [originalImage](originalimage.md): The original, uncropped image selected by the user.
- [phAsset](phasset.md): Deprecated. A Photos asset for the image.
- [referenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.

# UIImagePickerControllerEditedImage (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

An image edited by the user.

## Declaration

```objectivec
extern UIImagePickerControllerInfoKey const UIImagePickerControllerEditedImage;
```

<a id="Discussion"></a>

## Discussion

The value for this key is a [UIImage](../../uiimage.md) object.

## See Also

### Constants

- [UIImagePickerControllerCropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerImageURL](imageurl.md): The URL of the image file.
- [UIImagePickerControllerLivePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [UIImagePickerControllerMediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [UIImagePickerControllerMediaType](mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](phasset.md): Deprecated. A Photos asset for the image.
- [UIImagePickerControllerReferenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.
