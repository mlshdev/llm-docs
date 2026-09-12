> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpinscomponent](https://developer.apple.com/documentation/realitykit/geometricpinscomponent)

# GeometricPinsComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A component that stores a sequence of geometric pins.

## Declaration

```swift
struct GeometricPinsComponent
```

<a id="overview"></a>

## Overview

Add, inspect, and remove geometric pins that belong to the entity that owns an instance of `GeometricPinsComponent` by accessing its [pins](entity/pins.md) property.

## Topics

### Initializers

- [init()](geometricpinscomponent/init%28%29.md): Creates a geometric pins component with an empty sequence of pins.

### Instance Properties

- [pins](geometricpinscomponent/pins.md): The sequence of geometric pins the component owns.

### Instance Methods

- [removePin(named:)](geometricpinscomponent/removepin%28named_%29.md): Removes the pin associated with the name.
- [set(pin:)](geometricpinscomponent/set%28pin_%29.md): Adds a pin to the collection.

### Subscripts

- [subscript(\_:)](geometricpinscomponent/subscript%28__%29.md): Retrieves the pin by its name.

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Pin and joint components

- [Simulating physics joints in your RealityKit app](simulating-physics-joints-in-your-realitykit-app.md): Create realistic, connected motion using physics joints.
- [GeometricPin](geometricpin.md): A structure that identifies a local transform relative to an entity or entity’s animating skeletal joint.
- [PhysicsJoint](physicsjoint.md): A type that describes physics joints.
- [PhysicsJointsComponent](physicsjointscomponent.md): A component that stores physics joints which RealityKit simulates.
- [EntityGeometricPins](entitygeometricpins.md): A structure that wraps all geometric pins an entity owns.
- [AttachedTransformComponent](attachedtransformcomponent.md): A component that stores an optional source pin owned by this entity and a target pin which this entity is attached to
