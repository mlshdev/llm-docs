> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/ikrig/constraint/parent(named:on:positionweight:orientationweight:)](https://developer.apple.com/documentation/realitykit/ikrig/constraint/parent(named:on:positionweight:orientationweight:))

# parent(named:on:positionWeight:orientationWeight:)

**Framework:** RealityKit  
**Kind:** Type Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a constraint with both a positional and an orientational demands.

## Declaration

```swift
static func parent(named name: String, on jointName: String, positionWeight: SIMD3<Float> = [1, 1, 1], orientationWeight: SIMD3<Float> = [1, 1, 1]) -> IKRig.Constraint
```

## Parameters

- `name`: The rig unique name of the constraint
- `jointName`: The name of the joint to constrain.
- `positionWeight`: The weight of the position demand.
- `orientationWeight`: The weight of the orientation demand.
