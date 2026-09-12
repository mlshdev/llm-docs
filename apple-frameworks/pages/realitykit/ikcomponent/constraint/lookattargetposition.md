> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikcomponent/constraint/lookattargetposition](https://developer.apple.com/documentation/realitykit/ikcomponent/constraint/lookattargetposition)

# lookAtTargetPosition

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

The point demand which the look-at constraint uses to generate a new orientation demand.

## Declaration

```swift
var lookAtTargetPosition: SIMD3<Float> { get set }
```

<a id="discussion"></a>

## Discussion

The position is in model space. The computed demand overrides the rotation part of [target](target.md).
