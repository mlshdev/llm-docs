> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/network/quic/tls-swift.struct/localidentity(_:)

# localIdentity(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

Set the local identity TLS uses during the QUIC handshake.

## Declaration

```swift
func localIdentity(_ identity: sec_identity_t) -> QUIC
```

## Parameters

- `identity`: The local identity to be used during the QUIC handshake.
