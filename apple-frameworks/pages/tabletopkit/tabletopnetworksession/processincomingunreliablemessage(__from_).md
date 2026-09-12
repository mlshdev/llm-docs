> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/tabletopkit/tabletopnetworksession/processincomingunreliablemessage(_:from:)](https://developer.apple.com/documentation/tabletopkit/tabletopnetworksession/processincomingunreliablemessage(_:from:))

# processIncomingUnreliableMessage(\_:from:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 26.0+

Pass incoming messages from the unreliable channel to the game.

## Declaration

```swift
func processIncomingUnreliableMessage(_ message: Data, from sender: TabletopNetworkSession<Coordinator>.Peer)
```

## Parameters

- `message`: The incoming message
- `sender`: The peer that sent the message

## See Also

### Receiving messages from peers

- [processIncomingMessage(\_:from:)](processincomingmessage%28__from_%29.md): Pass incoming messages from the reliable channel to the game.
