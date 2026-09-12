> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationcomponent](https://developer.apple.com/documentation/realitykit/synchronizationcomponent)

# SynchronizationComponent

**Framework:** RealityKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

A component that synchronizes an entity between processes and networked applications.

## Declaration

```swift
struct SynchronizationComponent
```

<a id="overview"></a>

## Overview

An entity acquires a [SynchronizationComponent](synchronizationcomponent.md) instance by adopting the [HasSynchronization](hassynchronization.md) protocol. All entities have this component because the [Entity](entity.md) base class adopts the protocol.

## Topics

### Creating a synchronization component

- [init()](synchronizationcomponent/init%28%29.md): Creates a synchronization component.

### Identifying a synchronization component

- [identifier](synchronizationcomponent/identifier.md): A unique identifier of an entity within a network session.

### Managing ownership

- [isOwner](synchronizationcomponent/isowner.md): A Boolean that indicates whether the calling process owns the entity.
- [ownershipTransferMode](synchronizationcomponent/ownershiptransfermode-swift.property.md): The entity’s transfer ownership mode.

### Operators

- [==(\_:\_:)](synchronizationcomponent/==%28____%29.md): Indicates whether two synchronization components are equal.

### Enumerations

- [SynchronizationComponent.OwnershipTransferCompletionResult](synchronizationcomponent/ownershiptransfercompletionresult.md): The result of an ownership transfer request.
- [SynchronizationComponent.OwnershipTransferMode](synchronizationcomponent/ownershiptransfermode-swift.enum.md): Modes of ownership transfer.

## Relationships

### Conforms To

- [Component](component.md)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
