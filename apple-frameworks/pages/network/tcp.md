> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tcp](https://developer.apple.com/documentation/network/tcp)

# TCP

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the Transmission Control Protocol (TCP).

## Declaration

```swift
struct TCP
```

<a id="overview"></a>

## Overview

Supports sending and receiving byte streams.

## Topics

### Initializers

- [init()](tcp/init%28%29.md): Create an instance of TCP.
- [init(\_:)](tcp/init%28__%29.md): Create an instance of TCP.

### Instance Methods

- [ackStretchingDisabled(\_:)](tcp/ackstretchingdisabled%28__%29.md): Disable ACK stretching.
- [connectionTimeout(\_:)](tcp/connectiontimeout%28__%29.md): Set the timeout for TCP connection establishment.
- [ecnDisabled(\_:)](tcp/ecndisabled%28__%29.md): Disable ECN negotiation.
- [fastOpenAllowed(\_:)](tcp/fastopenallowed%28__%29.md): Configure TCP to enable TCP Fast Open (TFO).
- [keepalive(idleTimeInSeconds:count:intervalInSeconds:)](tcp/keepalive%28idletimeinseconds_count_intervalinseconds_%29.md): Enable TCP keepalives.
- [maximumSegmentSize(\_:)](tcp/maximumsegmentsize%28__%29.md): Set maximum segment size.
- [noDelay(\_:)](tcp/nodelay%28__%29.md): Disable Nagle’s algorithm.
- [noOptions(\_:)](tcp/nooptions%28__%29.md): Enable no-options mode.
- [noPush(\_:)](tcp/nopush%28__%29.md): Enable no-push mode.
- [persistTimeout(\_:)](tcp/persisttimeout%28__%29.md): Set the TCP persist timeout.
- [retransmitConnectionDropTime(\_:)](tcp/retransmitconnectiondroptime%28__%29.md): Set the TCP retransmission attempt timeout.
- [retransmitFinDrop(\_:)](tcp/retransmitfindrop%28__%29.md): Configure TCP to drop the connection after a FIN does not receive an ACK.

## Relationships

### Conforms To

- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
- [StreamProtocol](streamprotocol.md)
