> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/textselectiondidchange(_:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/textselectiondidchange(_:))

# textSelectionDidChange(\_:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 14.0+

Notifies your app when the interaction’s text selection changes.

## Declaration

```swift
@MainActor func textSelectionDidChange(_ overlayView: ImageAnalysisOverlayView)
```

## Parameters

- `overlayView`: The overlay view  in which the text selection changes.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29-7gr28.md): Notifies your app when the interaction’s text selection changes.

## See Also

### Tracking interface changes

- [overlayView(\_:liveTextButtonDidChangeToVisible:)](overlayview%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [overlayView(\_:highlightSelectedItemsDidChange:)](overlayview%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.
