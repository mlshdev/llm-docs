> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/shaperesourceerror](https://developer.apple.com/documentation/realitykit/shaperesourceerror)

# ShapeResourceError

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 1.0+

## Declaration

```swift
enum ShapeResourceError
```

## Topics

### Enumeration Cases

- [ShapeResourceError.convexPolyhedronGenerationFailed](shaperesourceerror/convexpolyhedrongenerationfailed.md)
- [ShapeResourceError.staticMeshGenerationFailed](shaperesourceerror/staticmeshgenerationfailed.md)

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Error](https://developer.apple.com/documentation/swift/error)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [LocalizedError](../foundation/localizederror.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Collision shapes and groups

- [Simulating physics with collisions in your visionOS app](simulating-physics-with-collisions-in-your-visionos-app.md): Create entities that behave and react like physical objects in a RealityKit view.
- [Configuring Collision in RealityKit](configuring-collision-in-realitykit.md): Use collision groups and collision filters to control which objects collide.
- [Creating an interactive 3D model in visionOS](../visionos/creating-an-interactable-3d-model-in-visionos.md): Display an interactive car model using gestures in a reality view.
- [CollisionComponent](collisioncomponent.md): A component that gives an entity the ability to collide with other entities that also have collision components.
- [CollisionComponent.Mode](collisioncomponent/mode-swift.enum.md): A mode that dictates how much collision data is collected for a given entity.
- [ShapeResource](shaperesource.md): A representation of a shape.
- [CollisionGroup](collisiongroup.md): A bitmask used to define the collision group to which an entity belongs.
- [CollisionFilter](collisionfilter.md): A set of masks that determine whether entities can collide during simulations.
- [TriggerVolume](triggervolume.md): An invisible 3D shape that detects when objects enter or exit a given region of space.
