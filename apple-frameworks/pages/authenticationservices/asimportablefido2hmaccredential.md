> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablefido2hmaccredential](https://developer.apple.com/documentation/authenticationservices/asimportablefido2hmaccredential)

# ASImportableFIDO2HMACCredential

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.4+ · iPadOS 26.4+ · Mac Catalyst 26.4+ · macOS 26.4+ · visionOS 26.4+

A representation of FIDO2 HMAC Credentials as defined in CXF.

## Declaration

```swift
struct ASImportableFIDO2HMACCredential
```

## Topics

### Initializers

- [init(algorithm:credentialWithUV:credentialWithoutUV:)](asimportablefido2hmaccredential/init%28algorithm_credentialwithuv_credentialwithoutuv_%29.md)

### Instance Properties

- [algorithm](asimportablefido2hmaccredential/algorithm-swift.property.md): Algorithm used to generate the shared secret from the credentials.
- [credentialWithUV](asimportablefido2hmaccredential/credentialwithuv.md): Credential to use when user verification is performed.
- [credentialWithoutUV](asimportablefido2hmaccredential/credentialwithoutuv.md): Credential to use when user verification is not performed.

### Enumerations

- [ASImportableFIDO2HMACCredential.Algorithm](asimportablefido2hmaccredential/algorithm-swift.enum.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
