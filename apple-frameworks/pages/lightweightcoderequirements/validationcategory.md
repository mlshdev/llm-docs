> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/validationcategory](https://developer.apple.com/documentation/lightweightcoderequirements/validationcategory)

# ValidationCategory

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A constraint that tests whether a code file or running process is signed in a way that conforms to the specified validation category.

## Declaration

```swift
struct ValidationCategory
```

<a id="overview"></a>

## Overview

Validation categories are an indication of the type of signature on the file and how it is allowed to run.

## Topics

### Structures

- [ValidationCategory.Value](validationcategory/value.md): Supported Validation categories for signatures

### Initializers

- [init(\_:)](validationcategory/init%28__%29.md): Matches if the file or process is signed in a way that conforms to the specified category.
- [init(from:)](validationcategory/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](validationcategory/encode%28to_%29.md): Encodes this value into the given encoder

### Type Aliases

- [ValidationCategory.DataType](validationcategory/datatype.md): The basic input data type for this constraint: `ValidationCategoryType`.
- [ValidationCategory.OutType](validationcategory/outtype.md): The type of this constraint: [ValidationCategory](validationcategory.md).

### Type Methods

- [in(\_:)](validationcategory/in%28__%29-1skt4.md): Matches if the file or process is signed in a way that conforms to any of the specified categories.
- [in(\_:)](validationcategory/in%28__%29-94p2z.md): Matches if the file or process is signed in a way that conforms to any of the specified categories.

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
- [SigningIdentifier](signingidentifier.md): A constraint that tests whether the provided signing identifier matches the signature attached to the code.
- [TeamIdentifier](teamidentifier.md): A constraint that tests whether the provided team identifier matches the team identified in the code signature.
