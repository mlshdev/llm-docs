> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/identity](https://developer.apple.com/documentation/sharedwithyoucore/swperson/identity)

# SWPerson.Identity (Swift)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The unique identity for a person.

## Declaration

```swift
class Identity
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

This object represents an opaque Merkle tree where the root hash of the tree can uniquely identify the individual using the hash value of all of their devices. The individual’s devices use [SWPerson.IdentityProof](identityproof.md) to prove themselves to be part of this identity, and can then be used for cryptographic signatures for that individual.

## Topics

### Creating a hash

- [init(rootHash:)](identity/init%28roothash_%29.md): Creates and initializes the hash.

### Accessing the hash

- [rootHash](identity/roothash.md): The root hash of the tree that represents the individual’s identity.

### Initializers

- [init(coder:)](identity/init%28coder_%29.md)

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

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

- [SWPerson.IdentityProof](identityproof.md): An object that represents proof of inclusion to a Merkle tree.
- [SWPerson.SignedIdentityProof](signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.

# SWPersonIdentity (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Class  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

The unique identity for a person.

## Declaration

```objectivec
@interface SWPersonIdentity : NSObject
```

## Mentioned In

- [Adding custom collaboration to your app](../../sharedwithyou/adding-custom-collaboration-to-your-app.md)

<a id="overview"></a>

## Overview

This object represents an opaque Merkle tree where the root hash of the tree can uniquely identify the individual using the hash value of all of their devices. The individual’s devices use [SWPersonIdentityProof](identityproof.md) to prove themselves to be part of this identity, and can then be used for cryptographic signatures for that individual.

## Topics

### Creating a hash

- [initWithRootHash:](identity/init%28roothash_%29.md): Creates and initializes the hash.

### Accessing the hash

- [rootHash](identity/roothash.md): The root hash of the tree that represents the individual’s identity.

## Relationships

### Inherits From

- [NSObject](../../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](../../foundation/nscopying.md)
- [NSSecureCoding](../../foundation/nssecurecoding.md)

## See Also

### Accessing attributes

- [SWPersonIdentityProof](identityproof.md): An object that represents proof of inclusion to a Merkle tree.
- [SWSignedPersonIdentityProof](signedidentityproof.md): The signature that the system creates by signing the data with this person’s identity.
