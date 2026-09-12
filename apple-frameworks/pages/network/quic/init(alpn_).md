> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/init(alpn:)](https://developer.apple.com/documentation/network/quic/init(alpn:))

# init(alpn:)

**Framework:** Network  
**Kind:** Initializer  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Create a QUIC protocol for use in a protocol stack.

## Declaration

```swift
init(alpn: [String])
```

## Parameters

- `alpn`: An array of application layer protocol tokens to use for negotiation during the QUIC handshake.

<a id="discussion"></a>

## Discussion

The application layer protocol negotiation (ALPN) tokens describe the application protocol in use above QUIC.
