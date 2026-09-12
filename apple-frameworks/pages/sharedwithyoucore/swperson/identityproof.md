> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/identityproof](https://developer.apple.com/documentation/sharedwithyoucore/swperson/identityproof)

# SWPerson.IdentityProof (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents proof of inclusion to a Merkle tree.

## Declaration

```swift
class IdentityProof
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

This object represents an opaque Merkle tree proof of inclusion. Inclusion hashes are provided to verify that the individual device has access to the document.

## Topics

### Accessing attributes

- [inclusionHashes](identityproof/inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKey](identityproof/publickey.md): The public key of local device.
- [publicKeyIndex](identityproof/publickeyindex.md): The index of the local public key in the Merkle tree.

### Initializers

- [init(coder:)](identityproof/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWPerson.SignedIdentityProof](signedidentityproof.md)

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
- [SWPerson.SignedIdentityProof](signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.

# SWPersonIdentityProof (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

An object that represents proof of inclusion to a Merkle tree.

## Declaration

```objectivec
@interface SWPersonIdentityProof : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

This object represents an opaque Merkle tree proof of inclusion. Inclusion hashes are provided to verify that the individual device has access to the document.

## Topics

### Accessing attributes

- [inclusionHashes](identityproof/inclusionhashes.md): The hashes of missing Merkle tree nodes that can provide proof of inclusion.
- [publicKey](identityproof/publickey.md): The public key of local device.
- [publicKeyIndex](identityproof/publickeyindex.md): The index of the local public key in the Merkle tree.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Inherited By

- [SWSignedPersonIdentityProof](signedidentityproof.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Accessing attributes

- [SWPersonIdentity](identity.md): The unique identity for a person.
- [SWSignedPersonIdentityProof](signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.
