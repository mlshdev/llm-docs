> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldshowmenuforevent:atpoint:)-2irgq

# overlayView(\_:shouldShowMenuForEvent:atPoint:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default implementation that indicates the overlay view shows its menu for the given event.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldShowMenuForEvent event: NSEvent, atPoint point: CGPoint) -> Bool
```

## Parameters

- `overlayView`: The overlay view that implements the Live Text interface.
- `event`: The event that occurs.
- `point`: The location of the event.

<a id="return-value"></a>

## Return Value

This default implementation returns `true`.
