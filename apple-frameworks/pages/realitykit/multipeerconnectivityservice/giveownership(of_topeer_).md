> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/multipeerconnectivityservice/giveownership(of:topeer:)](https://developer.apple.com/documentation/realitykit/multipeerconnectivityservice/giveownership(of:topeer:))

# giveOwnership(of:toPeer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+

Transfers ownership of the given entity to the named network device.

## Declaration

```swift
@MainActor @preconcurrency func giveOwnership(of entity: Entity, toPeer peer: any SynchronizationPeerID) -> Bool
```

## Parameters

- `entity`: The entity whose ownership is transferred.
- `peer`: The networked device receiving ownership.

<a id="return-value"></a>

## Return Value

A Boolean that’s `true` if the ownership transfer succeeds.

## See Also

### Managing ownership

- [owner(of:)](owner%28of_%29.md): Gets the device that owns a given entity.
