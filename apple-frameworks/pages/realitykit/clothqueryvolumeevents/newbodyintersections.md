> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothqueryvolumeevents/newbodyintersections](https://developer.apple.com/documentation/realitykit/clothqueryvolumeevents/newbodyintersections)

# ClothQueryVolumeEvents.NewBodyIntersections

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An event type that a cloth query volume publishes (before simulation update) when cloth bodies intersect it.

## Declaration

```swift
struct NewBodyIntersections
```

<a id="overview"></a>

## Overview

This event should be treated as having a non-escapable lifetime. Some of its data is no longer available after its lifetime has ended.

## Topics

### Accessing the intersections

- [withIntersections(\_:)](newbodyintersections/withintersections%28__%29.md): Provides access to the intersections with cloth bodies that took place.
- [ClothQueryVolumeEvents.NewBodyIntersections.Intersection](newbodyintersections/intersection.md): An intersection with a cloth body.

### Identifying the query volume

- [queryVolumeEntity](newbodyintersections/queryvolumeentity.md): The entity that has the query volume component that this event originates from.
- [updateCount](newbodyintersections/updatecount.md): The simulation update that this event originates from.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
