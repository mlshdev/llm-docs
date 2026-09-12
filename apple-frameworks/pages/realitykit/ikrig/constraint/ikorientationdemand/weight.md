> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraint/ikorientationdemand/weight](https://developer.apple.com/documentation/realitykit/ikrig/constraint/ikorientationdemand/weight)

# weight

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The per-axis weight this demand has on the pose.

## Declaration

```swift
var weight: SIMD3<Float>
```

<a id="discussion"></a>

## Discussion

> **Note**

> Values of `0` or less remove the demand influence.
