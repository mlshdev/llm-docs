> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/authenticationservices/asimportablecredential/sshkey](https://developer.apple.com/documentation/authenticationservices/asimportablecredential/sshkey)

# ASImportableCredential.SSHKey

**Framework:** Authentication Services  
**Kind:** Structure  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · macOS 26.0+ · visionOS 26.0+

A representation of SSHKey as defined in the [Credential Exchange Format (CXF) specs](https://fidoalliance.org/specs/cx/cxf-v1.0-rd-20250313.html)

## Declaration

```swift
struct SSHKey
```

## Topics

### Initializers

- [init(keyType:privateKey:keyComment:creationDate:expiryDate:keyGenerationSource:)](sshkey/init%28keytype_privatekey_keycomment_creationdate_expirydate_keygenerationsource_%29.md)

### Instance Properties

- [creationDate](sshkey/creationdate.md)
- [expiryDate](sshkey/expirydate.md)
- [keyComment](sshkey/keycomment.md)
- [keyGenerationSource](sshkey/keygenerationsource.md)
- [keyType](sshkey/keytype.md)
- [privateKey](sshkey/privatekey.md)

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)
