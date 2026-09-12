> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls](https://developer.apple.com/documentation/network/tls)

# TLS

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The system definition of the Transport Layer Security (TLS) protocol.

## Declaration

```swift
struct TLS
```

<a id="overview"></a>

## Overview

Supports sending and receiving encrypted byte streams.

## Topics

### Initializers

- [init()](tls/init%28%29.md): Create a TLS protocol to use in a protocol stack.
- [init(\_:)](tls/init%28__%29.md): Create a TLS protocol to use in a protocol stack.

### Instance Methods

- [applicationProtocols(\_:)](tls/applicationprotocols%28__%29.md): Set application protocols supported by clients of this protocol.
- [certificateValidator(\_:)](tls/certificatevalidator%28__%29.md): Set a closure to provide custom verification of the peer’s credentials during the TLS handshake.
- [cipherSuiteGroups(\_:)](tls/ciphersuitegroups%28__%29.md): Set TLS ciphersuite groups to the set of enabled ciphersuites.
- [cipherSuites(\_:)](tls/ciphersuites%28__%29.md): Set TLS ciphersuites to the set of enabled ciphersuites.
- [earlyDataEnabled(\_:)](tls/earlydataenabled%28__%29.md): Enable early data (0-RTT) for TLS.
- [localIdentity(\_:)](tls/localidentity%28__%29.md): Set the local identity TLS uses during the handshake.
- [peerAuthentication(\_:)](tls/peerauthentication%28__%29.md): Specify a preference for how to authenticate the peer.
- [ticketsEnabled(\_:)](tls/ticketsenabled%28__%29.md): Enable TLS session ticket support.
- [version(min:max:)](tls/version%28min_max_%29.md)

### Enumerations

- [TLS.PeerAuthentication](tls/peerauthentication.md): PeerAuthentication specifies how to authenticate the peer end of the connection.

## Relationships

### Conforms To

- [NetworkProtocolOptions](networkprotocoloptions.md)
- [OneToOneProtocol](onetooneprotocol.md)
- [StreamProtocol](streamprotocol.md)
