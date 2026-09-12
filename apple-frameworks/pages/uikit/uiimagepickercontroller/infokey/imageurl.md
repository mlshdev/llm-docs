> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey/imageurl](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey/imageurl)

# imageURL (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL of the image file.

## Declaration

```swift
static let imageURL: UIImagePickerController.InfoKey
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [NSURL](../../../foundation/nsurl.md) that you can use to retrieve the image file. The image in this file matches the image found in the [originalImage](originalimage.md) key of the dictionary.

## See Also

### Constants

- [cropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [editedImage](editedimage.md): An image edited by the user.
- [livePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [mediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [mediaType](mediatype.md): The media type selected by the user.
- [mediaURL](mediaurl.md): The filesystem URL for the movie.
- [originalImage](originalimage.md): The original, uncropped image selected by the user.
- [phAsset](phasset.md): Deprecated. A Photos asset for the image.
- [referenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.

# UIImagePickerControllerImageURL (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 11.0+ · iPadOS 11.0+ · Mac Catalyst 13.1+ · visionOS 1.0+

The URL of the image file.

## Declaration

```objectivec
extern UIImagePickerControllerInfoKey const UIImagePickerControllerImageURL;
```

<a id="Discussion"></a>

## Discussion

The value of this key is a [NSURL](../../../foundation/nsurl.md) that you can use to retrieve the image file. The image in this file matches the image found in the [UIImagePickerControllerOriginalImage](originalimage.md) key of the dictionary.

## See Also

### Constants

- [UIImagePickerControllerCropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerEditedImage](editedimage.md): An image edited by the user.
- [UIImagePickerControllerLivePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [UIImagePickerControllerMediaMetadata](mediametadata.md): Metadata for a newly-captured photograph.
- [UIImagePickerControllerMediaType](mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](phasset.md): Deprecated. A Photos asset for the image.
- [UIImagePickerControllerReferenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.
