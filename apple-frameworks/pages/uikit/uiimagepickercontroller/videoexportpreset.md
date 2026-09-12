> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiimagepickercontroller/videoexportpreset](https://developer.apple.com/documentation/uikit/uiimagepickercontroller/videoexportpreset)

# videoExportPreset (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preset to use when preparing video for export to your app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) with [AVAssetExportSession](../../avfoundation/avassetexportsession.md) instead.

## Declaration

```swift
var videoExportPreset: String { get set }
```

<a id="Discussion"></a>

## Discussion

The value of this key is one of the export presets supported by the [AVAssetExportSession](../../avfoundation/avassetexportsession.md) class. For a list of possible values, see the export preset constants in [AVAssetExportSession](../../avfoundation/avassetexportsession.md).

## See Also

### Configuring the export presets

- [imageExportPreset](imageexportpreset.md): Deprecated. The preset to use when preparing images for export to your app.
- [UIImagePickerController.ImageURLExportPreset](imageurlexportpreset.md): Deprecated. Constants that indicate how to export images to the client app.

# videoExportPreset (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 11.0+ (deprecated in 27.0) · iPadOS 11.0+ (deprecated in 27.0) · Mac Catalyst 13.1+ (deprecated in 27.0) · visionOS 1.0+ (deprecated in 27.0)

The preset to use when preparing video for export to your app.

> Use [PHPickerViewController](../../photosui/phpickerviewcontroller.md) with [AVAssetExportSession](../../avfoundation/avassetexportsession.md) instead.

## Declaration

```objectivec
@property (nonatomic, copy) NSString * videoExportPreset;
```

<a id="Discussion"></a>

## Discussion

The value of this key is one of the export presets supported by the [AVAssetExportSession](../../avfoundation/avassetexportsession.md) class. For a list of possible values, see the export preset constants in [AVAssetExportSession](../../avfoundation/avassetexportsession.md).

## See Also

### Configuring the export presets

- [imageExportPreset](imageexportpreset.md): Deprecated. The preset to use when preparing images for export to your app.
- [UIImagePickerControllerImageURLExportPreset](imageurlexportpreset.md): Deprecated. Constants that indicate how to export images to the client app.
