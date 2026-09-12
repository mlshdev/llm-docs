> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/contentsrect(for:)-34yzu](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/contentsrect(for:)-34yzu)

# contentsRect(for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

A default implementation that returns a rectangle that specifies the full width and height of the view.

## Declaration

```swift
@MainActor func contentsRect(for overlayView: ImageAnalysisOverlayView) -> CGRect
```

## Parameters

- `overlayView`: The overlay view that implements the Live Text interface.

<a id="return-value"></a>

## Return Value

The unit rectangle `[0.0, 0.0, 1.0, 1.0]`.

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)
