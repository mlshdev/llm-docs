> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/preselectedassetidentifiers](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/preselectedassetidentifiers)

# preselectedAssetIdentifiers

**Framework:** PhotosUI  
**Kind:** Instance Property  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

An array of asset identifiers to preselect in the picker.

## Declaration

```swift
var preselectedAssetIdentifiers: [String] { get set }
```

<a id="Discussion"></a>

## Discussion

Preselection works only when initializing a [PHPickerConfiguration](../phpickerconfiguration-swift.struct.md) object with a photo library. Otherwise, the system returns an error.

The number of preselected asset identifiers can exceed your selection limit. The system disables the done action until the selection count becomes lower than [selectionLimit](selectionlimit.md).

Additionally, when providing preselected identifiers:

- Results include all preselected identifiers when canceling the picker.
- Results don’t include item providers for preselected assets that remain selected.
- When deselecting all assets, the system keeps the done action enabled.
