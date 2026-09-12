> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationservice/owner(of:)](https://developer.apple.com/documentation/realitykit/synchronizationservice/owner(of:))

# owner(of:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Gets the device that owns a given entity, if any.

## Declaration

```swift
@MainActor @preconcurrency func owner(of entity: Entity) -> (any SynchronizationPeerID)?
```

## Parameters

- `entity`: The entity for which you want the owner.

<a id="return-value"></a>

## Return Value

The networked device that owns the entity. The value is `nil` if the entity isn’t synchronized or is owned locally.

## See Also

### Managing ownership

- [giveOwnership(of:toPeer:)](giveownership%28of_topeer_%29.md): Transfers ownership of the given entity to the named network device.
