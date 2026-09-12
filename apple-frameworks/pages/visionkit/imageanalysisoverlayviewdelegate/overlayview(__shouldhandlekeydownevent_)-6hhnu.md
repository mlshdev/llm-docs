> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldhandlekeydownevent:)-6hhnu](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldhandlekeydownevent:)-6hhnu)

# overlayView(\_:shouldHandleKeyDownEvent:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default implementation that indicates the overlay view handles the given key-down event.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldHandleKeyDownEvent event: NSEvent) -> Bool
```

## Parameters

- `overlayView`: The overlay view that implements the Live Text interface.
- `event`: The event that occurs.

<a id="return-value"></a>

## Return Value

This default implementation returns `true`.
