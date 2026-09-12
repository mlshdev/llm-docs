> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum)

# PHPickerConfiguration.Selection

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

Options that represent differing selection behavior.

## Declaration

```swift
enum Selection
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values of the photo picker configuration ([PHPickerConfiguration](../phpickerconfiguration-swift.struct.md)) property [selection](selection-swift.property.md).

## Topics

### Selection methods

- [PHPickerConfiguration.Selection.default](selection-swift.enum/default.md): An option that provides selected photos to the app in the default order after the user confirms the selection.
- [PHPickerConfiguration.Selection.ordered](selection-swift.enum/ordered.md): An option that provides selected photos to the app in the chosen order after the user confirms the selection.
- [PHPickerConfiguration.Selection.continuous](selection-swift.enum/continuous.md): An option that provides the app a person’s selection immediately.
- [PHPickerConfiguration.Selection.continuousAndOrdered](selection-swift.enum/continuousandordered.md): An option that provides the app a person’s selection immediately and displays selected photos with a numbered badge.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Setting the selection limit

- [selectionLimit](selectionlimit.md): The maximum number of selections the user can make.
- [selection](selection-swift.property.md): The selection behavior for the picker.
- [PHPickerConfigurationSelection](../phpickerconfigurationselection.md): Options that represent differing selection behavior.
