> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/collisionflags](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/collisionflags)

# CharacterControllerComponent.CollisionFlags

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

An option set that specifies which parts of the character capsule have collided with other objects.

## Declaration

```swift
struct CollisionFlags
```

## Topics

### Initializers

- [init(rawValue:)](collisionflags/init%28rawvalue_%29.md): Initializes collisions flags from a raw value.

### Instance Properties

- [rawValue](collisionflags/rawvalue.md): The bitmask representation of the option set.

### Type Properties

- [bottom](collisionflags/bottom.md): The bottom of capsule was hit when moving in the down direction.
- [none](collisionflags/none.md): No collision.
- [side](collisionflags/side.md): The side of capsule was hit when moving in the direction tangent to the up vector.
- [top](collisionflags/top.md): The top of capsule was hit when moving in the up direction.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [ExpressibleByArrayLiteral](https://developer.apple.com/documentation/swift/expressiblebyarrayliteral)
- [OptionSet](https://developer.apple.com/documentation/swift/optionset)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [SetAlgebra](https://developer.apple.com/documentation/swift/setalgebra)

## See Also

### Character control

- [CharacterControllerComponent](../charactercontrollercomponent.md): A component that manages character movement.
- [CharacterControllerComponent.Collision](collision.md): A container that holds collision state for the character controller.
- [CharacterControllerStateComponent](../charactercontrollerstatecomponent.md): A component that represents the state of a character controller.
