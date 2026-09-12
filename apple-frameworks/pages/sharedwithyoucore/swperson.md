> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson](https://developer.apple.com/documentation/sharedwithyoucore/swperson)

# SWPerson (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that tracks participants in a collaboration.

## Declaration

```swift
class SWPerson
```

## Topics

### Creating participants

- [init(handle:identity:displayName:thumbnailImageData:)](swperson/init%28handle_identity_displayname_thumbnailimagedata_%29.md): Creates and initializes a person object.

### Accessing attributes

- [SWPerson.Identity](swperson/identity.md): The unique identity for a person.
- [SWPerson.IdentityProof](swperson/identityproof.md): An object that represents proof of inclusion to a Merkle tree.
- [SWPerson.SignedIdentityProof](swperson/signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.

### Initializers

- [init(coder:)](swperson/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../foundation/nscoding.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage collaboration participants

- [SWCollaborationIdentifier](swcollaborationidentifier.md): A unique identifier for a collaboration.

# SWPerson (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that tracks participants in a collaboration.

## Declaration

```objectivec
@interface SWPerson : NSObject
```

## Topics

### Creating participants

- [initWithHandle:identity:displayName:thumbnailImageData:](swperson/init%28handle_identity_displayname_thumbnailimagedata_%29.md): Creates and initializes a person object.

### Accessing attributes

- [SWPersonIdentity](swperson/identity.md): The unique identity for a person.
- [SWPersonIdentityProof](swperson/identityproof.md): An object that represents proof of inclusion to a Merkle tree.
- [SWSignedPersonIdentityProof](swperson/signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSSecureCoding](../foundation/nssecurecoding.md)

## See Also

### Manage collaboration participants

- [SWCollaborationIdentifier](swcollaborationidentifier.md): A unique identifier for a collaboration.
