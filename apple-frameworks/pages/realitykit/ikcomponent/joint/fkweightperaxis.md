> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/ikcomponent/joint/fkweightperaxis

# fkWeightPerAxis

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The per-axis weight of the source animation demand on the joint.

## Declaration

```swift
var fkWeightPerAxis: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

This value is in the closed range `[0, 1]`, where `0` means no influence, and `1` is the maximum influence.
