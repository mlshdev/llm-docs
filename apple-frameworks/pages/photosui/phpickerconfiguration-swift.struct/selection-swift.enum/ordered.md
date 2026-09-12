> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/ordered](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/ordered)

# PHPickerConfiguration.Selection.ordered

**Framework:** PhotosUI  
**Kind:** Case  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 13.0+ · visionOS

An option that provides selected photos to the app in the chosen order after the user confirms the selection.

## Declaration

```swift
case ordered
```

<a id="Discussion"></a>

## Discussion

This option notifies the app of photo selections when a person taps the Add button.

In addition, selected photos display a numbered badge that represents the order in which someone taps the photo.

## See Also

### Selection methods

- [PHPickerConfiguration.Selection.default](default.md): An option that provides selected photos to the app in the default order after the user confirms the selection.
- [PHPickerConfiguration.Selection.continuous](continuous.md): An option that provides the app a person’s selection immediately.
- [PHPickerConfiguration.Selection.continuousAndOrdered](continuousandordered.md): An option that provides the app a person’s selection immediately and displays selected photos with a numbered badge.
