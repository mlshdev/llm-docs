> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody/resetphysicstransform(recursive:)](https://developer.apple.com/documentation/realitykit/hasphysicsbody/resetphysicstransform(recursive:))

# resetPhysicsTransform(recursive:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Resets the position, orientation, and velocities of the simulated physics body.

## Declaration

```swift
@MainActor @preconcurrency func resetPhysicsTransform(recursive: Bool = true)
```

## Parameters

- `recursive`: Apply the reset to all descendant entities.

<a id="discussion"></a>

## Discussion

Call this method only for dynamic rigid bodies, with a [mode](../physicsbodycomponent/mode.md) of [PhysicsBodyMode.dynamic](../physicsbodymode/dynamic.md). This is the only kind of body that’s affected by physics simulations. For all others, modify the entity’s transform property directly.

Conversely, directly modifying the transform of a dynamic body has no effect because the physics simulation overwrites it on every frame.

## See Also

### Resetting physics simulations

- [resetPhysicsTransform(\_:recursive:)](resetphysicstransform%28__recursive_%29.md): Deprecated. Resets the position and velocities of the simulated physics body.
