> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kemonetimeprivatekey](https://developer.apple.com/documentation/cryptokit/kemonetimeprivatekey)

# KEMOneTimePrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

A one-time private key for a key encapsulation mechanism, which can only decapsulate once but it does so faster.

## Declaration

```swift
@preconcurrency protocol KEMOneTimePrivateKey : Sendable, ~Copyable
```

## Topics

### Associated Types

- [PublicKey](kemonetimeprivatekey/publickey-swift.associatedtype.md)

### Instance Properties

- [publicKey](kemonetimeprivatekey/publickey-swift.property.md): The associated public key.

### Instance Methods

- [decapsulate(\_:)](kemonetimeprivatekey/decapsulate%28__%29.md): Recovers a shared secret from an encapsulated representation.

### Type Methods

- [generate()](kemonetimeprivatekey/generate%28%29.md): Generates a new random private key.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [MLKEM1024.OneTimePrivateKey](mlkem1024/onetimeprivatekey.md)
- [MLKEM768.OneTimePrivateKey](mlkem768/onetimeprivatekey.md)
- [XWingMLKEM768X25519.OneTimePrivateKey](xwingmlkem768x25519/onetimeprivatekey.md)
