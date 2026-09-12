> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptokit/secureenclave/mlkem1024/privatekey](https://developer.apple.com/documentation/cryptokit/secureenclave/mlkem1024/privatekey)

# SecureEnclave.MLKEM1024.PrivateKey

**Framework:** Apple CryptoKit  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · tvOS 26.0+ · visionOS 26.0+ · watchOS 26.0+

## Declaration

```swift
struct PrivateKey
```

## Topics

### Creating a private key

- [generate()](privatekey/generate%28%29.md): Generates a new random private key.
- [init(accessControl:authenticationContext:)](privatekey/init%28accesscontrol_authenticationcontext_%29.md)
- [init(dataRepresentation:authenticationContext:)](privatekey/init%28datarepresentation_authenticationcontext_%29.md)

### Accessing a key’s properties

- [dataRepresentation](privatekey/datarepresentation.md): A data representation of the private key.
- [publicKey](privatekey/publickey.md): The corresponding public key.

### Decapsulating shared secrets

- [decapsulate(\_:)](privatekey/decapsulate%28__%29.md): Decapsulates the encapsulated shared secret

### Initializers

- [init(accessControl:)](privatekey/init%28accesscontrol_%29.md)
- [init(dataRepresentation:)](privatekey/init%28datarepresentation_%29.md)

## Relationships

### Conforms To

- [KEMPrivateKey](../../kemprivatekey.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
