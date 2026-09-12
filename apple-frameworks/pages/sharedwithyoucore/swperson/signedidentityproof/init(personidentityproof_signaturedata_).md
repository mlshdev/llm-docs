> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/sharedwithyoucore/swperson/signedidentityproof/init(personidentityproof:signaturedata:)](https://developer.apple.com/documentation/sharedwithyoucore/swperson/signedidentityproof/init(personidentityproof:signaturedata:))

# init(personIdentityProof:signatureData:) (Swift)

**Framework:** Shared with You Core  
**Kind:** Initializer  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and intializes a signed identity object.

## Declaration

```swift
init(personIdentityProof: SWPerson.IdentityProof, signatureData data: Data)
```

## Parameters

- `personIdentityProof`: The [SWPerson.IdentityProof](../identityproof.md) the system uses to create the signed identity.
- `data`: The data for the signature.

# initWithPersonIdentityProof:signatureData: (Objective-C)

**Framework:** Shared with You Core  
**Kind:** Instance Method  
**Availability:** iOS 16.0+ · iPadOS 16.0+ · Mac Catalyst 16.0+ · macOS 13.0+ · visionOS 1.0+

Creates and intializes a signed identity object.

## Declaration

```objectivec
- (instancetype) initWithPersonIdentityProof:(SWPersonIdentityProof *) personIdentityProof signatureData:(NSData *) data;
```

## Parameters

- `personIdentityProof`: The [SWPersonIdentityProof](../identityproof.md) the system uses to create the signed identity.
- `data`: The data for the signature.
