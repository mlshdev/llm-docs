> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldshowmenuforevent:atpoint:)-2irgq](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldshowmenuforevent:atpoint:)-2irgq)

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
