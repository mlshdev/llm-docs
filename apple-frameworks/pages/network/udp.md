> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/udp](https://developer.apple.com/documentation/network/udp)

# UDP

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the User Datagram Protocol (UDP).

## Declaration

```swift
struct UDP
```

<a id="overview"></a>

## Overview

UDP supports sending and receiving datagrams.

## Topics

### Initializers

- [init()](udp/init%28%29.md)
- [init(\_:)](udp/init%28__%29.md)

### Instance Methods

- [noChecksumPreferred(\_:)](udp/nochecksumpreferred%28__%29.md): Skip computing checksums when sending UDP packets.

## Relationships

### Conforms To

- [DatagramProtocol](datagramprotocol.md)
- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
