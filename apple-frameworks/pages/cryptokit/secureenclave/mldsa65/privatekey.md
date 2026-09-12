> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mldsa65/privatekey](https://developer.apple.com/documentation/cryptokit/secureenclave/mldsa65/privatekey)

# SecureEnclave.MLDSA65.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct PrivateKey
```

## Topics

### Initializers

- [init(accessControl:)](privatekey/init%28accesscontrol_%29.md)
- [init(accessControl:authenticationContext:)](privatekey/init%28accesscontrol_authenticationcontext_%29.md)
- [init(dataRepresentation:)](privatekey/init%28datarepresentation_%29.md)
- [init(dataRepresentation:authenticationContext:)](privatekey/init%28datarepresentation_authenticationcontext_%29.md)

### Instance Properties

- [dataRepresentation](privatekey/datarepresentation.md): A data representation of the private key.
- [publicKey](privatekey/publickey.md): The corresponding public key.

### Instance Methods

- [signature(for:)](privatekey/signature%28for_%29.md): Generates a MLDSA65 signature
- [signature(for:context:)](privatekey/signature%28for_context_%29.md): Generates a MLDSA65 signature, with context

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
