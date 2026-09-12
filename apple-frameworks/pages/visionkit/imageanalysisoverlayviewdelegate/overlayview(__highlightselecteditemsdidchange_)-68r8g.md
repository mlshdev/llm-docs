> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:highlightselecteditemsdidchange:)-68r8g](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:highlightselecteditemsdidchange:)-68r8g)

# overlayView(\_:highlightSelectedItemsDidChange:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default, blank implementation for when recognized items in the image appear highlighted as a result of a person clicking or tapping the Live Text button.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, highlightSelectedItemsDidChange highlightSelectedItems: Bool)
```

## Parameters

- `overlayView`: The interaction object for the Live Text interface.
- `highlightSelectedItems`: `true` if the interface highlights recognized items; otherwise, `false`.
