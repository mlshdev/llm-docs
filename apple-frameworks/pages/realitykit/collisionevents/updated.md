> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionevents/updated](https://developer.apple.com/documentation/realitykit/collisionevents/updated)

# CollisionEvents.Updated

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An event raised on every frame when two objects are in contact.

## Declaration

```swift
struct Updated
```

## Topics

### Getting the involved entities

- [entityA](updated/entitya.md): The first entity involved in the collision.
- [entityB](updated/entityb.md): The second entity involved in the collision.

### Characterizing the collision

- [impulse](updated/impulse.md): The total impulse in this collision pair obtained by adding up all the individual impulses applied at each contact point
- [position](updated/position.md): A position representing the estimated point of contact.

### Instance Properties

- [contacts](updated/contacts.md): All contacts between the collision pair. Empty if all contact information is not requested.
- [impulseDirection](updated/impulsedirection.md): The direction of the total impulse in scene coordinate space.
- [penetrationDistance](updated/penetrationdistance.md): The estimated distance of overlap between the two colliding entities in scene coordinate space.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting collisions

- [CollisionEvents.Began](began.md): An event raised when two objects collide.
- [CollisionEvents.Ended](ended.md): An event raised when two objects, previously in contact, separate.
