> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/synchronizationevents/ownershipchanged

# SynchronizationEvents.OwnershipChanged

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The event raised when ownership of an entity changes.

## Declaration

```swift
struct OwnershipChanged
```

## Topics

### Getting the involved parties

- [entity](ownershipchanged/entity.md): The entity for which ownership is changed.
- [newOwner](ownershipchanged/newowner.md): The new owner of the entity.

## Relationships

### Conforms To

- [Event](../event.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Detecting ownership updates

- [SynchronizationEvents.OwnershipRequest](ownershiprequest.md): The event raised when a network peer wants to gain ownership of an entity.
