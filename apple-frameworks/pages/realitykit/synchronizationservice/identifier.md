> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationservice/identifier](https://developer.apple.com/documentation/realitykit/synchronizationservice/identifier)

# SynchronizationService.Identifier

**Framework:** RealityKit  
**Kind:** Type Alias  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A type that represents a synchronization service identifier.

## Declaration

```swift
typealias Identifier = UInt64
```

## See Also

### Entity ownership synchronization

- [SynchronizationService](../synchronizationservice.md): An interface that enables entity synchronization among a group of local peers.
- [SynchronizationPeerID](../synchronizationpeerid.md): A type that represents a peer among a group of networked devices.
- [SynchronizationComponent](../synchronizationcomponent.md): A component that synchronizes an entity between processes and networked applications.
- [SynchronizationComponent.OwnershipTransferMode](../synchronizationcomponent/ownershiptransfermode-swift.enum.md): Modes of ownership transfer.
- [SynchronizationComponent.OwnershipTransferCompletionResult](../synchronizationcomponent/ownershiptransfercompletionresult.md): The result of an ownership transfer request.
- [SynchronizationEvents](../synchronizationevents.md): Events associated with network synchronization of scene information.
- [HasSynchronization](../hassynchronization.md): An interface that enables an entity to be synchronized between processes and networked applications.
