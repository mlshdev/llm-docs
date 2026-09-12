> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hastransform](https://developer.apple.com/documentation/realitykit/hastransform)

# HasTransform

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables manipulating the scale, rotation, and translation of an entity.

## Declaration

```swift
@MainActor @preconcurrency protocol HasTransform : Entity
```

<a id="overview"></a>

## Overview

All entities automatically adopt this protocol because the [Entity](entity.md) base class does. This adoption gives all entities a [Transform](transform.md) component, and a collection of methods for manipulating the component, that you use to position the entity in space.

## Topics

### Accessing the component

- [transform](hastransform/transform.md): The transform of an entity relative to its parent.

### Scaling an entity

- [scale](hastransform/scale.md): The scale of the entity relative to its parent.
- [scale(relativeTo:)](hastransform/scale%28relativeto_%29.md): Gets the scale of an entity relative to the given entity.
- [setScale(\_:relativeTo:)](hastransform/setscale%28__relativeto_%29.md): Sets the scale factor of the entity relative to the given reference entity.

### Rotating an entity

- [orientation](hastransform/orientation.md): The rotation of the entity relative to its parent.
- [orientation(relativeTo:)](hastransform/orientation%28relativeto_%29.md): Gets the orientation of an entity relative to the given entity.
- [setOrientation(\_:relativeTo:)](hastransform/setorientation%28__relativeto_%29.md): Sets the orientation of the entity relative to the given reference entity.

### Positioning an entity

- [position](hastransform/position.md): The position of the entity relative to its parent.
- [position(relativeTo:)](hastransform/position%28relativeto_%29.md): Gets the position of an entity relative to the given entity.
- [setPosition(\_:relativeTo:)](hastransform/setposition%28__relativeto_%29.md): Sets the position of the entity relative to the given reference entity.

### Using a matrix

- [Transforming entities between RealityKit coordinate spaces](transforming-entities-between-realitykit-coordinate-spaces.md): Move an entity between a volumetric window and an immersive space using coordinate space transformations.
- [transformMatrix(relativeTo:)](hastransform/transformmatrix%28relativeto_%29.md): Gets the 4 x 4 transform matrix of an entity relative to the given entity.

### Moving an entity

- [move(to:relativeTo:)](hastransform/move%28to_relativeto_%29-6lohd.md): Moves an entity instantly to a new location given by a transform.
- [move(to:relativeTo:)](hastransform/move%28to_relativeto_%29-6jul8.md): Moves an entity instantly to a new location given by a 4x4 matrix.
- [look(at:from:upVector:relativeTo:)](hastransform/look%28at_from_upvector_relativeto_%29.md): Positions and orients the entity to look at a target from a given position.
- [look(at:from:upVector:relativeTo:forward:)](hastransform/look%28at_from_upvector_relativeto_forward_%29.md): Positions and orients the entity such that it looks at certain target from a give position.
- [align(\_:to:)](hastransform/align%28__to_%29.md): Moves and rotates the entity by a transformation from the origin pin to the target pin.

### Animating an entity

- [move(to:relativeTo:duration:timingFunction:)](hastransform/move%28to_relativeto_duration_timingfunction_%29-35qp2.md): Moves an entity over a period of time to a new location given by a transform.
- [move(to:relativeTo:duration:timingFunction:)](hastransform/move%28to_relativeto_duration_timingfunction_%29-6la93.md): Moves an entity over a period of time to a new location given by a 4x4 matrix.

### Converting values between coordinate spaces

- [convert(position:from:)](hastransform/convert%28position_from_%29.md): Converts a position from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(position:to:)](hastransform/convert%28position_to_%29.md): Converts a position from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(direction:from:)](hastransform/convert%28direction_from_%29.md): Converts a direction vector from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(direction:to:)](hastransform/convert%28direction_to_%29.md): Converts a direction vector from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(normal:from:)](hastransform/convert%28normal_from_%29.md): Converts a normal vector from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(normal:to:)](hastransform/convert%28normal_to_%29.md): Converts a normal vector from the local space of the entity on which you called this method to the local space of a reference entity.
- [convert(transform:from:)](hastransform/convert%28transform_from_%29.md): Converts the scale, rotation, and position of a transform from the local space of a reference entity to the local space of the entity on which you called this method.
- [convert(transform:to:)](hastransform/convert%28transform_to_%29.md): Converts the scale, rotation, and position of a transform from the local space of the entity on which you called this method to the local space of a reference entity.

### Getting a bounding box

- [visualBounds(recursive:relativeTo:excludeInactive:)](hastransform/visualbounds%28recursive_relativeto_excludeinactive_%29.md): Computes a bounding box for the entity in the specified space, optionally including child entities.

### Instance Methods

- [move(to:relativeTo:)](hastransform/move%28to_relativeto_%29.md): Moves an entity instantly to a new location given by a transform.
- [move(to:relativeTo:duration:timingFunction:)](hastransform/move%28to_relativeto_duration_timingfunction_%29.md): Moves an entity over a period of time to a new location given by a transform.
- [setTransformMatrix(\_:relativeTo:)](hastransform/settransformmatrix%28__relativeto_%29.md): Sets the transform of the entity relative to the given reference entity using a 4x4 matrix representation.

## Relationships

### Inherits From

- [Entity](entity.md)

### Inherited By

- [HasBodyTracking](hasbodytracking.md)
- [HasCollision](hascollision.md)
- [HasDirectionalLight](hasdirectionallight.md)
- [HasModel](hasmodel.md)
- [HasPerspectiveCamera](hasperspectivecamera.md)
- [HasPhysics](hasphysics.md)
- [HasPhysicsBody](hasphysicsbody.md)
- [HasPointLight](haspointlight.md)
- [HasSpotLight](hasspotlight.md)

### Conforming Types

- [AnchorEntity](anchorentity.md)
- [BodyTrackedEntity](bodytrackedentity.md)
- [DirectionalLight](directionallight.md)
- [Entity](entity.md)
- [ModelEntity](modelentity.md)
- [PerspectiveCamera](perspectivecamera.md)
- [PointLight](pointlight.md)
- [SpotLight](spotlight.md)
- [TriggerVolume](triggervolume.md)
- [ViewAttachmentEntity](viewattachmententity.md)

## See Also

### Positioning entities in space

- [Transform](transform.md): A component that defines the scale, rotation, and translation of an entity.
- [transformMatrix(relativeTo:)](entity/transformmatrix%28relativeto_%29.md): Returns the 4 x 4 transform matrix of an entity relative to the given coordinate space.
- [Entity.CoordinateSpaceReference](entity/coordinatespacereference.md): Defines the coordinate space reference for transform conversion.
- [Entity.ForwardDirection](entity/forwarddirection.md): Defines the forward direction for an entity.
