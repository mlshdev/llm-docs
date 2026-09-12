> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/spinaction/init(revolutions:localaxis:timingfunction:isadditive:)](https://developer.apple.com/documentation/realitykit/spinaction/init(revolutions:localaxis:timingfunction:isadditive:))

# init(revolutions:localAxis:timingFunction:isAdditive:)

**Framework:** RealityKit  
**Kind:** Initializer  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

Creates a new spin action.

## Declaration

```swift
init(revolutions: Float, localAxis: SIMD3<Float> = [0, 1, 0], timingFunction: AnimationTimingFunction = .default, isAdditive: Bool = false)
```

## Parameters

- `revolutions`: The number of rotations to complete before stopping.
- `localAxis`: A vector that describes the axis of rotation (in local space).
- `timingFunction`: A timing function that controls the progress of the animation.
- `isAdditive`: A Boolean value that indicates whether the animation system additively blends the action’s output with the base value.
