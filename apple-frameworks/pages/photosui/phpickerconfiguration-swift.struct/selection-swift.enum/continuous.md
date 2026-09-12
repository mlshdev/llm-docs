> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuous](https://developer.apple.com/documentation/photosui/phpickerconfiguration-swift.struct/selection-swift.enum/continuous)

# PHPickerConfiguration.Selection.continuous

**Framework:** PhotosUI  
**Kind:** Case  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · visionOS

An option that provides the app a person’s selection immediately.

## Declaration

```swift
case continuous
```

<a id="Discussion"></a>

## Discussion

This option notifies the app of photo selections dynamically, as someone taps the photo picker.

## See Also

### Selection methods

- [PHPickerConfiguration.Selection.default](default.md): An option that provides selected photos to the app in the default order after the user confirms the selection.
- [PHPickerConfiguration.Selection.ordered](ordered.md): An option that provides selected photos to the app in the chosen order after the user confirms the selection.
- [PHPickerConfiguration.Selection.continuousAndOrdered](continuousandordered.md): An option that provides the app a person’s selection immediately and displays selected photos with a numbered badge.
