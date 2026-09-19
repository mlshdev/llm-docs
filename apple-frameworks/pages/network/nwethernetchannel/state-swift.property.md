> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwethernetchannel/state-swift.property

# state

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

The current state of the channel.

## Declaration

```swift
final var state: NWEthernetChannel.State { get }
```

## See Also

### Handling State Updates

- [NWEthernetChannel.State](state-swift.enum.md): States indicating whether an Ethernet channel is able to send and receive frames.
- [stateUpdateHandler](stateupdatehandler.md): A handler that delivers channel state updates.
