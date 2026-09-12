> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct)

# PHPickerConfiguration

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

An object that contains information about how to configure a picker view controller.

## Declaration

```swift
struct PHPickerConfiguration
```

## Topics

### Creating a configuration

- [init()](phpickerconfiguration-swift.struct/init%28%29.md): Creates a new configuration object.
- [init(photoLibrary:)](phpickerconfiguration-swift.struct/init%28photolibrary_%29.md): Creates a new configuration object for a photo library.

### Filtering asset types

- [filter](phpickerconfiguration-swift.struct/filter.md): The filter you apply to restrict the asset types the picker displays.
- [PHPickerFilter](phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.

### Selecting the preferred asset representation

- [preferredAssetRepresentationMode](phpickerconfiguration-swift.struct/preferredassetrepresentationmode.md): A mode that determines which representation to use if an asset contains more than one.
- [PHPickerConfiguration.AssetRepresentationMode](phpickerconfiguration-swift.struct/assetrepresentationmode.md): Constants identifying the mode the system uses when many representations exist for an asset.

### Preselecting assets

- [preselectedAssetIdentifiers](phpickerconfiguration-swift.struct/preselectedassetidentifiers.md): An array of asset identifiers to preselect in the picker.

### Setting the selection limit

- [selectionLimit](phpickerconfiguration-swift.struct/selectionlimit.md): The maximum number of selections the user can make.
- [selection](phpickerconfiguration-swift.struct/selection-swift.property.md): The selection behavior for the picker.
- [PHPickerConfigurationSelection](phpickerconfigurationselection.md): Options that represent differing selection behavior.
- [PHPickerConfiguration.Selection](phpickerconfiguration-swift.struct/selection-swift.enum.md): Options that represent differing selection behavior.

### Customizing picker appearance and behavior

- [mode](phpickerconfiguration-swift.struct/mode.md): A layout type for the photos in the picker’s view.
- [PHPickerMode](phpickermode-swift.struct.md): Layout options that determine how the picker orders photos visually.
- [disabledCapabilities](phpickerconfiguration-swift.struct/disabledcapabilities.md): The aspects of a photo picker’s default appearance that your app can disable.
- [PHPickerCapabilities](phpickercapabilities.md): Options that customize the look and behavior of the photos picker.
- [edgesWithoutContentMargins](phpickerconfiguration-swift.struct/edgeswithoutcontentmargins.md): The portions of a photo picker’s perimeter that are borderless.
- [PHPickerConfiguration.Update](phpickerconfiguration-swift.struct/update.md): An object that defines the aspects of a photo picker’s appearance that can change while it’s presented.

### Instance Properties

- [metadataOptions](phpickerconfiguration-swift.struct/metadataoptions.md): Metadata options for the picker. Default is `[]`.
- [searchText](phpickerconfiguration-swift.struct/searchtext.md): The search text for the picker. Default is `nil`.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](../photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewController](phpickerviewcontroller.md): A view controller that provides the user interface for choosing assets from the photo library.
- [PHPickerViewControllerDelegate](phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerFilter](phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.
- [PHPickerResult](phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.
