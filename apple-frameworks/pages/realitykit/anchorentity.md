> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/anchorentity](https://developer.apple.com/documentation/realitykit/anchorentity)

# AnchorEntity

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An anchor that tethers entities to a scene.

## Declaration

```swift
@MainActor @preconcurrency class AnchorEntity
```

## Mentioned In

- [Handling different-sized objects in physics simulations](handling-different-sized-objects-in-physics-simulations.md)
- [Loading entities from a file](loading-entities-from-a-file.md)

<a id="overview"></a>

## Overview

Control how RealityKit places virtual objects into your scene with anchor entities. `AnchorEntity` conforms to the [HasAnchoring](hasanchoring.md) protocol, which gives it an [AnchoringComponent](anchoringcomponent.md) instance.

RealityKit places anchors based on the anchoring component’s [target](anchoringcomponent/target-swift.property.md) property. For example, you can configure an anchor entity to rest on a horizontal surface that RealityKit detects in an AR scene like a table or floor, and RealityKit automatically places that anchor after it detects an appropriate horizontal plane in the real world. The example below creates an anchor to a horizontal surface:

```swift
AnchorEntity(.plane(.horizontal,
                    classification: .any,
                    minimumBounds: SIMD2<Float>(0.2, 0.2)
))
```

See [Creating an anchor](anchorentity.md#Creating-an-anchor) for more information about the different types of anchors available when using Reality Composer Pro.

![A diagram showing the components present in the anchor entity. It contains](https://developer.apple.com/images/com.apple.RealityKit/AnchorEntity-1@2x.png)

Add anchor entities directly to your scene’s [anchors](scene/anchors.md) collection, or anywhere else in the scene hierarchy by adding them to the [children](hashierarchy/children.md) collection of another entity in your scene. Because `AnchorEntity` is a subclass of [Entity](entity.md), you can make an anchor entity a subentity of any other entity. RealityKit might move anchor entities as the scene updates, so the location and rotation of the anchor entity can change relative to its container entity, even if your code never modifies its [transformMatrix(relativeTo:)](hastransform/transformmatrix%28relativeto_%29.md) property.

Some anchor entities might not show up in your scene at all if RealityKit fails to detect an appropriate place for them. For example, an anchor entity with an `image` target doesn’t show up in the scene until RealityKit detects the specified image in the real world.

![A block diagram showing how anchor entities attach to a scene, and how they](https://developer.apple.com/images/com.apple.RealityKit/AnchorEntity-2@2x.png)

You can have multiple anchors in a RealityKit scene. For example, one anchor can place a toy car on a horizontal surface, like a table, and another can tie an informative text bubble to an image in the same scene.

> **Note**

> By default, physics bodies and colliders affect only entities that share the same anchor.

An entity and its descendants can participate in the physics simulation at the root of your scene by setting its [physicsSimulation](anchoringcomponent/physicssimulation-swift.property.md) to

## Topics

### Creating an anchor

- [init()](anchorentity/init%28%29.md): Creates a new anchor entity.
- [init(\_:)](anchorentity/init%28__%29-9vipc.md)
- [init(\_:)](anchorentity/init%28__%29-9rdwu.md): Creates an anchor entity targeting a particular kind of anchor.
- [init(\_:trackingMode:)](anchorentity/init%28__trackingmode_%29.md)
- [init(\_:trackingMode:physicsSimulation:)](anchorentity/init%28__trackingmode_physicssimulation_%29.md)
- [init(anchor:)](anchorentity/init%28anchor_%29.md): Creates an anchor entity that uses an existing AR anchor.
- [init(plane:classification:minimumBounds:)](anchorentity/init%28plane_classification_minimumbounds_%29.md): Creates an anchor entity that targets a plane with the given characteristics.
- [init(raycastResult:)](anchorentity/init%28raycastresult_%29.md): Creates an anchor entity using the information about a real-world surface discovered using a ray-cast query.
- [init(world:)](anchorentity/init%28world_%29-4snw2.md): Creates an anchor entity with a target fixed at the given position in the scene.
- [init(world:)](anchorentity/init%28world_%29-u9qv.md): Creates an anchor entity with a target fixed at the given position in the scene.

### Initializers

- [init(\_:)](anchorentity/init%28__%29.md)
- [init(world:)](anchorentity/init%28world_%29.md): Creates an anchor entity with a target fixed at the given position in the scene.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EventSource](eventsource.md)
- [HasAnchoring](hasanchoring.md)
- [HasHierarchy](hashierarchy.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Anchoring components

- [AnchoringComponent](anchoringcomponent.md): A component that anchors virtual content to a real world target.
- [AnchoringComponent.Target](anchoringcomponent/target-swift.enum.md): Defines the kinds of real world objects to which an anchor entity can be tethered.
- [AnchoringComponent.TrackingMode](anchoringcomponent/trackingmode-swift.struct.md): Options for how an entity tracks its target anchor.
- [ARKitAnchorComponent](arkitanchorcomponent.md): A component that exposes the backing ARKit data of an anchored entity.
- [HasAnchoring](hasanchoring.md): An interface that enables anchoring of virtual content to a real-world object in an AR scene.
