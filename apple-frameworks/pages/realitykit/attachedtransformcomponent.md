> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/attachedtransformcomponent](https://developer.apple.com/documentation/realitykit/attachedtransformcomponent)

# AttachedTransformComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+

A component that stores an optional source pin owned by this entity and a target pin which this entity is attached to

## Declaration

```swift
struct AttachedTransformComponent
```

<a id="overview"></a>

## Overview

Attach an entity to a target pin owned by another entity with an optional source pin

## Topics

### Initializers

- [init(source:target:)](attachedtransformcomponent/init%28source_target_%29.md): Creates an AttachedTransformComponent with an optional source pin and a target pin

### Instance Properties

- [source](attachedtransformcomponent/source.md): Optional source pin with an offset relative to the current entity
- [target](attachedtransformcomponent/target.md): Target pin with an offset relative to the target entity

## Relationships

### Conforms To

- [Component](component.md)

## See Also

### Pin and joint components

- [Simulating physics joints in your RealityKit app](simulating-physics-joints-in-your-realitykit-app.md): Create realistic, connected motion using physics joints.
- [GeometricPin](geometricpin.md): A structure that identifies a local transform relative to an entity or entity’s animating skeletal joint.
- [GeometricPinsComponent](geometricpinscomponent.md): A component that stores a sequence of geometric pins.
- [PhysicsJoint](physicsjoint.md): A type that describes physics joints.
- [PhysicsJointsComponent](physicsjointscomponent.md): A component that stores physics joints which RealityKit simulates.
- [EntityGeometricPins](entitygeometricpins.md): A structure that wraps all geometric pins an entity owns.
