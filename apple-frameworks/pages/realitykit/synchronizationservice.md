> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationservice](https://developer.apple.com/documentation/realitykit/synchronizationservice)

# SynchronizationService

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables entity synchronization among a group of local peers.

## Declaration

```swift
protocol SynchronizationService : AnyObject
```

## Topics

### Managing ownership

- [owner(of:)](synchronizationservice/owner%28of_%29.md): Gets the device that owns a given entity, if any.
- [giveOwnership(of:toPeer:)](synchronizationservice/giveownership%28of_topeer_%29.md): Transfers ownership of the given entity to the named network device.

### Finding an entity

- [entity(for:)](synchronizationservice/entity%28for_%29.md): Gets the entity with the given identifier.

### Type Aliases

- [SynchronizationService.Identifier](synchronizationservice/identifier.md): A type that represents a synchronization service identifier.

## Relationships

### Conforming Types

- [MultipeerConnectivityService](multipeerconnectivityservice.md)

## See Also

### Entity ownership synchronization

- [SynchronizationService.Identifier](synchronizationservice/identifier.md): A type that represents a synchronization service identifier.
- [SynchronizationPeerID](synchronizationpeerid.md): A type that represents a peer among a group of networked devices.
- [SynchronizationComponent](synchronizationcomponent.md): A component that synchronizes an entity between processes and networked applications.
- [SynchronizationComponent.OwnershipTransferMode](synchronizationcomponent/ownershiptransfermode-swift.enum.md): Modes of ownership transfer.
- [SynchronizationComponent.OwnershipTransferCompletionResult](synchronizationcomponent/ownershiptransfercompletionresult.md): The result of an ownership transfer request.
- [SynchronizationEvents](synchronizationevents.md): Events associated with network synchronization of scene information.
- [HasSynchronization](hassynchronization.md): An interface that enables an entity to be synchronized between processes and networked applications.
