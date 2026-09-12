> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/collisionevents/ended](https://developer.apple.com/documentation/realitykit/collisionevents/ended)

# CollisionEvents.Ended

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An event raised when two objects, previously in contact, separate.

## Declaration

```swift
struct Ended
```

## Topics

### Getting the involved entities

- [entityA](ended/entitya.md): The first entity involved in the collision.
- [entityB](ended/entityb.md): The second entity involved in the collision.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting collisions

- [CollisionEvents.Began](began.md): An event raised when two objects collide.
- [CollisionEvents.Updated](updated.md): An event raised on every frame when two objects are in contact.
