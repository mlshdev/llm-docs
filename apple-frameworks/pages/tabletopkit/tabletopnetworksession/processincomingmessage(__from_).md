> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksession/processincomingmessage(_:from:)](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksession/processincomingmessage(_:from:))

# processIncomingMessage(\_:from:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

Pass incoming messages from the reliable channel to the game.

## Declaration

```swift
func processIncomingMessage(_ message: Data, from sender: TabletopNetworkSession<Coordinator>.Peer)
```

## Parameters

- `message`: The incoming message
- `sender`: The peer that sent the message

## See Also

### Receiving messages from peers

- [processIncomingUnreliableMessage(\_:from:)](processincomingunreliablemessage%28__from_%29.md): Pass incoming messages from the unreliable channel to the game.
