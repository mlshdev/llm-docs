> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationevents/ownershiprequest/accept](https://developer.apple.com/documentation/realitykit/synchronizationevents/ownershiprequest/accept)

# accept

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The callback function that the current owner calls to grant ownership to the requesting peer.

## Declaration

```swift
let accept: () -> Void
```

<a id="discussion"></a>

## Discussion

If an entity’s [ownershipTransferMode](../../synchronizationcomponent/ownershiptransfermode-swift.property.md) property is set to [SynchronizationComponent.OwnershipTransferMode.autoAccept](../../synchronizationcomponent/ownershiptransfermode-swift.enum/autoaccept.md), the entity automatically grants ownership to any other entity that requests it.

In case you configure an entity to have a transfer mode of [SynchronizationComponent.OwnershipTransferMode.manual](../../synchronizationcomponent/ownershiptransfermode-swift.enum/manual.md), then when you receive an [SynchronizationEvents.OwnershipRequest](../ownershiprequest.md) event, call the [accept](accept.md) method to complete the transfer of ownership.
