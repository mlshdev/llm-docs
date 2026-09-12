> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/p256/keyagreement/privatekey](https://developer.apple.com/documentation/cryptokit/secureenclave/p256/keyagreement/privatekey)

# SecureEnclave.P256.KeyAgreement.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.0+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

A P-256 private key used for key agreement.

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [init(dataRepresentation:authenticationContext:)](privatekey/init%28datarepresentation_authenticationcontext_%29.md): Creates a P-256 private key for key agreement from a data representation of the key with the given authentication context.
- [init(compactRepresentable:accessControl:authenticationContext:)](privatekey/init%28compactrepresentable_accesscontrol_authenticationcontext_%29.md): Creates a P-256 private key for key agreement with the specified access control.

### Representing the key

- [dataRepresentation](privatekey/datarepresentation.md): A data representation of the private key.

### Finding the public key

- [publicKey](privatekey/publickey.md): The corresponding public key.

### Creating a shared secret

- [sharedSecretFromKeyAgreement(with:)](privatekey/sharedsecretfromkeyagreement%28with_%29.md): Computes a shared secret with the provided public key from another party.
- [SharedSecret](../../../sharedsecret.md): A key agreement result from which you can derive a symmetric cryptographic key.

### Initializers

- [init(compactRepresentable:accessControl:)](privatekey/init%28compactrepresentable_accesscontrol_%29.md): Creates a P-256 private key for key agreement with the specified access control.
- [init(dataRepresentation:)](privatekey/init%28datarepresentation_%29.md): Creates a P-256 private key for key agreement from the specified data representation.

### Default Implementations

- [DiffieHellmanKeyAgreement Implementations](privatekey/diffiehellmankeyagreement-implementations.md)

## Relationships

### Conforms To

- [Copyable](https://developer.apple.com/documentation/swift/copyable)
- [DiffieHellmanKeyAgreement](../../../diffiehellmankeyagreement.md)
- [Escapable](https://developer.apple.com/documentation/swift/escapable)
- [HPKEDiffieHellmanPrivateKey](../../../hpkediffiehellmanprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
