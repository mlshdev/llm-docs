> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tabletopkit/tabletopnetworksessioncoordinator/sendmessage(_:to:completion:)

# sendMessage(\_:to:completion:)

**Framework:** TabletopKit  
**Kind:** Instance Method  
**Availability:** visionOS 2.0+

## Declaration

```swift
func sendMessage(_ message: Data, to: Set<Self.Peer>, completion: @escaping (TabletopSendMessageResult) -> Void)
```

## See Also

### Sending messages between peers

- [sendMessageUnreliably(\_:to:completion:)](sendmessageunreliably%28__to_completion_%29.md)
