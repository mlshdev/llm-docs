> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usdkit/usdplayer/deformationdata/skinningdata/influenceweights](https://developer.apple.com/documentation/usdkit/usdplayer/deformationdata/skinningdata/influenceweights)

# influenceWeights

**Framework:** USDKit  
**Kind:** Instance Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+

Influence weights (0.0–1.0) corresponding 1:1 with `influenceJointIndices`.

## Declaration

```swift
let influenceWeights: [Float]
```

<a id="discussion"></a>

## Discussion

Weights for each vertex sum to 1.0.
