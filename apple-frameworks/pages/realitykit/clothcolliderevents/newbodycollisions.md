> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/clothcolliderevents/newbodycollisions](https://developer.apple.com/documentation/realitykit/clothcolliderevents/newbodycollisions)

# ClothColliderEvents.NewBodyCollisions

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · visionOS 27.0+

An event type that a cloth collider publishes (before simulation update) when cloth bodies collide with it.

## Declaration

```swift
struct NewBodyCollisions
```

<a id="overview"></a>

## Overview

This event should be treated as having a non-escapable lifetime. Some of its data is no longer available after its lifetime has ended.

## Topics

### Accessing collision data

- [withCollisions(\_:)](newbodycollisions/withcollisions%28__%29.md): Provides access to the collisions with cloth bodies that took place.
- [ClothColliderEvents.NewBodyCollisions.Collision](newbodycollisions/collision.md): A collision with a cloth body.

### Identifying the event

- [colliderEntity](newbodycollisions/colliderentity.md): The entity that has the collider component that this event originates from.
- [updateCount](newbodycollisions/updatecount.md): The simulation update that this event originates from.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
