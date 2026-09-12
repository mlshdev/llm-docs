> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionevents/began](https://developer.apple.com/documentation/realitykit/collisionevents/began)

# CollisionEvents.Began

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An event raised when two objects collide.

## Declaration

```swift
struct Began
```

## Topics

### Getting the involved entities

- [entityA](began/entitya.md): The first entity involved in the collision.
- [entityB](began/entityb.md): The second entity involved in the collision.

### Characterizing the collision

- [impulse](began/impulse.md): The total impulse in this collision pair obtained by adding up all the individual impulses applied at each contact point.
- [position](began/position.md): A position representing the estimated point of contact.

### Instance Properties

- [contacts](began/contacts.md): All contacts between the collision pair. Empty if all contact information is not requested.
- [impulseDirection](began/impulsedirection.md): The direction of the total impulse in scene coordinate space.
- [penetrationDistance](began/penetrationdistance.md): The estimated distance of overlap between the two colliding entities in scene coordinate space.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting collisions

- [CollisionEvents.Updated](updated.md): An event raised on every frame when two objects are in contact.
- [CollisionEvents.Ended](ended.md): An event raised when two objects, previously in contact, separate.
