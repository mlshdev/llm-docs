> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/dtls/localidentity(_:)](https://developer.apple.com/documentation/network/dtls/localidentity(_:))

# localIdentity(\_:)

**Framework:** Network  
**Kind:** Instance Method  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

Set the local identity DTLS uses during the handshake.

## Declaration

```swift
func localIdentity(_ identity: sec_identity_t) -> DTLS
```

## Parameters

- `identity`: The local identity to be used during the DTLS handshake.
