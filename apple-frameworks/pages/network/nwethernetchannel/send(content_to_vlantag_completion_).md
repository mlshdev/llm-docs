> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/nwethernetchannel/send(content:to:vlantag:completion:)

# send(content:to:vlanTag:completion:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** macOS 10.15+

Sends a single Ethernet frame over a channel to a specific Ethernet address.

## Declaration

```swift
@preconcurrency final func send(content: Data, to remoteAddress: NWEthernetChannel.EthernetAddress, vlanTag: UInt16, completion: @escaping @Sendable (NWError?) -> Void)
```

## See Also

### Sending and Receiving Ethernet Frames

- [receiveHandler](receivehandler.md): A handler that delivers inbound Ethernet frames.
- [NWEthernetChannel.EthernetAddress](ethernetaddress.md): A 48-bit Ethernet address.
