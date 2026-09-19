> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwethernetchannel/init(on:ethertype:)

# init(on:etherType:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** macOS 10.15+

Initializes an Ethernet channel on a specific interface with a custom Ethernet type.

## Declaration

```swift
init(on interface: NWInterface, etherType: UInt16)
```

## Parameters

- `interface`: The interface on which to send and receive Ethernet frames.
- `etherType`: The custom Ethernet frame type to register for this channel, in host-byte order.

## See Also

### Managing Ethernet Channels

- [start(queue:)](start%28queue_%29.md): Starts the process of registering the channel, and sets the queue on which all channel events are delivered.
- [cancel()](cancel%28%29.md): Unregisters the channel from the interface.
