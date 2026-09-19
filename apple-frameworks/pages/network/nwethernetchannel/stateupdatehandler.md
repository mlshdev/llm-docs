> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwethernetchannel/stateupdatehandler

# stateUpdateHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A handler that delivers channel state updates.

## Declaration

```swift
@preconcurrency final var stateUpdateHandler: (@Sendable (NWEthernetChannel.State) -> Void)? { get set }
```

## See Also

### Handling State Updates

- [state](state-swift.property.md): The current state of the channel.
- [NWEthernetChannel.State](state-swift.enum.md): States indicating whether an Ethernet channel is able to send and receive frames.
