> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform/move(to:relativeto:duration:timingfunction:)-6la93](https://developer.apple.com/documentation/realitykit/hastransform/move(to:relativeto:duration:timingfunction:)-6la93)

# move(to:relativeTo:duration:timingFunction:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Moves an entity over a period of time to a new location given by a 4x4 matrix.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func move(to target: float4x4, relativeTo referenceEntity: Entity?, duration: TimeInterval, timingFunction: AnimationTimingFunction = .default) -> AnimationPlaybackController
```

## Parameters

- `target`: A 4x4 matrix that indicates the new location.
- `referenceEntity`: The entity that defines a frame of reference. Set this to `nil` to indicate world space.
- `duration`: The time in seconds over which the move should occur.
- `timingFunction`: A timing function that controls the progress of the animation.

<a id="return-value"></a>

## Return Value

An [AnimationPlaybackController](../animationplaybackcontroller.md) instance that you use to control the animation playback.

## See Also

### Animating an entity

- [move(to:relativeTo:duration:timingFunction:)](move%28to_relativeto_duration_timingfunction_%29-35qp2.md): Moves an entity over a period of time to a new location given by a transform.
