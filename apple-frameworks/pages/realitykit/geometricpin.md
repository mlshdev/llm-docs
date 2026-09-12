> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/geometricpin](https://developer.apple.com/documentation/realitykit/geometricpin)

# GeometricPin

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 26.0+ · visionOS 2.0+

A structure that identifies a local transform relative to an entity or entity’s animating skeletal joint.

## Declaration

```swift
struct GeometricPin
```

<a id="overview"></a>

## Overview

A geometric pin has a base transform and allows an optional offset relative to the base transform. The base transform is only available when the pin attaches to an entity. When a geometric pin does not attach to any entity (i.e. `GeometricPin/entity` is `nil`), the pin is just a floating local transform relative to some space to be defined. The pin’s query function such as `GeometricPin/position` or `GeometricPin/orientation` returns the local offset in this case.

After a geometric pin has attached to an entity, or `GeometricPin/entity` is not `nil`, the base transform may be available. If you construct a geometric pin with a generic name, the base transform resolves to the transform of the pin’s owning entity. If you construct a geometric pin with a skeletal joint name, the base transform resolves to the current transform of the skeletal joint with the matching joint name. When the base transform is available, the pin’s query function such as `GeometricPin/position` or `GeometricPin/orientation` returns the base transform with the offset applied.

You can attach a pin to an entity by creating a `GeometricPin`, adding it to a [GeometricPinsComponent](geometricpinscomponent.md), and finally setting the [GeometricPinsComponent](geometricpinscomponent.md) to an `Entity`.

```swift
let pin = GeometricPin(named: "genericPin")
let skeletalJointPin = GeometricPin(named: "animatingPin", skeletalJointName: "hand")
var pinsComponent = GeometricPinsComponent()
pinsComponent.set(pin)
pinsComponent.set(skeletalJointPin)
let entity = Entity()
entity.components.set(pinsComponent)
```

Another way to attach a pin is to add the `GeometricPin` to the [pins](entity/pins.md) collection directly.

```swift
let entity = Entity()
let pin = entity.pins.set(named: "genericPin")
let skeletalJointPin = entity.pins.set(named: "animatingPin", skeletalJointName: "hand")
```

Note that when adding a geometric pin the API does not validate the skeletal joint name. The validation only happens when the base transform is evaluating, for example during the call to `GeometricPin/position` or `GeometricPin/orientation`. If the skeletal joint name does not match any valid skeletal joint, those query functions return `nil`.

Each geometric pin has a unique name to identify itself from other pins on an entity. You can use the subscript operator to retrieve a pin.

```swift
// To retrieve the skeletal joint pin in the previous snippet:
let retrievedPin = pinsComponent["animatingPin"]
```

## Topics

### Operators

- [==(\_:\_:)](geometricpin/==%28____%29.md): Returns a Boolean that indicates whether the pins are equal.

### Initializers

- [init(named:offsetPosition:offsetOrientation:)](geometricpin/init%28named_offsetposition_offsetorientation_%29.md): Creates a geometric pin that identifies a local position and orientation.
- [init(named:skeletalJointName:offsetPosition:offsetOrientation:)](geometricpin/init%28named_skeletaljointname_offsetposition_offsetorientation_%29.md): Creates a geometric pin that attaches to a skeletal joint.

### Instance Properties

- [entity](geometricpin/entity.md): The entity where the local frame lives.
- [name](geometricpin/name.md): The name of the pin.
- [offsetOrientation](geometricpin/offsetorientation.md): Offset from the pin’s base orientation.
- [offsetPosition](geometricpin/offsetposition.md): Offset from the pin’s base position.
- [orientation](geometricpin/orientation.md): Calculates and returns the current orientation of the pin relative to the pin’s owning entity, adjusted by the optional offset orientation.
- [position](geometricpin/position.md): Calculates and returns the current position of the pin relative to the pin’s owning entity, adjusted by the optional offset position.

### Instance Methods

- [hash(into:)](geometricpin/hash%28into_%29.md): Hashes the essential components of the pin by feeding them into the hash function.
- [orientation(relativeTo:)](geometricpin/orientation%28relativeto_%29.md): Calculates and returns the current orientation of the pin relative to a reference entity, adjusted by the optional offset position.
- [position(relativeTo:)](geometricpin/position%28relativeto_%29.md): Calculates and returns the current position of the pin relative to a reference entity, adjusted by the optional offset position.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Pin and joint components

- [Simulating physics joints in your RealityKit app](simulating-physics-joints-in-your-realitykit-app.md): Create realistic, connected motion using physics joints.
- [GeometricPinsComponent](geometricpinscomponent.md): A component that stores a sequence of geometric pins.
- [PhysicsJoint](physicsjoint.md): A type that describes physics joints.
- [PhysicsJointsComponent](physicsjointscomponent.md): A component that stores physics joints which RealityKit simulates.
- [EntityGeometricPins](entitygeometricpins.md): A structure that wraps all geometric pins an entity owns.
- [AttachedTransformComponent](attachedtransformcomponent.md): A component that stores an optional source pin owned by this entity and a target pin which this entity is attached to
