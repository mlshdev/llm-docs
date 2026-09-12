> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/hassynchronization](https://developer.apple.com/documentation/realitykit/hassynchronization)

# HasSynchronization

**Framework:** RealityKit  
**Kind:** Protocol  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

An interface that enables an entity to be synchronized between processes and networked applications.

## Declaration

```swift
@MainActor @preconcurrency protocol HasSynchronization : Entity
```

<a id="overview"></a>

## Overview

All entities automatically adopt this protocol because the [Entity](entity.md) base class does. This adoption gives all entities a [SynchronizationComponent](synchronizationcomponent.md) instance, and a collection of methods for manipulating the component, that you use to manage ownership of the entity.

## Topics

### Accessing the component

- [synchronization](hassynchronization/synchronization.md): The entity’s synchronization component.

### Managing ownership

- [isOwner](hassynchronization/isowner.md): A Boolean that indicates whether the calling process owns the entity.
- [requestOwnership(timeout:\_:)](hassynchronization/requestownership%28timeout___%29.md): Requests ownership of the entity.

### Making local changes

- [withUnsynchronized(\_:)](hassynchronization/withunsynchronized%28__%29.md): Calls the given closure in a way such that component changes that the closure makes don’t trigger synchronization.

## Relationships

### Inherits From

- [Entity](entity.md)

### Conforming Types

- [AnchorEntity](anchorentity.md)
- [BodyTrackedEntity](bodytrackedentity.md)
- [DirectionalLight](directionallight.md)
- [Entity](entity.md)
- [ModelEntity](modelentity.md)
- [PerspectiveCamera](perspectivecamera.md)
- [PointLight](pointlight.md)
- [SpotLight](spotlight.md)
- [TriggerVolume](triggervolume.md)
- [ViewAttachmentEntity](viewattachmententity.md)

## See Also

### Entity ownership synchronization

- [SynchronizationService](synchronizationservice.md): An interface that enables entity synchronization among a group of local peers.
- [SynchronizationService.Identifier](synchronizationservice/identifier.md): A type that represents a synchronization service identifier.
- [SynchronizationPeerID](synchronizationpeerid.md): A type that represents a peer among a group of networked devices.
- [SynchronizationComponent](synchronizationcomponent.md): A component that synchronizes an entity between processes and networked applications.
- [SynchronizationComponent.OwnershipTransferMode](synchronizationcomponent/ownershiptransfermode-swift.enum.md): Modes of ownership transfer.
- [SynchronizationComponent.OwnershipTransferCompletionResult](synchronizationcomponent/ownershiptransfercompletionresult.md): The result of an ownership transfer request.
- [SynchronizationEvents](synchronizationevents.md): Events associated with network synchronization of scene information.
