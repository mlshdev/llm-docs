> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/signingidentifier](https://developer.apple.com/documentation/lightweightcoderequirements/signingidentifier)

# SigningIdentifier

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A constraint that tests whether the provided signing identifier matches the signature attached to the code.

## Declaration

```swift
struct SigningIdentifier
```

<a id="overview"></a>

## Overview

The signing identifier is referred to as simply the “Identifier” in codesign –dump output. The signing identifier is matched byte for byte (i.e. no unicode normalization occurs). Signing identifiers can be claimed by multiple signers. To check a signing identifier securely you should also require a [ValidationCategory](validationcategory.md) constraint and for non-Apple code a [TeamIdentifier](teamidentifier.md) constraint.

## Topics

### Initializers

- [init(\_:)](signingidentifier/init%28__%29.md): Matches if the provided string matches the signing identifier of the code.
- [init(from:)](signingidentifier/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](signingidentifier/encode%28to_%29.md): Encodes this value into the given encoder

### Type Aliases

- [SigningIdentifier.DataType](signingidentifier/datatype.md): The basic input data type for this constraint: String.
- [SigningIdentifier.OutType](signingidentifier/outtype.md): The type of this constraint: [SigningIdentifier](signingidentifier.md).

### Type Methods

- [in(\_:)](signingidentifier/in%28__%29-57h8m.md): Matches if the signing identifier of the code matches any of the provided signing identifiers.
- [in(\_:)](signingidentifier/in%28__%29-57qq8.md): Matches if the signing identifier of the code matches any of the provided signing identifiers.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [LaunchConstraint](launchconstraint.md)
- [OnDiskConstraint](ondiskconstraint.md)
- [ProcessConstraint](processconstraint.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Testing properties of executable code

- [CodeDirectoryHash](codedirectoryhash.md): A constraint that matches the hash of a code directory of a code file or of a running or launching process.
- [EntitlementsQuery](entitlementsquery.md): A constraint that tests values in the entitlements dictionary associated with a process or code file.
- [InfoPlistHash](infoplisthash.md): A constraint that tests the specified hash against the Information property list hash stored in the code signature of the process or code file.
- [IsInitProcess](isinitprocess.md): A constraint that tests whether a process is the operating system’s initial process.
- [IsMainBinary](ismainbinary.md): A constraint that tests whether a code file is a main binary.
- [IsSIPProtected](issipprotected.md): A constraint that tests whether a code file or process is on a volume protected by System Integrity Protection (SIP).
- [PlatformType](platformtype.md): A constraint that tests whether a code file or running process targets a given platform.
- [TeamIdentifier](teamidentifier.md): A constraint that tests whether the provided team identifier matches the team identified in the code signature.
- [ValidationCategory](validationcategory.md): A constraint that tests whether a code file or running process is signed in a way that conforms to the specified validation category.
