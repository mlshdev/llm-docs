> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:shouldbeginat:for:)-9n9q4](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:shouldbeginat:for:)-9n9q4)

# interaction(\_:shouldBeginAt:for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

A default implementation that indicates that the interaction begins.

## Declaration

```swift
@MainActor func interaction(_ interaction: ImageAnalysisInteraction, shouldBeginAt point: CGPoint, for interactionType: ImageAnalysisInteraction.InteractionTypes) -> Bool
```

<a id="return-value"></a>

## Return Value

This default implementation returns `true`.
