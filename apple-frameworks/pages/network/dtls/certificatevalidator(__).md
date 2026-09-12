> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/certificatevalidator(_:)](https://developer.apple.com/documentation/network/dtls/certificatevalidator(_:))

# certificateValidator(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set a closure to provide custom verification of the peer’s credentials during the DTLS handshake.

## Declaration

```swift
func certificateValidator(_ handler: @escaping @isolated(any) @Sendable (sec_protocol_metadata_t, sec_trust_t) async -> Bool) -> DTLS
```

<a id="discussion"></a>

## Discussion

This closure may be called multiple times for each connection. It should return `true` if the credentials should be trusted and the handshake should proceed, `false` otherwise.

> **Warning**

> Most apps should not override the default system handling, as doing so can result in insecure network connections and major security vulnerabilities.
