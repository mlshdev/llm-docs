> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/uikit/uiimagepickercontroller/sourcetype-swift.enum/savedphotosalbum

# UIImagePickerController.SourceType.savedPhotosAlbum (Swift)

**Framework:** UIKit  
**Kind:** Case  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Specifies the device’s Camera Roll album as the source for the image picker controller.

> Use [PHPickerViewController](../../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```swift
case savedPhotosAlbum
```

<a id="Discussion"></a>

## Discussion

If the device does not have a camera, specifies the Saved Photos album as the source.

## See Also

### Constants

- [UIImagePickerController.SourceType.camera](camera.md): Specifies the device’s built-in camera as the source for the image picker controller.
- [UIImagePickerController.SourceType.photoLibrary](photolibrary.md): Deprecated. Specifies the device’s photo library as the source for the image picker controller.

# UIImagePickerControllerSourceTypeSavedPhotosAlbum (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration Case  
**Availability:** iOS 2.0+ (deprecated in 27.0) · iPadOS 2.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.2) · visionOS 1.0+ (deprecated in 27.2)

Specifies the device’s Camera Roll album as the source for the image picker controller.

> Use [PHPickerViewController](../../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```objectivec
UIImagePickerControllerSourceTypeSavedPhotosAlbum
```

<a id="Discussion"></a>

## Discussion

If the device does not have a camera, specifies the Saved Photos album as the source.

## See Also

### Constants

- [UIImagePickerControllerSourceTypeCamera](camera.md): Specifies the device’s built-in camera as the source for the image picker controller.
- [UIImagePickerControllerSourceTypePhotoLibrary](photolibrary.md): Deprecated. Specifies the device’s photo library as the source for the image picker controller.
