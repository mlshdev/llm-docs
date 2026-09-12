> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/quic/tls-swift.struct/certificatevalidator(_:)](https://developer.apple.com/documentation/network/quic/tls-swift.struct/certificatevalidator(_:))

# certificateValidator(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set a block to provide custom verification of the peer’s credentials during the TLS handshake.

## Declaration

```swift
func certificateValidator(_ handler: @escaping @isolated(any) @Sendable (sec_protocol_metadata_t, sec_trust_t) async -> Bool) -> QUIC
```

<a id="discussion"></a>

## Discussion

This block may be called multiple times for each connection. It should return `true` if the credentials should be trusted and the handshake should proceed, `false` otherwise.

> **Warning**

> Most apps should not override the default system handling, as doing so can result in insecure network connections and major security vulnerabilities.
