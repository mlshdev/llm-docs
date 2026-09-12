> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:shouldbeginat:for:)](https://developer.apple.com/documentation/visionkit/imageanalysisinteractiondelegate/interaction(_:shouldbeginat:for:))

# interaction(\_:shouldBeginAt:for:)

**Framework:** VisionKit  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 17.0+ · visionOS 1.0+

Provides a Boolean value that indicates whether the interaction can begin at the given point.

## Declaration

```swift
@MainActor func interaction(_ interaction: ImageAnalysisInteraction, shouldBeginAt point: CGPoint, for interactionType: ImageAnalysisInteraction.InteractionTypes) -> Bool
```

## Parameters

- `interaction`: The object for which interaction can begin.
- `point`: The point where the interaction can begin.
- `interactionType`: The type of interaction that can begin.

<a id="return-value"></a>

## Return Value

`true` if the interaction can begin; otherwise, `false`.

<a id="discussion"></a>

## Discussion

The system calls this method once for each type of interaction. The default value is `true`, which starts the interaction immediately after the image displays.

## Default Implementations

### ImageAnalysisInteractionDelegate Implementations

- [interaction(\_:shouldBeginAt:for:)](interaction%28__shouldbeginat_for_%29-9n9q4.md): A default implementation that indicates that the interaction begins.
