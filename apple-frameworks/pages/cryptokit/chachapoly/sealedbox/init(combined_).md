> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/chachapoly/sealedbox/init(combined:)](https://developer.apple.com/documentation/cryptokit/chachapoly/sealedbox/init(combined:))

# init(combined:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sealed box from the given data.

## Declaration

```swift
init<D>(combined: D) throws where D : DataProtocol
```

## Parameters

- `combined`: The combined bytes of the tag and ciphertext.

## See Also

### Creating the sealed box

- [init(nonce:ciphertext:tag:)](init%28nonce_ciphertext_tag_%29.md): Creates a sealed box from the given tag, nonce, and ciphertext.
