> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraint/lookatabsolute(named:on:lookingalong:orientationweight:)](https://developer.apple.com/documentation/realitykit/ikrig/constraint/lookatabsolute(named:on:lookingalong:orientationweight:))

# lookAtAbsolute(named:on:lookingAlong:orientationWeight:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a constraint with only an orientational demand in absolute look-at mode.

## Declaration

```swift
static func lookAtAbsolute(named name: String, on jointName: String, lookingAlong targetAxis: SIMD3<Float>, orientationWeight: SIMD3<Float> = [1, 1, 1]) -> IKRig.Constraint
```

## Parameters

- `name`: The rig unique name of the constraint
- `jointName`: The name of the joint to constrain.
- `targetAxis`: The axis from the constrained joint to look-at target position in the model space of the entity.
- `orientationWeight`: The weight of the orientation demand.

<a id="discussion"></a>

## Discussion

> **See Also**

> `IKOrientationDemand.Mode.absoluteLookAt`
