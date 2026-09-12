> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/peers(with:)](https://developer.apple.com/documentation/gamekit/gksession/peers(with:))

# peers(with:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Returns a list of peers in the specified connection state.

> No longer supported.

## Declaration

```swift
func peers(with state: GKPeerConnectionState) -> [Any]!
```

## Parameters

- `state`: The connection state to search for. See [GKPeerConnectionState](../gkpeerconnectionstate.md) for possible values.

<a id="return-value"></a>

## Return Value

An array of [NSString](../../foundation/nsstring.md) objects with a [peerID](peerid.md) string for each peer visible to the session that is currently in the specified connection state. If there are no peers in the specified connection state, this method returns `nil`.

## See Also

### Obtaining Information About Other Peers

- [displayName(forPeer:)](displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.

# peersWithConnectionState: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 3.0+ (deprecated in 2.0)

Returns a list of peers in the specified connection state.

> No longer supported.

## Declaration

```objectivec
- (NSArray *) peersWithConnectionState:(GKPeerConnectionState) state;
```

## Parameters

- `state`: The connection state to search for. See [GKPeerConnectionState](../gkpeerconnectionstate.md) for possible values.

<a id="return-value"></a>

## Return Value

An array of [NSString](../../foundation/nsstring.md) objects with a [peerID](peerid.md) string for each peer visible to the session that is currently in the specified connection state. If there are no peers in the specified connection state, this method returns `nil`.

## See Also

### Obtaining Information About Other Peers

- [displayNameForPeer:](displayname%28forpeer_%29.md): Deprecated. Returns a user-readable name for a peer.
