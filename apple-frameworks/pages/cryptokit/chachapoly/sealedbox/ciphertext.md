> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/chachapoly/sealedbox/ciphertext

# ciphertext

**Framework:** Apple CryptoKit  
**Kind:** Instance Property  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

The encrypted data.

## Declaration

```swift
var ciphertext: Data { get }
```

## See Also

### Inspecting the component elements

- [nonce](nonce.md): The nonce used to encrypt the data.
- [tag](tag.md): An authentication tag.
