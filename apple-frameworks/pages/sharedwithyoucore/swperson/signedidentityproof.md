> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/sharedwithyoucore/swperson/signedidentityproof

# SWPerson.SignedIdentityProof (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The signature that the system creates by signing the data with this person’s identity.

## Declaration

```swift
class SignedIdentityProof
```

## Topics

### Creating a signed identity

- [init(personIdentityProof:signatureData:)](signedidentityproof/init%28personidentityproof_signaturedata_%29.md): Creates and intializes a signed identity object.

### Accessing signature data

- [signatureData](signedidentityproof/signaturedata.md): The signature the system creates by signing the data with this person’s identity.

## Relationships

### Inherits From

- [SWPerson.IdentityProof](identityproof.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](../../foundation/nscoding.md)
- [NSCopying](../../foundation/nscopying.md)
- [NSObjectProtocol](../../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Accessing attributes

- [SWPerson.Identity](identity.md): The unique identity for a person.
- [SWPerson.IdentityProof](identityproof.md): An object that represents proof of inclusion to a Merkle tree.

# SWSignedPersonIdentityProof (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The signature that the system creates by signing the data with this person’s identity.

## Declaration

```objectivec
@interface SWSignedPersonIdentityProof : SWPersonIdentityProof
```

## Topics

### Creating a signed identity

- [initWithPersonIdentityProof:signatureData:](signedidentityproof/init%28personidentityproof_signaturedata_%29.md): Creates and intializes a signed identity object.

### Accessing signature data

- [signatureData](signedidentityproof/signaturedata.md): The signature the system creates by signing the data with this person’s identity.

## Relationships

### Inherits From

- [SWPersonIdentityProof](identityproof.md)

## See Also

### Accessing attributes

- [SWPersonIdentity](identity.md): The unique identity for a person.
- [SWPersonIdentityProof](identityproof.md): An object that represents proof of inclusion to a Merkle tree.
