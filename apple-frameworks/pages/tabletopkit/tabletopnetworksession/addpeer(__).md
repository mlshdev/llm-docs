> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksession/addpeer(_:)](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksession/addpeer(_:))

# addPeer(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Notify the game that a new peer has connected

## Declaration

```swift
func addPeer(_ peer: TabletopNetworkSession<Coordinator>.Peer)
```

## Parameters

- `peer`: The new peer

## See Also

### Managing network session peers

- [peers](peers.md): The set of peers known by the game
- [removePeer(\_:)](removepeer%28__%29.md): Notify the game that an existing peer disconnected
- [TabletopNetworkSession.Peer](peer.md)
