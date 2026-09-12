> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice/owner(of:)](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice/owner(of:))

# owner(of:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

Gets the device that owns a given entity.

## Declaration

```swift
@MainActor @preconcurrency func owner(of entity: Entity) -> (any SynchronizationPeerID)?
```

## Parameters

- `entity`: The entity for which you want the owner.

<a id="return-value"></a>

## Return Value

The networked device that owns the entity.

## See Also

### Managing ownership

- [giveOwnership(of:toPeer:)](giveownership%28of_topeer_%29.md): Transfers ownership of the given entity to the named network device.
