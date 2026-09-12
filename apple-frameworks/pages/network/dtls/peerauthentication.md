> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/peerauthentication](https://developer.apple.com/documentation/network/dtls/peerauthentication)

# DTLS.PeerAuthentication

**Framework:** Network  
**Kind:** Enumeration  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

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

- [DTLS.PeerAuthentication.none](peerauthentication/none.md): Do not authenticate the peer.
- [DTLS.PeerAuthentication.optional](peerauthentication/optional.md): Requests the peer certificate, but if none is provided, proceed with the connection.
- [DTLS.PeerAuthentication.required](peerauthentication/required.md): Always authenticate the peer.

## Relationships

### Conforms To

- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
