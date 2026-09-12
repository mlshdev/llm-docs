> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfigurationselection](https://developer.apple.com/documentation/photosui/phpickerconfigurationselection)

# PHPickerConfigurationSelection (Swift)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Options that represent differing selection behavior.

## Declaration

```swift
enum PHPickerConfigurationSelection
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values of the photo picker configuration ([PHPickerConfiguration](phpickerconfiguration-swift.struct.md)) property [selection](phpickerconfiguration-swift.struct/selection-swift.property.md).

## Topics

### Selection methods

- [PHPickerConfigurationSelection.default](phpickerconfigurationselection/default.md): An option that provides selected photos to the app in the default order after the user confirms the selection.
- [PHPickerConfigurationSelection.ordered](phpickerconfigurationselection/ordered.md): An option that provides selected photos to the app in the chosen order after the user confirms the selection.
- [PHPickerConfigurationSelection.continuous](phpickerconfigurationselection/continuous.md): An option that provides the app a person’s selection immediately.
- [PHPickerConfigurationSelection.continuousAndOrdered](phpickerconfigurationselection/continuousandordered.md): An option that provides the app a person’s selection immediately and displays selected photos with a numbered badge.

### Initializers

- [init(rawValue:)](phpickerconfigurationselection/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# PHPickerConfigurationSelection (Objective-C)

**Framework:** PhotosUI  
**Kind:** Enumeration  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS 1.0+

Options that represent differing selection behavior.

## Declaration

```objectivec
enum PHPickerConfigurationSelection : NSInteger;
```

<a id="overview"></a>

## Overview

This enumeration defines the possible values of the photo picker configuration ([PHPickerConfiguration](phpickerconfiguration-swift.struct.md)) property [selection](phpickerconfiguration-swift.struct/selection-swift.property.md).

## Topics

### Selection methods

- [PHPickerConfigurationSelectionDefault](phpickerconfigurationselection/default.md): An option that provides selected photos to the app in the default order after the user confirms the selection.
- [PHPickerConfigurationSelectionOrdered](phpickerconfigurationselection/ordered.md): An option that provides selected photos to the app in the chosen order after the user confirms the selection.
- [PHPickerConfigurationSelectionContinuous](phpickerconfigurationselection/continuous.md): An option that provides the app a person’s selection immediately.
- [PHPickerConfigurationSelectionContinuousAndOrdered](phpickerconfigurationselection/continuousandordered.md): An option that provides the app a person’s selection immediately and displays selected photos with a numbered badge.

## See Also

### Setting the selection limit

- [selectionLimit](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class/selectionlimit): The maximum number of selections the user can make.
- [selection](https://developer.apple.com/documentation/photosui/phpickerconfiguration-c.class/selection): The selection behavior for the picker.
