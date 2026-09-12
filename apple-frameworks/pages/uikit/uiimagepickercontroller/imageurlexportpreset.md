> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/imageurlexportpreset](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/imageurlexportpreset)

# UIImagePickerController.ImageURLExportPreset (Swift)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Constants that indicate how to export images to the client app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```swift
enum ImageURLExportPreset
```

## Topics

### Constants

- [UIImagePickerController.ImageURLExportPreset.compatible](imageurlexportpreset/compatible.md): Deprecated. A preset for converting HEIF formatted images to JPEG.
- [UIImagePickerController.ImageURLExportPreset.current](imageurlexportpreset/current.md): Deprecated. A preset for passing image data as-is to the client.

### Initializers

- [init(rawValue:)](imageurlexportpreset/init%28rawvalue_%29.md): Deprecated.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Configuring the export presets

- [imageExportPreset](imageexportpreset.md): Deprecated. The preset to use when preparing images for export to your app.
- [videoExportPreset](videoexportpreset.md): Deprecated. The preset to use when preparing video for export to your app.

# UIImagePickerControllerImageURLExportPreset (Objective-C)

**Framework:** UIKit  
**Kind:** Enumeration  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

Constants that indicate how to export images to the client app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```objectivec
enum UIImagePickerControllerImageURLExportPreset : NSInteger;
```

## Topics

### Constants

- [UIImagePickerControllerImageURLExportPresetCompatible](imageurlexportpreset/compatible.md): Deprecated. A preset for converting HEIF formatted images to JPEG.
- [UIImagePickerControllerImageURLExportPresetCurrent](imageurlexportpreset/current.md): Deprecated. A preset for passing image data as-is to the client.

## See Also

### Configuring the export presets

- [imageExportPreset](imageexportpreset.md): Deprecated. The preset to use when preparing images for export to your app.
- [videoExportPreset](videoexportpreset.md): Deprecated. The preset to use when preparing video for export to your app.
