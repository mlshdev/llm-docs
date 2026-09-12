> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/aes/gcm/sealedbox/init(nonce:ciphertext:tag:)](https://developer.apple.com/documentation/cryptokit/aes/gcm/sealedbox/init(nonce:ciphertext:tag:))

# init(nonce:ciphertext:tag:)

**Framework:** Apple CryptoKit  
**Kind:** Initializer  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

Creates a sealed box from the given tag, nonce, and ciphertext.

## Declaration

```swift
init<C, T>(nonce: AES.GCM.Nonce, ciphertext: C, tag: T) throws where C : DataProtocol, T : DataProtocol
```

## Parameters

- `nonce`: The nonce.
- `ciphertext`: The encrypted data.
- `tag`: The authentication tag.

## See Also

### Creating the sealed box

- [init(combined:)](init%28combined_%29.md): Creates a sealed box from the combined bytes of an authentication tag, nonce, and encrypted data.
