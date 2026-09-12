> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/peerauthentication](https://developer.apple.com/documentation/network/tls/peerauthentication)

# TLS.PeerAuthentication

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

PeerAuthentication specifies how to authenticate the peer end of the connection.

## Declaration

```swift
enum PeerAuthentication
```

<a id="overview"></a>

## Overview

For clients, the default is `none`. For servers, the default is `required`.

## Topics

### Enumeration Cases

- [TLS.PeerAuthentication.none](peerauthentication/none.md): Do not authenticate the peer.
- [TLS.PeerAuthentication.optional](peerauthentication/optional.md): Requests the peer certificate, but if none is provided, proceed with the connection.
- [TLS.PeerAuthentication.required](peerauthentication/required.md): Always authenticate the peer.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
