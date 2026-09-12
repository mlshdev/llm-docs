> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerviewcontrollerdelegate-5yntc](https://developer.apple.com/documentation/photosui/phpickerviewcontrollerdelegate-5yntc)

# PHPickerViewControllerDelegate

**Framework:** PhotosUI  
**Kind:** Protocol  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 13.0+ · visionOS

A set of methods that the delegate must implement to respond to `PHPickerViewController` user events.

## Declaration

```swift
@MainActor @preconcurrency protocol PHPickerViewControllerDelegate : AnyObject
```

## Topics

### Instance Methods

- [picker(\_:didFinishPicking:)](phpickerviewcontrollerdelegate-5yntc/picker%28__didfinishpicking_%29.md): Called when the user completes a selection or dismisses `PHPickerViewController` using the cancel button.

## See Also

### Photos picker for UIKit, AppKit

- [Selecting Photos and Videos in iOS](../photokit/selecting-photos-and-videos-in-ios.md): Improve the user experience of finding and selecting assets by using the Photos picker.
- [PHPickerViewController](phpickerviewcontroller.md): A view controller that provides the user interface for choosing assets from the photo library.
- [PHPickerConfiguration](phpickerconfiguration-swift.struct.md): An object that contains information about how to configure a picker view controller.
- [PHPickerFilter](phpickerfilter-swift.struct.md): A type that defines the filter to apply to the photo library.
- [PHPickerResult](phpickerresult-swift.struct.md): Types that represent a selected asset from a person’s photo library.
