> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksession/peers](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksession/peers)

# peers

**Framework:** TabletopKit  
**Kind:** Instance Property  
**Availability:** visionOS 2.0+

The set of peers known by the game

## Declaration

```swift
var peers: Set<TabletopNetworkSession<Coordinator>.Peer> { get }
```

## See Also

### Managing network session peers

- [addPeer(\_:)](addpeer%28__%29.md): Notify the game that a new peer has connected
- [removePeer(\_:)](removepeer%28__%29.md): Notify the game that an existing peer disconnected
- [TabletopNetworkSession.Peer](peer.md)
