> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/entitygeometricpins](https://developer.apple.com/documentation/realitykit/entitygeometricpins)

# EntityGeometricPins

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A structure that wraps all geometric pins an entity owns.

## Declaration

```swift
@MainActor struct EntityGeometricPins
```

<a id="overview"></a>

## Overview

Access an instance of this structure through the entity property [pins](entity/pins.md).

## Topics

### Structures

- [EntityGeometricPins.Iterator](entitygeometricpins/iterator.md): An object to iterate over all geometric pins in the collection.

### Instance Properties

- [count](entitygeometricpins/count.md): The total number of pins.
- [entity](entitygeometricpins/entity.md): The entity where the local frame lives.
- [isEmpty](entitygeometricpins/isempty.md): A Boolean value indicating whether the collection is empty.

### Instance Methods

- [makeIterator()](entitygeometricpins/makeiterator%28%29.md): Returns an iterator for the sequence.
- [remove(named:)](entitygeometricpins/remove%28named_%29.md): Removes a geometric pin with the given name from this entity.
- [set(named:position:orientation:)](entitygeometricpins/set%28named_position_orientation_%29.md): Creates and adds a geometric pin to the entity, and returns the entity geometric pin.
- [set(named:position:orientation:relativeTo:)](entitygeometricpins/set%28named_position_orientation_relativeto_%29.md): Creates and adds a geometric pin to the entity, and returns the entity geometric pin.
- [set(named:skeletalJointName:position:orientation:)](entitygeometricpins/set%28named_skeletaljointname_position_orientation_%29.md): Creates and adds a geometric pin to the entity’s skeletal joint, and returns the geometric pin.

### Subscripts

- [subscript(\_:)](entitygeometricpins/subscript%28__%29.md): Obtains a geometric pin the entity owns by name.

### Type Aliases

- [EntityGeometricPins.Element](entitygeometricpins/element.md): An individual pin in the collection.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
- [Sequence](https://developer.apple.com/documentation/swift/sequence)

## See Also

### Pin and joint components

- [Simulating physics joints in your RealityKit app](simulating-physics-joints-in-your-realitykit-app.md): Create realistic, connected motion using physics joints.
- [GeometricPin](geometricpin.md): A structure that identifies a local transform relative to an entity or entity’s animating skeletal joint.
- [GeometricPinsComponent](geometricpinscomponent.md): A component that stores a sequence of geometric pins.
- [PhysicsJoint](physicsjoint.md): A type that describes physics joints.
- [PhysicsJointsComponent](physicsjointscomponent.md): A component that stores physics joints which RealityKit simulates.
- [AttachedTransformComponent](attachedtransformcomponent.md): A component that stores an optional source pin owned by this entity and a target pin which this entity is attached to
