> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/cryptokit/xwingmlkem768x25519/onetimeprivatekey

# XWingMLKEM768X25519.OneTimePrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

## Declaration

```swift
struct OneTimePrivateKey
```

## Topics

### Instance Properties

- [publicKey](onetimeprivatekey/publickey.md): The corresponding public key.

### Instance Methods

- [decapsulate(\_:)](onetimeprivatekey/decapsulate%28__%29.md): Decapsulate a shared secret.

### Type Methods

- [generate()](onetimeprivatekey/generate%28%29.md): Generates a new, random one-time-use private key.

## Relationships

### Conforms To

- [KEMOneTimePrivateKey](../kemonetimeprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
