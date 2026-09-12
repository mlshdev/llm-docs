> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/p521/keyagreement/privatekey](https://developer.apple.com/documentation/cryptokit/p521/keyagreement/privatekey)

# P521.KeyAgreement.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-521 private key used for key agreement.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init(compactRepresentable:)](privatekey/init%28compactrepresentable_%29.md): Creates a random P-521 private key for key agreement.
- [init(rawRepresentation:)](privatekey/init%28rawrepresentation_%29.md): Creates a P-521 private key for key agreement from a collection of bytes.
- [init(derRepresentation:)](privatekey/init%28derrepresentation_%29.md): Creates a P-521 private key for key agreement from a Distinguished Encoding Rules (DER) encoded representation.
- [init(pemRepresentation:)](privatekey/init%28pemrepresentation_%29.md): Creates a P-521 private key for key agreement from a Privacy-Enhanced Mail PEM) representation.
- [init(x963Representation:)](privatekey/init%28x963representation_%29.md): Creates a P-521 private key for key agreement from an ANSI x9.63 representation.

### Representing the key

- [rawRepresentation](privatekey/rawrepresentation.md): A data representation of the private key.
- [derRepresentation](privatekey/derrepresentation.md): A Distinguished Encoding Rules (DER) encoded representation of the private key.
- [pemRepresentation](privatekey/pemrepresentation.md): A Privacy-Enhanced Mail (PEM) representation of the private key.
- [x963Representation](privatekey/x963representation.md): An ANSI x9.63 representation of the private key.

### Finding the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Creating a shared secret

- [sharedSecretFromKeyAgreement(with:)](privatekey/sharedsecretfromkeyagreement%28with_%29.md): Computes a shared secret with the provided public key from another party.
- [SharedSecret](../../sharedsecret.md): A key agreement result from which you can derive a symmetric cryptographic key.

### Default Implementations

- [DiffieHellmanKeyAgreement Implementations](privatekey/diffiehellmankeyagreement-implementations.md)
- [HPKEDiffieHellmanPrivateKeyGeneration Implementations](privatekey/hpkediffiehellmanprivatekeygeneration-implementations.md)

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

- [P521.KeyAgreement.PublicKey](publickey.md): A P-521 public key used for key agreement.
