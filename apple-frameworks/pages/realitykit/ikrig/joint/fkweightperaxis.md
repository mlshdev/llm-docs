> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/joint/fkweightperaxis](https://developer.apple.com/documentation/realitykit/ikrig/joint/fkweightperaxis)

# fkWeightPerAxis

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The per-axis weight of the FK demand on the joint.

## Declaration

```swift
var fkWeightPerAxis: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

Values are in the closed range `[0, 1]`, where `0` means no influence, and `1` is maximum influence.
