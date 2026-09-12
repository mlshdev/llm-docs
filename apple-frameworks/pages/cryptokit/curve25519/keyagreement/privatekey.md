> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/curve25519/keyagreement/privatekey](https://developer.apple.com/documentation/cryptokit/curve25519/keyagreement/privatekey)

# Curve25519.KeyAgreement.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A Curve25519 private key used for key agreement.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init()](privatekey/init%28%29.md): Creates a random Curve25519 private key for key agreement.
- [init(rawRepresentation:)](privatekey/init%28rawrepresentation_%29.md): Creates a Curve25519 private key for key agreement from a collection of bytes.

### Reporting the private key

- [rawRepresentation](privatekey/rawrepresentation.md): The raw representation of the key as a collection of contiguous bytes.

### Finding the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Creating a shared secret

- [sharedSecretFromKeyAgreement(with:)](privatekey/sharedsecretfromkeyagreement%28with_%29.md): Computes a shared secret with the provided public key from another party.
- [SharedSecret](../../sharedsecret.md): A key agreement result from which you can derive a symmetric cryptographic key.

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DiffieHellmanKeyAgreement](../../diffiehellmankeyagreement.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HPKEDiffieHellmanPrivateKey](../../hpkediffiehellmanprivatekey.md)
- [HPKEDiffieHellmanPrivateKeyGeneration](../../hpkediffiehellmanprivatekeygeneration.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Using keys

- [Curve25519.KeyAgreement.PublicKey](publickey.md): A Curve25519 public key used for key agreement.
