> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nwprotocoltcp/options](https://developer.apple.com/documentation/network/nwprotocoltcp/options)

# NWProtocolTCP.Options

**Framework:** Network  
**Kind:** Class  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 12.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

A container of options for configuring how TCP is used on a connection.

## Declaration

```swift
class Options
```

## Topics

### Customizing TCP Options

- [init()](options/init%28%29.md): Initializes a default set of TCP connection options.
- [enableFastOpen](options/enablefastopen.md): A Boolean that enables TCP Fast Open on a connection.
- [maximumSegmentSize](options/maximumsegmentsize.md): TCP’s maximum segment size in bytes.
- [noDelay](options/nodelay.md): A Boolean that disables Nagle’s algorithm for TCP.
- [noOptions](options/nooptions.md): A Boolean that sets TCP into no-options mode.
- [noPush](options/nopush.md): A Boolean that sets TCP into no-push mode.
- [retransmitFinDrop](options/retransmitfindrop.md): A Boolean that causes TCP to drop its connection after not receiving an ACK packet after a FIN packet.
- [disableAckStretching](options/disableackstretching.md): A Boolean that disables TCP acknowledgment stretching.
- [disableECN](options/disableecn.md): A Boolean that disables negotiation of Explicit Congestion Notification markings.

### Configuring Keepalives

- [enableKeepalive](options/enablekeepalive.md): A Boolean that enables TCP keepalives.
- [keepaliveIdle](options/keepaliveidle.md): The number of seconds of idleness that TCP waits before sending keepalive probes.
- [keepaliveCount](options/keepalivecount.md): The number of keepalive probes that TCP sends before terminating the connection.
- [keepaliveInterval](options/keepaliveinterval.md): The number of seconds that TCP waits between sending keepalive probes.

### Setting Timeouts

- [connectionTimeout](options/connectiontimeout.md): The number of seconds that TCP waits before timing out its handshake.
- [connectionDropTime](options/connectiondroptime.md): The timeout, in seconds, for TCP retransmission attempts.
- [persistTimeout](options/persisttimeout.md): The TCP persist timeout, in seconds, as defined by RFC 6429.

## Relationships

### Inherits From

- [NWProtocolOptions](../nwprotocoloptions.md)

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Creating TCP Connections

- [definition](definition.md): The system definition of the Transport Control Protocol.
