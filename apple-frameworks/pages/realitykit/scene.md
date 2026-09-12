> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/scene](https://developer.apple.com/documentation/realitykit/scene)

# Scene

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A container that holds the collection of entities that an AR view renders.

## Declaration

```swift
@MainActor @preconcurrency class Scene
```

<a id="overview"></a>

## Overview

You don’t create a [Scene](scene.md) instance directly. Instead, you get the one and only scene associated with a view from the [scene](arview/scene.md) property of an [ARView](arview.md) instance.

![Block diagram showing the scene as a property of an AR view, with anchor](https://developer.apple.com/images/com.apple.RealityKit/Scene-1@2x.png)

To add content to the view’s scene, you first create and add one or more [AnchorEntity](anchorentity.md) instances to the scene’s [anchors](scene/anchors.md) collection. Anchors tell RealityKit how to pin virtual content to real world objects, like flat surfaces or images. You then add a hierarchy of other [Entity](entity.md) instances to each anchor to indicate the geometry and behaviors that RealityKit should render at a given anchor point.

## Topics

### Identifying the scene

- [name](scene/name.md): A name for the scene.

### Adding and removing anchors

- [anchors](scene/anchors.md): The collection of anchors contained in the scene.
- [addAnchor(\_:)](scene/addanchor%28__%29.md): Adds an anchor to the scene’s list of anchors.
- [removeAnchor(\_:)](scene/removeanchor%28__%29.md): Removes the specified anchor from the scene.

### Finding entities

- [findEntity(named:)](scene/findentity%28named_%29.md): Searches the scene’s anchor entity hierarchies for an entity with the given name.
- [performQuery(\_:)](scene/performquery%28__%29.md): Returns all entities of the scene which pass the query.
- [findEntity(id:)](scene/findentity%28id_%29.md): Returns `Entity` with the given `Entity.ID` in the `Scene`.

### Detecting intersections

- [raycast(origin:direction:length:query:mask:relativeTo:)](scene/raycast%28origin_direction_length_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.
- [raycast(from:to:query:mask:relativeTo:)](scene/raycast%28from_to_query_mask_relativeto_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [convexCast(convexShape:fromPosition:fromOrientation:toPosition:toOrientation:query:mask:relativeTo:)](scene/convexcast%28convexshape_fromposition_fromorientation_toposition_toorientation_query_mask_relativeto_%29.md): Performs a convex shape cast against all the geometry in the scene.
- [pixelCast(from:to:)](scene/pixelcast%28from_to_%29.md): Performs a ray cast against all the geometry in the scene for a ray between two end points.
- [pixelCast(origin:direction:length:)](scene/pixelcast%28origin_direction_length_%29.md): Performs a ray cast against all the geometry in the scene for a ray of a given origin, direction, and length.

### Synchronizing entities with other devices

- [synchronizationService](scene/synchronizationservice.md): The service to use for network synchronization.

### Publishing and subscribing to events

- [publisher(for:on:)](scene/publisher%28for_on_%29.md): Generates a publisher for events of the specified type.
- [subscribe(to:on:\_:)](scene/subscribe%28to_on___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene.
- [publisher(for:on:componentType:)](scene/publisher%28for_on_componenttype_%29.md): Returns a `Publisher` for events of the specified type in a `Scene`.
- [subscribe(to:on:componentType:\_:)](scene/subscribe%28to_on_componenttype___%29.md): Subscribes to an event type, optionally limited to events affecting a source entity or scene, or limited to a specific component type for component events.

### Accessing the command queue

- [commandQueue](scene/commandqueue.md): If this scene uses a MTLCommandQueue for rendering, returns it.

### Structures

- [Scene.AnchorCollection](scene/anchorcollection.md): A collection of anchor entities.
- [Scene.Publisher](scene/publisher.md): A publisher for the given event type in the scene.

### Instance Properties

- [timebase](scene/timebase.md): The default timebase for the scene, useful for driving custom times managed by the user which are derived from the scene time.

### Default Implementations

- [Equatable Implementations](scene/equatable-implementations.md)
- [Hashable Implementations](scene/hashable-implementations.md)

## Relationships

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [EventSource](eventsource.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Scene management

- [Scene.AnchorCollection](scene/anchorcollection.md): A collection of anchor entities.
