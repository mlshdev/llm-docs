> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody/resetphysicstransform(_:recursive:)](https://developer.apple.com/documentation/realitykit/hasphysicsbody/resetphysicstransform(_:recursive:))

# resetPhysicsTransform(\_:recursive:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · visionOS 1.0+

Resets the position and velocities of the simulated physics body.

## Declaration

```swift
@MainActor @preconcurrency func resetPhysicsTransform(_ transform: Transform, recursive: Bool = true)
```

## Parameters

- `transform`: The new transform to inject into the dynamic physics simulation of the entity.
- `recursive`: Apply the reset to child entities.

<a id="discussion"></a>

## Discussion

Call this method to change the transform applied to a body by physics simulation. This only matters for dynamic rigid bodies, with a [mode](../physicsbodycomponent/mode.md) of [PhysicsBodyMode.dynamic](../physicsbodymode/dynamic.md). This is the only kind of body that’s affected by physics simulations. For all others, modify the entity’s [transform](../hastransform/transform.md) property directly.

Conversely, directly modifying the transform of a dynamic body has no effect because the physics simulation overwrites it on every frame.

## See Also

### Resetting physics simulations

- [resetPhysicsTransform(recursive:)](resetphysicstransform%28recursive_%29.md): Resets the position, orientation, and velocities of the simulated physics body.
