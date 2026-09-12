> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:highlightselecteditemsdidchange:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:highlightselecteditemsdidchange:))

# overlayView(\_:highlightSelectedItemsDidChange:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Notifies your app when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, highlightSelectedItemsDidChange highlightSelectedItems: Bool)
```

## Parameters

- `overlayView`: The overlay view for which the selected item highlights change.
- `highlightSelectedItems`: A Boolean value that indicates whether highlights appear.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:highlightSelectedItemsDidChange:)](overlayview%28__highlightselecteditemsdidchange_%29-68r8g.md): A default, blank implementation for when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.

## See Also

### Tracking interface changes

- [overlayView(\_:liveTextButtonDidChangeToVisible:)](overlayview%28__livetextbuttondidchangetovisible_%29.md): Notifies your app when the Live Text button’s visibility changes.
- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.
