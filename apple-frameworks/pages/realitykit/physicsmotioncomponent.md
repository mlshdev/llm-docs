> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsmotioncomponent](https://developer.apple.com/documentation/realitykit/physicsmotioncomponent)

# PhysicsMotionComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that controls the motion of the body in physics simulations.

## Declaration

```swift
struct PhysicsMotionComponent
```

## Mentioned In

- [Designing scene hierarchies for efficient physics simulation](designing-scene-hierarchies-for-efficient-physics-simulation.md)

<a id="overview"></a>

## Overview

You specify velocities in the coordinate space of the physics simulation defined by [nearestSimulationEntity(for:)](physicssimulationcomponent/nearestsimulationentity%28for_%29.md).

The behavior of an entity with a physics motion component depends on the entity’s [mode](physicsbodycomponent/mode.md) setting:

- **[PhysicsBodyMode.static](physicsbodymode/static.md)**: The physics simulation ignores the velocities. The entity doesn’t move.
- **[PhysicsBodyMode.kinematic](physicsbodymode/kinematic.md)**: The physics simulation moves the body according to the values you set for [angularVelocity](physicsmotioncomponent/angularvelocity.md) and [linearVelocity](physicsmotioncomponent/linearvelocity.md).
- **[PhysicsBodyMode.dynamic](physicsbodymode/dynamic.md)**: The physics simulation overwrites the velocity values based on simulation, and ignores any values that you write.

## Topics

### Creating the motion component

- [init()](physicsmotioncomponent/init%28%29.md): Creates a physics motion component at rest.
- [init(linearVelocity:angularVelocity:)](physicsmotioncomponent/init%28linearvelocity_angularvelocity_%29.md): Creates a physics motion component with the given velocities.

### Setting velocity

- [angularVelocity](physicsmotioncomponent/angularvelocity.md): The angular velocity of the body around the center of mass.
- [linearVelocity](physicsmotioncomponent/linearvelocity.md): The linear velocity of the body in the physics simulation.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Physics motion

- [ImpulseAction](impulseaction.md): An action that applies an impulse to the physics body at its center of mass when played as an animation.
