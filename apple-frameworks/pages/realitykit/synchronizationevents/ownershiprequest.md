> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationevents/ownershiprequest](https://developer.apple.com/documentation/realitykit/synchronizationevents/ownershiprequest)

# SynchronizationEvents.OwnershipRequest

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The event raised when a network peer wants to gain ownership of an entity.

## Declaration

```swift
struct OwnershipRequest
```

## Topics

### Getting the involved parties

- [entity](ownershiprequest/entity.md): The entity over which the network peer would like to gain ownership.
- [requester](ownershiprequest/requester.md): The network peer requesting ownership.

### Accepting the request

- [accept](ownershiprequest/accept.md): The callback function that the current owner calls to grant ownership to the requesting peer.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting ownership updates

- [SynchronizationEvents.OwnershipChanged](ownershipchanged.md): The event raised when ownership of an entity changes.
