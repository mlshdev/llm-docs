> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksession/removepeer(_:)](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksession/removepeer(_:))

# removePeer(\_:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Notify the game that an existing peer disconnected

## Declaration

```swift
func removePeer(_ peer: TabletopNetworkSession<Coordinator>.Peer)
```

## Parameters

- `peer`: The peer that disconnected

## See Also

### Managing network session peers

- [peers](peers.md): The set of peers known by the game
- [addPeer(\_:)](addpeer%28__%29.md): Notify the game that a new peer has connected
- [TabletopNetworkSession.Peer](peer.md)
