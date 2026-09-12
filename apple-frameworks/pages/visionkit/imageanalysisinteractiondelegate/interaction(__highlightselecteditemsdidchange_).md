> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:highlightselecteditemsdidchange:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:highlightselecteditemsdidchange:))

# interaction(\_:highlightSelectedItemsDidChange:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Notifies your app when recognized items in the image appear highlighted as a result of a person tapping the Live Text button.

## Declaration

```swift
@MainActor func interaction(_ interaction: ImageAnalysisInteraction, highlightSelectedItemsDidChange highlightSelectedItems: Bool)
```

## Parameters

- `interaction`: The interaction object for which the selected item highlights change.
- `highlightSelectedItems`: A Boolean value that indicates whether highlights appear.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [interaction(\_:highlightSelectedItemsDidChange:)](interaction%28__highlightselecteditemsdidchange_%29-qsjs.md): A default, blank implementation for when recognized items in the image appear highlighted as a result of a person tapping the Live Text button.

## See Also

### Tracking interface changes

- [interaction(\_:liveTextButtonDidChangeToVisible:)](interaction%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.
