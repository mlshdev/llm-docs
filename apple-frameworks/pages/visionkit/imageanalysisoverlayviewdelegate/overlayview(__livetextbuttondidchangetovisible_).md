> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:livetextbuttondidchangetovisible:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:livetextbuttondidchangetovisible:))

# overlayView(\_:liveTextButtonDidChangeToVisible:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Notifies your app when the Live Text button’s visibility changes.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, liveTextButtonDidChangeToVisible visible: Bool)
```

## Parameters

- `overlayView`: The associated overlay view for the Live Text button.
- `visible`: `true` if the Live Text button appears; otherwise, `false`.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:liveTextButtonDidChangeToVisible:)](overlayview%28__livetextbuttondidchangetovisible_%29-7ln8u.md): A default, blank implementation for when the Live Text button appears or disappears.

## See Also

### Tracking interface changes

- [overlayView(\_:highlightSelectedItemsDidChange:)](overlayview%28__highlightselecteditemsdidchange_%29.md): Notifies your app when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.
- [textSelectionDidChange(\_:)](textselectiondidchange%28__%29.md): Notifies your app when the interaction’s text selection changes.
