> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldbeginat:foranalysistype:)-35czq

# overlayView(\_:shouldBeginAt:forAnalysisType:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Indicates whether interaction begins at the given point for the specified interaction type.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldBeginAt point: CGPoint, forAnalysisType analysisType: ImageAnalysisOverlayView.InteractionTypes) -> Bool
```

## Parameters

- `overlayView`: The overlay view that implements the Live Text interface.
- `point`: The point where the interface begins.
- `analysisType`: The type of interaction that starts.

<a id="return-value"></a>

## Return Value

This default implementation returns `true`.

## Mentioned In

- [Enabling Live Text interactions with images](../enabling-live-text-interactions-with-images.md)

<a id="discussion"></a>

## Discussion

The overlay view invokes this method once for each type of interaction. The default return value is `true`, which starts the interface immediately upon presentation.
