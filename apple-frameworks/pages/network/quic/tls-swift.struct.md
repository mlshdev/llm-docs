> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/tls-swift.struct](https://developer.apple.com/documentation/network/quic/tls-swift.struct)

# QUIC.TLS

**Framework:** Network  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

The set of TLS options available when using QUIC.

## Declaration

```swift
struct TLS
```

<a id="overview"></a>

## Overview

Used to configure the TLS handshake that runs within the QUIC handshake.

## Topics

### Instance Methods

- [certificateValidator(\_:)](tls-swift.struct/certificatevalidator%28__%29.md): Set a block to provide custom verification of the peer’s credentials during the TLS handshake.
- [cipherSuites(\_:)](tls-swift.struct/ciphersuites%28__%29.md): Set TLS cipher suites to the set of enabled ciphersuites.
- [ciphersuiteGroups(\_:)](tls-swift.struct/ciphersuitegroups%28__%29.md): Set TLS cipher suite groups to the set of enabled ciphersuites.
- [localIdentity(\_:)](tls-swift.struct/localidentity%28__%29.md): Set the local identity TLS uses during the QUIC handshake.
- [peerAuthentication(\_:)](tls-swift.struct/peerauthentication%28__%29.md): Specify a preference for how to authenticate the peer.
