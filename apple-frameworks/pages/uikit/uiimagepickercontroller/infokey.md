> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/infokey](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/infokey)

# UIImagePickerController.InfoKey (Swift)

**Framework:** UIKit  
**Kind:** Structure  
**Availability:** iOS · iPadOS · Mac Catalyst · visionOS

Keys you use to retrieve information from the editing dictionary about the media that the user selected.

## Declaration

```swift
struct InfoKey
```

## Topics

### Constants

- [cropRect](infokey/croprect.md): The cropping rectangle that was applied to the original image.
- [editedImage](infokey/editedimage.md): An image edited by the user.
- [imageURL](infokey/imageurl.md): The URL of the image file.
- [livePhoto](infokey/livephoto.md): The Live Photo representation of the selected or captured photo.
- [mediaMetadata](infokey/mediametadata.md): Metadata for a newly-captured photograph.
- [mediaType](infokey/mediatype.md): The media type selected by the user.
- [mediaURL](infokey/mediaurl.md): The filesystem URL for the movie.
- [originalImage](infokey/originalimage.md): The original, uncropped image selected by the user.
- [phAsset](infokey/phasset.md): Deprecated. A Photos asset for the image.
- [referenceURL](infokey/referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.

### Initializers

- [init(rawValue:)](infokey/init%28rawvalue_%29.md): Creates a new editing information key with the specified raw value.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# UIImagePickerControllerInfoKey (Objective-C)

**Framework:** UIKit  
**Kind:** Type Alias  
**Availability:** iOS · iPadOS · Mac Catalyst · tvOS · visionOS

Keys you use to retrieve information from the editing dictionary about the media that the user selected.

## Declaration

```objectivec
typedef NSString * UIImagePickerControllerInfoKey;
```

## Topics

### Constants

- [UIImagePickerControllerCropRect](infokey/croprect.md): The cropping rectangle that was applied to the original image.
- [UIImagePickerControllerEditedImage](infokey/editedimage.md): An image edited by the user.
- [UIImagePickerControllerImageURL](infokey/imageurl.md): The URL of the image file.
- [UIImagePickerControllerLivePhoto](infokey/livephoto.md): The Live Photo representation of the selected or captured photo.
- [UIImagePickerControllerMediaMetadata](infokey/mediametadata.md): Metadata for a newly-captured photograph.
- [UIImagePickerControllerMediaType](infokey/mediatype.md): The media type selected by the user.
- [UIImagePickerControllerMediaURL](infokey/mediaurl.md): The filesystem URL for the movie.
- [UIImagePickerControllerOriginalImage](infokey/originalimage.md): The original, uncropped image selected by the user.
- [UIImagePickerControllerPHAsset](infokey/phasset.md): Deprecated. A Photos asset for the image.
- [UIImagePickerControllerReferenceURL](infokey/referenceurl.md): Deprecated. The Assets Library URL for the original version of the picked item.
