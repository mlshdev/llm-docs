> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerresult-swift.struct](https://developer.apple.com/documentation/photosui/phpickerresult-swift.struct)

# PHPickerResult

**Framework:** PhotosUI  
**Kind:** Structure  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

Types that represent a selected asset from a person’s photo library.

## Declaration

```swift
struct PHPickerResult
```

## Topics

### Inspecting the Result

- [assetIdentifier](phpickerresult-swift.struct/assetidentifier.md): The local identifier of the selected asset.
- [itemProvider](phpickerresult-swift.struct/itemprovider.md): Representations of the selected asset.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](../photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewController](phpickerviewcontroller.md): A view controller that provides the user interface for choosing assets from the photo library.
- [PHPickerViewControllerDelegate](phpickerviewcontrollerdelegate-5yntc.md): A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.
- [PHPickerConfiguration](phpickerconfiguration-swift.struct.md): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.
