> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisioncomponent/mode-swift.enum](https://developer.apple.com/documentation/realitykit/collisioncomponent/mode-swift.enum)

# CollisionComponent.Mode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A mode that dictates how much collision data is collected for a given entity.

## Declaration

```swift
enum Mode
```

## Topics

### Collision modes

- [CollisionComponent.Mode.default](mode-swift.enum/default.md): A default collision object.
- [CollisionComponent.Mode.trigger](mode-swift.enum/trigger.md): A trigger collision object.

### Enumeration Cases

- [CollisionComponent.Mode.colliding](mode-swift.enum/colliding.md): An environmental collision object.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Collision shapes and groups

- [Simulating physics with collisions in your visionOS app](../simulating-physics-with-collisions-in-your-visionos-app.md): Create entities that behave and react like physical objects in a RealityKit view.
- [Configuring Collision in RealityKit](../configuring-collision-in-realitykit.md): Use collision groups and collision filters to control which objects collide.
- [Creating an interactive 3D model in visionOS](../../visionos/creating-an-interactable-3d-model-in-visionos.md): Display an interactive car model using gestures in a reality view.
- [CollisionComponent](../collisioncomponent.md): A component that gives an entity the ability to collide with other entities that also have collision components.
- [ShapeResource](../shaperesource.md): A representation of a shape.
- [ShapeResourceError](../shaperesourceerror.md)
- [CollisionGroup](../collisiongroup.md): A bitmask used to define the collision group to which an entity belongs.
- [CollisionFilter](../collisionfilter.md): A set of masks that determine whether entities can collide during simulations.
- [TriggerVolume](../triggervolume.md): An invisible 3D shape that detects when objects enter or exit a given region of space.
