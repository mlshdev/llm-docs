> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/peerauthentication/optional](https://developer.apple.com/documentation/network/dtls/peerauthentication/optional)

# DTLS.PeerAuthentication.optional

**Framework:** Network  
**Kind:** Case  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Requests the peer certificate, but if none is provided, proceed with the connection.

## Declaration

```swift
case optional
```

<a id="discussion"></a>

## Discussion

This is for servers. Clients will ignore this option.
