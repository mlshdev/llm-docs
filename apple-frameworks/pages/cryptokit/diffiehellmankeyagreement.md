> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/diffiehellmankeyagreement](https://developer.apple.com/documentation/cryptokit/diffiehellmankeyagreement)

# DiffieHellmanKeyAgreement

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A Diffie-Hellman Key Agreement Key

## Declaration

```swift
@preconcurrency protocol DiffieHellmanKeyAgreement : Sendable
```

## Topics

### Associated Types

- [PublicKey](diffiehellmankeyagreement/publickey-swift.associatedtype.md): The public key share type to perform the DH Key Agreement

### Instance Properties

- [publicKey](diffiehellmankeyagreement/publickey-swift.property.md)

### Instance Methods

- [sharedSecretFromKeyAgreement(with:)](diffiehellmankeyagreement/sharedsecretfromkeyagreement%28with_%29.md): Performs a Diffie-Hellman Key Agreement.

## Relationships

### Inherits From

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Inherited By

- [HPKEDiffieHellmanPrivateKey](hpkediffiehellmanprivatekey.md)
- [HPKEDiffieHellmanPrivateKeyGeneration](hpkediffiehellmanprivatekeygeneration.md)

### Conforming Types

- [Curve25519.KeyAgreement.PrivateKey](curve25519/keyagreement/privatekey.md)
- [P256.KeyAgreement.PrivateKey](p256/keyagreement/privatekey.md)
- [P384.KeyAgreement.PrivateKey](p384/keyagreement/privatekey.md)
- [P521.KeyAgreement.PrivateKey](p521/keyagreement/privatekey.md)
- [SecureEnclave.P256.KeyAgreement.PrivateKey](secureenclave/p256/keyagreement/privatekey.md)
