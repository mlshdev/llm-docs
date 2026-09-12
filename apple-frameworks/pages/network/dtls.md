> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls](https://developer.apple.com/documentation/network/dtls)

# DTLS

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The system definition of the Datagram Transport Layer Security (DTLS) protocol.

## Declaration

```swift
struct DTLS
```

<a id="overview"></a>

## Overview

Supports sending and receiving encrypted byte datagrams.

## Topics

### Initializers

- [init()](dtls/init%28%29.md): Create a DTLS protocol to use in a protocol stack.
- [init(\_:)](dtls/init%28__%29.md): Create a DTLS protocol to use in a protocol stack.

### Instance Methods

- [applicationProtocols(\_:)](dtls/applicationprotocols%28__%29.md): Set application protocols supported by clients of this protocol.
- [certificateValidator(\_:)](dtls/certificatevalidator%28__%29.md): Set a closure to provide custom verification of the peer’s credentials during the DTLS handshake.
- [cipherSuiteGroups(\_:)](dtls/ciphersuitegroups%28__%29.md): Set DTLS ciphersuite groups to the set of enabled ciphersuites.
- [cipherSuites(\_:)](dtls/ciphersuites%28__%29.md): Set DTLS ciphersuites to the set of enabled ciphersuites.
- [earlyDataEnabled(\_:)](dtls/earlydataenabled%28__%29.md): Enable early data (0-RTT) for DTLS.
- [localIdentity(\_:)](dtls/localidentity%28__%29.md): Set the local identity DTLS uses during the handshake.
- [peerAuthentication(\_:)](dtls/peerauthentication%28__%29.md): Specify a preference for how to authenticate the peer.
- [ticketsEnabled(\_:)](dtls/ticketsenabled%28__%29.md): Enable DTLS session ticket support.
- [version(min:max:)](dtls/version%28min_max_%29.md)

### Enumerations

- [DTLS.PeerAuthentication](dtls/peerauthentication.md): PeerAuthentication specifies how to authenticate the peer end of the connection.

## Relationships

### Conforms To

- [DatagramProtocol](datagramprotocol.md)
- [MessageProtocol](messageprotocol.md)
- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
