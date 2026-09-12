> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchoringcomponent](https://developer.apple.com/documentation/realitykit/anchoringcomponent)

# AnchoringComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 14.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that anchors virtual content to a real world target.

## Declaration

```swift
struct AnchoringComponent
```

<a id="Overview"></a>

## Overview

This component is essential for getting AR features into RealityKit. Use `AnchoringComponent` to anchor virtual content to a real world target by attaching the component to any [Entity](entity.md) in your RealityKit scene.

To create an `AnchoringComponent`, you need to specify a [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md). You can also specify the [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md) and the [AnchoringComponent.PhysicsSimulation](anchoringcomponent/physicssimulation-swift.enum.md) to control how the entity tracks the anchor and how the physics simulates with the entity.

For example, here’s how to create an entity that targets the left hand’s wrist with predicted tracking mode:

```swift
let target = AnchoringComponent.Target.hand(.left, location: .wrist)
let anchoringComponent = AnchoringComponent(target, trackingMode: .predicted)
let entity = Entity()
entity.components.set(anchoringComponent)
```

The entity with `AnchoringComponent` is inactive when created. RealityKit anchors and activates the entity when it finds an anchor that meets the target requirements. You can check the entity’s anchored status using [SceneEvents.AnchoredStateChanged](sceneevents/anchoredstatechanged.md) events to receive scene events.

Similarly, RealityKit unanchors the entity if the target disappears or no longer meets the target requirements.

For more information about anchors, see [ARKit](../arkit.md).

## Topics

### Creating an anchoring component

- [init(\_:)](anchoringcomponent/init%28__%29.md): Creates an anchoring component with the given AR anchor.
- [init(\_:trackingMode:)](anchoringcomponent/init%28__trackingmode_%29.md)
- [init(\_:trackingMode:physicsSimulation:)](anchoringcomponent/init%28__trackingmode_physicssimulation_%29.md): Creates an anchoring component for a given target, tracking mode and physics simulation.

### Configuring the anchor

- [target](anchoringcomponent/target-swift.property.md): The real world anchor target to attach the entity to.
- [trackingMode](anchoringcomponent/trackingmode-swift.property.md): Defines how the `Entity` tracks its target anchor.
- [physicsSimulation](anchoringcomponent/physicssimulation-swift.property.md): Specifies the physics simulation spece that the entity and its descendants are in.

### Anchor targets

- [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [AnchoringComponent.PhysicsSimulation](anchoringcomponent/physicssimulation-swift.enum.md): Describes the physics simulation space of the entity and its descendants.

### Structures

- [AnchoringComponent.AccessoryAnchoringSource](anchoringcomponent/accessoryanchoringsource.md): Defines the source of accessory anchoring target based on how it is created.
- [AnchoringComponent.AccessoryLocation](anchoringcomponent/accessorylocation.md): A reference to points of interest on a tracked accessory.
- [AnchoringComponent.ImageAnchoringSource](anchoringcomponent/imageanchoringsource.md): Defines the source of image anchoring target based on how it is created.
- [AnchoringComponent.ObjectAnchoringSource](anchoringcomponent/objectanchoringsource.md): Defines the source of object anchoring target based on how it is created.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)

## See Also

### Anchoring components

- [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [ARKitAnchorComponent](arkitanchorcomponent.md): A component that exposes the backing ARKit data of an anchored entity.
- [AnchorEntity](anchorentity.md): An anchor that tethers entities to a scene.
- [HasAnchoring](hasanchoring.md): An interface that enables anchoring of virtual content to a real-world object in an AR scene.
