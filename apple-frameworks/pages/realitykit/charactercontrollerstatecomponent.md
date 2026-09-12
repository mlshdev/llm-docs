> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollerstatecomponent](https://developer.apple.com/documentation/realitykit/charactercontrollerstatecomponent)

# CharacterControllerStateComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A component that represents the state of a character controller.

## Declaration

```swift
struct CharacterControllerStateComponent
```

<a id="overview"></a>

## Overview

RealityKit adds this component to an entity when you add a [CharacterControllerComponent](charactercontrollercomponent.md) instance to it. Manually adding this component to an entity that has a character controller component has no effect because it’s redundant.

## Topics

### Creating a state component

- [init()](charactercontrollerstatecomponent/init%28%29.md)

### Accessing character controller state

- [isOnGround](charactercontrollerstatecomponent/isonground.md): A Boolean value that indicates whether the character controller is on the ground.
- [velocity](charactercontrollerstatecomponent/velocity.md): The linear speed relative to the origin in physics space.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Character control

- [CharacterControllerComponent](charactercontrollercomponent.md): A component that manages character movement.
- [CharacterControllerComponent.Collision](charactercontrollercomponent/collision.md): A container that holds collision state for the character controller.
- [CharacterControllerComponent.CollisionFlags](charactercontrollercomponent/collisionflags.md): An option set that specifies which parts of the character capsule have collided with other objects.
