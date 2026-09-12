> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey/mediametadata](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey/mediametadata)

# mediaMetadata (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Metadata for a newly-captured photograph.

## Declaration

```swift
static let mediaMetadata: UIImagePickerController.InfoKey
```

<a id="Discussion"></a>

## Discussion

This key is valid only when using an image picker whose source type is set to [UIImagePickerController.SourceType.camera](../sourcetype-swift.enum/camera.md), and applies only to still images.

The value for this key is an [NSDictionary](../../../foundation/nsdictionary.md) object that contains the metadata of the photo that was just captured. To store the metadata along with the image in the Camera Roll, use the [PHAssetChangeRequest](../../../photos/phassetchangerequest.md) class from the Photos framework.

## See Also

### Constants

- [cropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [editedImage](editedimage.md): An image edited by the user.
- [imageURL](imageurl.md): The URL of the image file.
- [livePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [mediaType](mediatype.md): The media type selected by the user.
- [mediaURL](mediaurl.md): The filesystem URL for the movie.
- [originalImage](originalimage.md): The original, uncropped image selected by the user.
- [phAsset](phasset.md): Deprecated. A Photos asset for the image.
- [referenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.

# UIImagePickerControllerMediaMetadata (Objective-C)

**Framework:** UIKit  
**Kind:** Global Variable  
**Availability:** iOS 4.1+ · iPadOS 4.1+ · Mac Catalyst 13.1+ · visionOS 1.0+

Metadata for a newly-captured photograph.

## Declaration

```objectivec
extern UIImagePickerControllerInfoKey const UIImagePickerControllerMediaMetadata;
```

<a id="Discussion"></a>

## Discussion

This key is valid only when using an image picker whose source type is set to [UIImagePickerControllerSourceTypeCamera](../sourcetype-swift.enum/camera.md), and applies only to still images.

The value for this key is an [NSDictionary](../../../foundation/nsdictionary.md) object that contains the metadata of the photo that was just captured. To store the metadata along with the image in the Camera Roll, use the [PHAssetChangeRequest](../../../photos/phassetchangerequest.md) class from the Photos framework.

## See Also

### Constants

- [UIImagePickerControllerCropRect](croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerEditedImage](editedimage.md): An image edited by the user.
- [UIImagePickerControllerImageURL](imageurl.md): The URL of the image file.
- [UIImagePickerControllerLivePhoto](livephoto.md): The Live Photo representation of the selected or captured photo.
- [UIImagePickerControllerMediaType](mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](phasset.md): Deprecated. A Photos asset for the image.
- [UIImagePickerControllerReferenceURL](referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.
