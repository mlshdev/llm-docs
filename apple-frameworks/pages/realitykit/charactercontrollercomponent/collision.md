> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/charactercontrollercomponent/collision](https://developer.apple.com/documentation/realitykit/charactercontrollercomponent/collision)

# CharacterControllerComponent.Collision

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 15.0+ · iPadOS 15.0+ · Mac Catalyst 15.0+ · macOS 12.0+ · tvOS 26.0+ · visionOS

A container that holds collision state for the character controller.

## Declaration

```swift
struct Collision
```

<a id="overview"></a>

## Overview

All coordinates are in *physics space*, the coordinate system of the physics simulation.

## Topics

### Initializers

- [init(characterEntity:hitEntity:hitPosition:hitNormal:moveDirection:moveDistance:)](collision/init%28characterentity_hitentity_hitposition_hitnormal_movedirection_movedistance_%29.md): Create Collision and initialize all fields.

### Instance Properties

- [characterEntity](collision/characterentity.md): Entity owning the character controller component.
- [hitEntity](collision/hitentity.md): The entity that was hit by the character controller.
- [hitNormal](collision/hitnormal.md): Hit normal relative to physics origin. In physics space.
- [hitPosition](collision/hitposition.md): Hit position relative to physics origin. In physics space.
- [moveDirection](collision/movedirection.md): Move direction controller was moving (unit vector). In physics space.
- [moveDistance](collision/movedistance.md): Move distance controller was attempting to move. In physics space.

## See Also

### Character control

- [CharacterControllerComponent](../charactercontrollercomponent.md): A component that manages character movement.
- [CharacterControllerComponent.CollisionFlags](collisionflags.md): An option set that specifies which parts of the character capsule have collided with other objects.
- [CharacterControllerStateComponent](../charactercontrollerstatecomponent.md): A component that represents the state of a character controller.
