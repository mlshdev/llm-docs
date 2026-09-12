> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/kemprivatekey](https://developer.apple.com/documentation/cryptokit/kemprivatekey)

# KEMPrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

The private key for a key encapsulation mechanism.

## Declaration

```swift
@preconcurrency protocol KEMPrivateKey : Sendable
```

## Topics

### Associated Types

- [PublicKey](kemprivatekey/publickey-swift.associatedtype.md)

### Instance Properties

- [publicKey](kemprivatekey/publickey-swift.property.md): The associated public key.

### Instance Methods

- [decapsulate(\_:)](kemprivatekey/decapsulate%28__%29.md): Recovers a shared secret from an encapsulated representation.

### Type Methods

- [generate()](kemprivatekey/generate%28%29.md): Generates a new random private key.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [HPKEKEMPrivateKey](hpkekemprivatekey.md)
- [HPKEKEMPrivateKeyGeneration](hpkekemprivatekeygeneration.md)

### Conforming Types

- [MLKEM1024.PrivateKey](mlkem1024/privatekey.md)
- [MLKEM768.PrivateKey](mlkem768/privatekey.md)
- [SecureEnclave.MLKEM1024.PrivateKey](secureenclave/mlkem1024/privatekey.md)
- [SecureEnclave.MLKEM768.PrivateKey](secureenclave/mlkem768/privatekey.md)
- [XWingMLKEM768X25519.PrivateKey](xwingmlkem768x25519/privatekey.md)

## See Also

### KEM keys

- [KEMPublicKey](kempublickey.md): The public key for a key encapsulation mechanism.
