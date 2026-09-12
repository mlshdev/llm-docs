> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/realitykit/networkcompatibilitytoken/compatibility](https://developer.apple.com/documentation/realitykit/networkcompatibilitytoken/compatibility)

# NetworkCompatibilityToken.Compatibility

**Framework:** RealityKit  
**Kind:** Enumeration  
**Availability:** iOS 13.4+ · iPadOS 13.4+ · Mac Catalyst 13.4+ · macOS 10.15.4+ · visionOS

Indicates whether two devices running RealityKit are compatible and able to connect and sync scenes.

## Declaration

```swift
enum Compatibility
```

## Topics

### Compatibility indicators

- [NetworkCompatibilityToken.Compatibility.compatible](compatibility/compatible.md): An indication that the compared devices are running compatible versions of RealityKit.
- [NetworkCompatibilityToken.Compatibility.sessionProtocolVersionMismatch](compatibility/sessionprotocolversionmismatch.md): An indication that two peers running incompatible versions of RealityKit can’t sync.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)

## See Also

### Multipeer synchronization

- [Loading remote assets in multiplayer apps](../loading-remote-assets.md): Ensure assets load on all connected peers before using them.
- [MultipeerConnectivityService](../multipeerconnectivityservice.md): A service that provides scene synchronization among all peers in a multipeer connectivity session.
- [NetworkCompatibilityToken](../networkcompatibilitytoken.md): An opaque token used to check the networking compatibility between two peers in a multipeer connection.
- [TransientComponent](../transientcomponent.md): An interface for components that aren’t saved to file or cloned.
