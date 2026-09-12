> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/physicsbodycomponent](https://developer.apple.com/documentation/realitykit/physicsbodycomponent)

# PhysicsBodyComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that defines an entity’s behavior in physics body simulations.

## Declaration

```swift
struct PhysicsBodyComponent
```

<a id="overview"></a>

## Overview

Only entities with a [PhysicsBodyComponent](physicsbodycomponent.md) and a [CollisionComponent](collisioncomponent.md) can participate in a scene’s physics simulation. If you need to move an entity that participates in the physics system, it also needs a [PhysicsMotionComponent](physicsmotioncomponent.md).

Add a physics body component to an entity by adopting the [HasPhysicsBody](hasphysicsbody.md) protocol, which allows RealityKit’s physics simulation to compute behavior in response to forces acting upon the body, following basic rules of Newtonian mechanics.

Note the following when considering applying a non-uniform scale to an entity:

- Non-uniform scaling is applicable only to box, convex mesh and triangle mesh collision shapes.
- Non-uniform scaling is not supported for all other types of collision shapes. In this case the scale.x value is duplicated to the scale’s y and z components as well to force scale uniformity based on the x component.
- If the entity has a non-uniform scale assigned to its transform then that entity should not have any descendants assigned that contain rotations in their transforms. A good rule of thumb is to assign the non-uniform scale to the entity that has the collision shape, and avoid adding children below that entity.

> **Note**

> Model entities have a physics body component by default.

## Topics

### Creating a physics body component

- [init()](physicsbodycomponent/init%28%29.md): Creates a physics body component with default settings.
- [init(massProperties:material:mode:)](physicsbodycomponent/init%28massproperties_material_mode_%29.md): Creates a physics body component with the given mass properties, material, and mode.
- [init(shapes:density:material:mode:)](physicsbodycomponent/init%28shapes_density_material_mode_%29.md): Creates a physics body component deriving mass properties from shape and density.
- [init(shapes:mass:material:mode:)](physicsbodycomponent/init%28shapes_mass_material_mode_%29.md): Creates a physics body component deriving mass properties from shape and mass.

### Detecting collisions

- [isContinuousCollisionDetectionEnabled](physicsbodycomponent/iscontinuouscollisiondetectionenabled.md): A Boolean that controls whether the physics simulation performs continuous collision detection.

### Locking movement

- [isRotationLocked](physicsbodycomponent/isrotationlocked.md): A tuple of Boolean values that you use to lock rotation of the physics body around any of the three axes.
- [isTranslationLocked](physicsbodycomponent/istranslationlocked.md): A tuple of Boolean values that you use to lock the position of the physics body along any of the three axes.

### Setting the mode

- [mode](physicsbodycomponent/mode.md): The behavioral mode that controls the way the physics body moves and interacts with other physics bodies in a simulation.

### Setting material properties

- [material](physicsbodycomponent/material.md): The physics body’s material properties, like friction.

### Setting mass properties

- [massProperties](physicsbodycomponent/massproperties.md): The physics body’s mass properties, like inertia and center of mass.

### Operators

- [==(\_:\_:)](physicsbodycomponent/==%28____%29.md): Indicates whether two physics body components are equal.

### Instance Properties

- [angularDamping](physicsbodycomponent/angulardamping.md): The value that controls how fast a dynamic rigid body’s rotational motion approaches the zero rest state.
- [isAffectedByGravity](physicsbodycomponent/isaffectedbygravity.md): A Boolean value that indicates whether gravity acts on dynamic rigid bodies.
- [linearDamping](physicsbodycomponent/lineardamping.md): The value that controls how fast a dynamic rigid body’s translation motion approaches the zero rest state.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Physical properties

- [PhysicsMaterialResource](physicsmaterialresource.md): Material properties, like friction, of a physically simulated object.
- [PhysicsBodyMode](physicsbodymode.md): The ways that a physics body can move in response to physical forces.
- [PhysicsMassProperties](physicsmassproperties.md): Mass properties of a physics body.
