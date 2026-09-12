> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraint/ikorientationdemand/mode-swift.enum/additivelookat(targetaxis:)](https://developer.apple.com/documentation/realitykit/ikrig/constraint/ikorientationdemand/mode-swift.enum/additivelookat(targetaxis:))

# IKRig.Constraint.IKOrientationDemand.Mode.additiveLookAt(targetAxis:)

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A mode which computes the rotation target as additive look-at.

## Declaration

```swift
case additiveLookAt(targetAxis: SIMD3<Float>)
```

## Parameters

- `targetAxis`: The unit vector from the joint to the look-at target defined in the local space of the constrained joint.

<a id="Demand-target"></a>

### Demand target

- **Source**: The model space orientation of the constrained joint from the FK demands pose.
- **Target**: The model space orientation aligning the associated `targetAxis` with the direction from the current model space joint position to [lookAtTargetPosition](../../../../ikcomponent/constraint/lookattargetposition.md).
- **Delta**: The rotation difference between `Source` and `Target`.

The rotation weight of [animationOverrideWeight](../../../../ikcomponent/constraint/animationoverrideweight.md) determines how much of the `Delta` is added to the `Source`.
