> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/contentsrect(for:)-34yzu

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
