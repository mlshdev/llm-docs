> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/blendshapeweightscomponent/weightset

# weightSet

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The runtime named blend shapes weights.

## Declaration

```swift
var weightSet: BlendShapeWeightsSet { get set }
```

<a id="discussion"></a>

## Discussion

Initialize the `weightSet` variable using the [init()](../blendshapeweightsset/init%28%29.md) function.

The `weightSet` variable has the following limitations as to how it can be set:

- If `weightSet` is assigned to a new [BlendShapeWeightsSet](../blendshapeweightsset.md), then the new set have the same number of weights and weight names as the current variable. Additionally, make sure the weight names exactly match the current set’s weight names.
- Weight name changes are ignored.
- Setting an incorrect number of weight values are ignored.
- Blend shape name changes are ignored.
