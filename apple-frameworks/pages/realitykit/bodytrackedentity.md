> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/bodytrackedentity](https://developer.apple.com/documentation/realitykit/bodytrackedentity)

# BodyTrackedEntity

**Framework:** RealityKit  
**Kind:** Class  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+

An entity used to animate a virtual character in an AR scene by tracking a real person.

## Declaration

```swift
@MainActor @preconcurrency class BodyTrackedEntity
```

## Mentioned In

- [Loading entities from a file](loading-entities-from-a-file.md)

<a id="overview"></a>

## Overview

Like a [ModelEntity](modelentity.md), a [BodyTrackedEntity](bodytrackedentity.md) has a [ModelComponent](modelcomponent.md) that defines its physical appearance. Unlike a model entity, a body-tracked entity lacks the components required to participate in collisions or physics simulations. Instead, a [BodyTrackingComponent](bodytrackingcomponent.md) drives the positioning and arrangement of the entity based on tracking information from the AR session.

![Diagram showing the components present in the body-tracked](https://developer.apple.com/images/com.apple.RealityKit/BodyTrackedEntity-1@2x.png)

For an example of how to use a body-tracked entity, see [Capturing Body Motion in 3D](../arkit/capturing-body-motion-in-3d.md).

## Topics

### Loading a body-tracked entity

- [loadBodyTracked(named:in:)](entity/loadbodytracked%28named_in_%29.md): Synchronously loads a body-tracked entity from a bundle.
- [loadBodyTracked(contentsOf:withName:)](entity/loadbodytracked%28contentsof_withname_%29.md): Synchronously loads a body-tracked entity from a file URL.
- [loadBodyTrackedAsync(named:in:)](entity/loadbodytrackedasync%28named_in_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a bundle.
- [loadBodyTrackedAsync(contentsOf:withName:)](entity/loadbodytrackedasync%28contentsof_withname_%29.md): Deprecated. Asynchronously loads a body-tracked entity from a file URL.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforms To

- [CoordinateSpace3D](../spatial/coordinatespace3d.md)
- [CoordinateSpace3DFloat](../spatial/coordinatespace3dfloat.md)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [EventSource](eventsource.md)
- [HasBodyTracking](hasbodytracking.md)
- [HasHierarchy](hashierarchy.md)
- [HasModel](hasmodel.md)
- [HasSynchronization](hassynchronization.md)
- [HasTransform](hastransform.md)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Identifiable](https://developer.apple.com/documentation/swift/identifiable)
- [Observable](https://developer.apple.com/documentation/observation/observable)
- [RealityCoordinateSpace](realitycoordinatespace.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Body and face tracking

- [Creating an App for Face-Painting in AR](creating-an-app-for-face-painting-in-ar.md): Combine RealityKit’s face detection with PencilKit to implement virtual face-painting.
- [Occluding virtual content with people](../arkit/occluding-virtual-content-with-people.md): Cover your app’s virtual content with people that ARKit perceives in the camera feed.
- [Placing entities using head and device transform](../visionos/placing-entities-using-head-and-device-transform.md): Query and react to changes in the position and rotation of Apple Vision Pro.
- [BodyTrackingComponent](bodytrackingcomponent.md): A component for tracking people in an AR session.
- [HasBodyTracking](hasbodytracking.md): An interface that enables the animation of a virtual character by tracking a real person in AR.
