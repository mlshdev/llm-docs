> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/textselectiondidchange(_:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/textselectiondidchange(_:))

# textSelectionDidChange(\_:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Notifies your app when the interaction’s text selection changes.

## Declaration

```swift
@MainActor func textSelectionDidChange(_ interaction: ImageAnalysisInteraction)
```

## Parameters

- `interaction`: The interaction object in which the text selection changes.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29-4xwp.md): A default, blank implementation for when the text selection changes.

## See Also

### Tracking interface changes

- [interaction(\_:liveTextButtonDidChangeToVisible:)](interaction%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [interaction(\_:highlightSelectedItemsDidChange:)](interaction%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person tapping the Live Text button.
