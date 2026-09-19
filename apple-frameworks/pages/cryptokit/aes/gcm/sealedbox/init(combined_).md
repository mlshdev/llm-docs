> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/aes/gcm/sealedbox/init(combined:)

# init(combined:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sealed box from the combined bytes of an authentication tag, nonce, and encrypted data.

## Declaration

```swift
init<D>(combined: D) throws where D : DataProtocol
```

## Parameters

- `combined`: The combined bytes of the nonce, encrypted data, and authentication tag.

## See Also

### Creating the sealed box

- [init(nonce:ciphertext:tag:)](init%28nonce_ciphertext_tag_%29.md): Creates a sealed box from the given tag, nonce, and ciphertext.
