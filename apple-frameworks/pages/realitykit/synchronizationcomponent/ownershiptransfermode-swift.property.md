> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/realitykit/synchronizationcomponent/ownershiptransfermode-swift.property

# ownershipTransferMode

**Framework:** RealityKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

The entity’s transfer ownership mode.

## Declaration

```swift
var ownershipTransferMode: SynchronizationComponent.OwnershipTransferMode
```

<a id="discussion"></a>

## Discussion

By default, the transfer mode is [SynchronizationComponent.OwnershipTransferMode.autoAccept](ownershiptransfermode-swift.enum/autoaccept.md). You can set it to [SynchronizationComponent.OwnershipTransferMode.manual](ownershiptransfermode-swift.enum/manual.md) to require explicit confirmation of the request by your app.

## See Also

### Managing ownership

- [isOwner](isowner.md): A Boolean that indicates whether the calling process owns the entity.
