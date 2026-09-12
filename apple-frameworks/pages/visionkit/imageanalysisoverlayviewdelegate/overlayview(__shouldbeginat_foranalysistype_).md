> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldbeginat:foranalysistype:)](https://developer.apple.com/documentation/visionkit/imageanalysisoverlayviewdelegate/overlayview(_:shouldbeginat:foranalysistype:))

# overlayView(\_:shouldBeginAt:forAnalysisType:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** macOS 13.0+

Provides a Boolean value that indicates whether the interaction can begin at the given point.

## Declaration

```swift
@MainActor func overlayView(_ overlayView: ImageAnalysisOverlayView, shouldBeginAt point: CGPoint, forAnalysisType analysisType: ImageAnalysisOverlayView.InteractionTypes) -> Bool
```

## Parameters

- `overlayView`: The overlay view for which interaction can begin.
- `point`: The point where the interaction can begin.
- `analysisType`: The type of interaction that can begin.

<a id="return-value"></a>

## Return Value

`true` if the interaction can begin; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The system calls this method once for each type of interaction. The default value is `true`, which starts the interaction immediately after the image displays.

## Default Implementations

### ImageAnalysisOverlayViewDelegate Implementations

- [overlayView(\_:shouldBeginAt:forAnalysisType:)](overlayview%28__shouldbeginat_foranalysistype_%29-35czq.md): Indicates whether interaction begins at the given point for the specified interaction type.
