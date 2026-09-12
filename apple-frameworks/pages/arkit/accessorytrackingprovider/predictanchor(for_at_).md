> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/arkit/accessorytrackingprovider/predictanchor(for:at:)](https://developer.apple.com/documentation/arkit/accessorytrackingprovider/predictanchor(for:at:))

# predictAnchor(for:at:)

**Framework:** ARKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Predict an accessory anchor to a target timestamp.

## Declaration

```swift
final func predictAnchor(for anchor: AccessoryAnchor, at timestamp: TimeInterval) -> AccessoryAnchor?
```

## Parameters

- `anchor`: A tracked anchor from `latestAnchors` to generate prediction for.
- `timestamp`: Target time for prediction. For rendering use cases with CompositorServices, use `drawable.frameTiming.trackableAnchorPredictionTime`.

<a id="return-value"></a>

## Return Value

The predicted anchor, or nil if prediction failed.

<a id="discussion"></a>

## Discussion

> **Note**

> A large time offset from latest anchor timestamp could degrade accuracy. For accuracy sensitive use cases like drawing, use a small offset or `latestAnchors`. Use a prediction timestamp smaller than the latest anchor timestamp for interpolation.
