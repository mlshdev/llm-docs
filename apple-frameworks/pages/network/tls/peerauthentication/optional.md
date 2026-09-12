> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/tls/peerauthentication/optional](https://developer.apple.com/documentation/network/tls/peerauthentication/optional)

# TLS.PeerAuthentication.optional

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Requests the peer certificate, but if none is provided, proceed with the connection.

## Declaration

```swift
case optional
```

<a id="discussion"></a>

## Discussion

This is for servers. Clients will ignore this option.
