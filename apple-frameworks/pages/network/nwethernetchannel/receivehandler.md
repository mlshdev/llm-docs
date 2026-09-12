> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwethernetchannel/receivehandler](https://developer.apple.com/documentation/network/nwethernetchannel/receivehandler)

# receiveHandler

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** macOS 10.15+

A handler that delivers inbound Ethernet frames.

## Declaration

```swift
@preconcurrency final var receiveHandler: (@Sendable (Data, UInt16, NWEthernetChannel.EthernetAddress, NWEthernetChannel.EthernetAddress) -> Void)? { get set }
```

<a id="Discussion"></a>

## Discussion

The receive handler only needs to be set once, and will be invoked for each received Ethernet frame.

## See Also

### Sending and Receiving Ethernet Frames

- [send(content:to:vlanTag:completion:)](send%28content_to_vlantag_completion_%29.md): Sends a single Ethernet frame over a channel to a specific Ethernet address.
- [NWEthernetChannel.EthernetAddress](ethernetaddress.md): A 48-bit Ethernet address.
