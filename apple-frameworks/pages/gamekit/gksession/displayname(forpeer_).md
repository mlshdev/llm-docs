> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gamekit/gksession/displayname(forpeer:)](https://developer.apple.com/documentation/gamekit/gksession/displayname(forpeer:))

# displayName(forPeer:) (Swift)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 3.0+ (deprecated in 7.0) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a user-readable name for a peer.

## Declaration

```swift
func displayName(forPeer peerID: String!) -> String!
```

## Parameters

- `peerID`: A string that uniquely identifies a peer.

<a id="return-value"></a>

## Return Value

The name for the peer, or `nil` if `peerID` is not associated with a visible peer.

<a id="Discussion"></a>

## Discussion

The display name is used to populate your user interface with the names of other peers visible to the session.

## See Also

### Related Documentation

- [displayName](displayname.md): Deprecated. The name of the user.

### Obtaining Information About Other Peers

- [peers(with:)](peers%28with_%29.md): Deprecated. Returns a list of peers in the specified connection state.

# displayNameForPeer: (Objective-C)

**Framework:** GameKit  
**Kind:** Instance Method  
**Availability:** iOS 3.0+ (deprecated in 7.0) · iPadOS 3.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.8+ (deprecated in 10.10) · visionOS 1.0+ (deprecated in 1.0) · watchOS 2.0+ (deprecated in 2.0)

Returns a user-readable name for a peer.

## Declaration

```objectivec
- (NSString *) displayNameForPeer:(NSString *) peerID;
```

## Parameters

- `peerID`: A string that uniquely identifies a peer.

<a id="return-value"></a>

## Return Value

The name for the peer, or `nil` if `peerID` is not associated with a visible peer.

<a id="Discussion"></a>

## Discussion

The display name is used to populate your user interface with the names of other peers visible to the session.

## See Also

### Related Documentation

- [displayName](displayname.md): Deprecated. The name of the user.

### Obtaining Information About Other Peers

- [peersWithConnectionState:](peers%28with_%29.md): Deprecated. Returns a list of peers in the specified connection state.
