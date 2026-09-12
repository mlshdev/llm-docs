> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationcomponent/ownershiptransfermode-swift.enum](https://developer.apple.com/documentation/realitykit/synchronizationcomponent/ownershiptransfermode-swift.enum)

# SynchronizationComponent.OwnershipTransferMode

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Modes of ownership transfer.

## Declaration

```swift
enum OwnershipTransferMode
```

## Topics

### Ownership transfer modes

- [SynchronizationComponent.OwnershipTransferMode.autoAccept](ownershiptransfermode-swift.enum/autoaccept.md): Grant ownership requests automatically.
- [SynchronizationComponent.OwnershipTransferMode.manual](ownershiptransfermode-swift.enum/manual.md): Require explicit ownership request confirmation.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Entity ownership synchronization

- [SynchronizationService](../synchronizationservice.md): An interface that enables entity synchronization among a group of local peers.
- [SynchronizationService.Identifier](../synchronizationservice/identifier.md): A type that represents a synchronization service identifier.
- [SynchronizationPeerID](../synchronizationpeerid.md): A type that represents a peer among a group of networked devices.
- [SynchronizationComponent](../synchronizationcomponent.md): A component that synchronizes an entity between processes and networked applications.
- [SynchronizationComponent.OwnershipTransferCompletionResult](ownershiptransfercompletionresult.md): The result of an ownership transfer request.
- [SynchronizationEvents](../synchronizationevents.md): Events associated with network synchronization of scene information.
- [HasSynchronization](../hassynchronization.md): An interface that enables an entity to be synchronized between processes and networked applications.
