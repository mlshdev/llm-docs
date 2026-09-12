> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody/addforce(_:at:relativeto:)](https://developer.apple.com/documentation/realitykit/hasphysicsbody/addforce(_:at:relativeto:))

# addForce(\_:at:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Applies a force to the physics body at the specified position.

## Declaration

```swift
@MainActor @preconcurrency func addForce(_ force: SIMD3<Float>, at position: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `force`: A force in newtons.
- `position`: The position at which to apply the force.
- `referenceEntity`: The reference entity that defines the coordinate space in which `position` and `force` are defined.

<a id="discussion"></a>

## Discussion

The physics simulator applies the added force until the end of the frame interval. To continue exerting the force after that time, add the force again with another call to the method. Handle the [SceneEvents.Update](../sceneevents/update.md) event to receive an indication of when the frame interval ends. For an app that renders at 60 frames per second (fps), this event occurs about once per 16 milliseconds.

## See Also

### Adding and clearing forces

- [addForce(\_:relativeTo:)](addforce%28__relativeto_%29.md): Applies a force to the physics body at its center of mass.
- [addTorque(\_:relativeTo:)](addtorque%28__relativeto_%29.md): Applies a torque to the physics body at its center of mass.
- [clearForcesAndTorques()](clearforcesandtorques%28%29.md): Clears all forces previously added to the physics body.
