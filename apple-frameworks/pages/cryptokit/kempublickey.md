> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kempublickey](https://developer.apple.com/documentation/cryptokit/kempublickey)

# KEMPublicKey

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The public key for a key encapsulation mechanism.

## Declaration

```swift
@preconcurrency protocol KEMPublicKey : Sendable
```

## Topics

### Instance Methods

- [encapsulate()](kempublickey/encapsulate%28%29.md): Generates and encapsulates a shared secret.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [HPKEKEMPublicKey](hpkekempublickey.md)

### Conforming Types

- [MLKEM1024.PublicKey](mlkem1024/publickey.md)
- [MLKEM768.PublicKey](mlkem768/publickey.md)
- [XWingMLKEM768X25519.PublicKey](xwingmlkem768x25519/publickey.md)

## See Also

### KEM keys

- [KEMPrivateKey](kemprivatekey.md): The private key for a key encapsulation mechanism.
