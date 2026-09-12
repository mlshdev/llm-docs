> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/synchronizationservice/giveownership(of:topeer:)](https://developer.apple.com/documentation/realitykit/synchronizationservice/giveownership(of:topeer:))

# giveOwnership(of:toPeer:)

**Framework:** RealityKit  
**Kind:** Instance Method  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 26.0+ · visionOS

Transfers ownership of the given entity to the named network device.

## Declaration

```swift
@discardableResult @MainActor @preconcurrency func giveOwnership(of entity: Entity, toPeer: any SynchronizationPeerID) -> Bool
```

## Parameters

- `entity`: The entity whose ownership is transferred.
- `toPeer`: The networked device receiving ownership.

<a id="return-value"></a>

## Return Value

A Boolean that’s `true` if the ownership transfer succeeds.

## See Also

### Managing ownership

- [owner(of:)](owner%28of_%29.md): Gets the device that owns a given entity, if any.
