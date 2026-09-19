> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:highlightselecteditemsdidchange:)-68r8g

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
