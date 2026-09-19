> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/dtls/peerauthentication/optional

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
