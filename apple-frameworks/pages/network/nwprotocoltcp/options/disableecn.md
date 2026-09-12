> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options/disableecn](https://developer.apple.com/documentation/network/nwprotocoltcp/options/disableecn)

# disableECN

**Framework:** Network  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A Boolean that disables negotiation of Explicit Congestion Notification markings.

## Declaration

```swift
var disableECN: Bool { get set }
```

## See Also

### Customizing TCP Options

- [init()](init%28%29.md): Initializes a default set of TCP connection options.
- [enableFastOpen](enablefastopen.md): A Boolean that enables TCP Fast Open on a connection.
- [maximumSegmentSize](maximumsegmentsize.md): TCP’s maximum segment size in bytes.
- [noDelay](nodelay.md): A Boolean that disables Nagle’s algorithm for TCP.
- [noOptions](nooptions.md): A Boolean that sets TCP into no-options mode.
- [noPush](nopush.md): A Boolean that sets TCP into no-push mode.
- [retransmitFinDrop](retransmitfindrop.md): A Boolean that causes TCP to drop its connection after not receiving an ACK packet after a FIN packet.
- [disableAckStretching](disableackstretching.md): A Boolean that disables TCP acknowledgment stretching.
