> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hasphysicsbody/addtorque(_:relativeto:)](https://developer.apple.com/documentation/realitykit/hasphysicsbody/addtorque(_:relativeto:))

# addTorque(\_:relativeTo:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Applies a torque to the physics body at its center of mass.

## Declaration

```swift
@MainActor @preconcurrency func addTorque(_ torque: SIMD3<Float>, relativeTo referenceEntity: Entity?)
```

## Parameters

- `torque`: A torque in newton meters per radian.
- `referenceEntity`: The reference entity that defines the coordinate space in which `torque` is defined.

<a id="discussion"></a>

## Discussion

The physics simulator applies the added torque until the end of the frame interval. To continue exerting the torque after that time, add the torque again with another call to the method. Handle the [SceneEvents.Update](../sceneevents/update.md) event to receive an indication of when the frame interval ends. For an app that renders at 60 frames per second (fps), this event occurs about once per 16 milliseconds.

## See Also

### Adding and clearing forces

- [addForce(\_:relativeTo:)](addforce%28__relativeto_%29.md): Applies a force to the physics body at its center of mass.
- [addForce(\_:at:relativeTo:)](addforce%28__at_relativeto_%29.md): Applies a force to the physics body at the specified position.
- [clearForcesAndTorques()](clearforcesandtorques%28%29.md): Clears all forces previously added to the physics body.
