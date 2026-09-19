> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/synchronizationcomponent/ownershiptransfermode-swift.enum/manual

# SynchronizationComponent.OwnershipTransferMode.manual

**Framework:** RealityKit  
**Kind:** Case  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Require explicit ownership request confirmation.

## Declaration

```swift
case manual
```

<a id="discussion"></a>

## Discussion

Handle the [SynchronizationEvents.OwnershipRequest](../../synchronizationevents/ownershiprequest.md) event to find out when a peer requests ownership of an entity, and call the method stored in the requests’s [accept](../../synchronizationevents/ownershiprequest/accept.md) property to confirm the transfer of ownership.

## See Also

### Ownership transfer modes

- [SynchronizationComponent.OwnershipTransferMode.autoAccept](autoaccept.md): Grant ownership requests automatically.
