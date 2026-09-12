> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/imageexportpreset](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/imageexportpreset)

# imageExportPreset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preset to use when preparing images for export to your app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```swift
var imageExportPreset: UIImagePickerController.ImageURLExportPreset { get set }
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UIImagePickerController.ImageURLExportPreset.compatible](imageurlexportpreset/compatible.md).

## See Also

### Configuring the export presets

- [UIImagePickerController.ImageURLExportPreset](imageurlexportpreset.md): Deprecated. Constants that indicate how to export images to the client app.
- [videoExportPreset](videoexportpreset.md): Deprecated. The preset to use when preparing video for export to your app.

# imageExportPreset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preset to use when preparing images for export to your app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) instead.

## Declaration

```objectivec
@property (nonatomic) UIImagePickerControllerImageURLExportPreset imageExportPreset;
```

<a id="Discussion"></a>

## Discussion

The default value of this property is [UIImagePickerControllerImageURLExportPresetCompatible](imageurlexportpreset/compatible.md).

## See Also

### Configuring the export presets

- [UIImagePickerControllerImageURLExportPreset](imageurlexportpreset.md): Deprecated. Constants that indicate how to export images to the client app.
- [videoExportPreset](videoexportpreset.md): Deprecated. The preset to use when preparing video for export to your app.
