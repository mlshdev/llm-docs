> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/hpkediffiehellmanprivatekeygeneration](https://developer.apple.com/documentation/cryptokit/hpkediffiehellmanprivatekeygeneration)

# HPKEDiffieHellmanPrivateKeyGeneration

**Framework:** Apple CryptoKit  
**Kind:** Protocol  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+ · watchOS 10.0+

A type that represents the generation of private keys in a Diffie-Hellman key exchange.

## Declaration

```swift
@preconcurrency protocol HPKEDiffieHellmanPrivateKeyGeneration : HPKEDiffieHellmanPrivateKey
```

## Topics

### Initializers

- [init()](hpkediffiehellmanprivatekeygeneration/init%28%29.md): Creates a private key generator.

## Relationships

### Inherits From

- [DiffieHellmanKeyAgreement](diffiehellmankeyagreement.md)
- [HPKEDiffieHellmanPrivateKey](hpkediffiehellmanprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [Curve25519.KeyAgreement.PrivateKey](curve25519/keyagreement/privatekey.md)
- [P256.KeyAgreement.PrivateKey](p256/keyagreement/privatekey.md)
- [P384.KeyAgreement.PrivateKey](p384/keyagreement/privatekey.md)
- [P521.KeyAgreement.PrivateKey](p521/keyagreement/privatekey.md)
