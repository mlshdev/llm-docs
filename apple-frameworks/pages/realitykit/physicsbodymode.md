> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodymode](https://developer.apple.com/documentation/realitykit/physicsbodymode)

# PhysicsBodyMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The ways that a physics body can move in response to physical forces.

## Declaration

```swift
enum PhysicsBodyMode
```

## Topics

### Setting the physics body mode

- [PhysicsBodyMode.static](physicsbodymode/static.md): The body never moves.
- [PhysicsBodyMode.kinematic](physicsbodymode/kinematic.md): The user controls body movement.
- [PhysicsBodyMode.dynamic](physicsbodymode/dynamic.md): Forces and collisions control body movement.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Physical properties

- [PhysicsBodyComponent](physicsbodycomponent.md): A component that defines an entity’s behavior in physics body simulations.
- [PhysicsMaterialResource](physicsmaterialresource.md): Material properties, like friction, of a physically simulated object.
- [PhysicsMassProperties](physicsmassproperties.md): Mass properties of a physics body.
