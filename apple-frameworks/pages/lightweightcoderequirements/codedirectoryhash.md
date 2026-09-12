> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/codedirectoryhash](https://developer.apple.com/documentation/lightweightcoderequirements/codedirectoryhash)

# CodeDirectoryHash

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A constraint that matches the hash of a code directory of a code file or of a running or launching process.

## Declaration

```swift
struct CodeDirectoryHash
```

<a id="overview"></a>

## Overview

In the context of [ProcessCodeRequirement](processcoderequirement.md) and [LaunchCodeRequirement](launchcoderequirement.md) this constraint matches the hash of the chosen code directory for the running process, or the process the system is launching.

In the context of [OnDiskCodeRequirement](ondiskcoderequirement.md) this constraint matches the hash of the code directory for the specified `SecStaticCodeRef` that best matches the current architecture. The best match is different for processes running on Intel and Apple silicon, including an Intel process running on Apple silicon with Rosetta. To reliably identify a code file using its code directory hash, use [in(\_:)](codedirectoryhash/in%28__%29-912dv.md) and supply a list of the known code directory hash values.

## Topics

### Initializers

- [init(\_:)](codedirectoryhash/init%28__%29.md): Match against a single code directory hash.
- [init(from:)](codedirectoryhash/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](codedirectoryhash/encode%28to_%29.md): Encodes this value into the given encoder

### Type Aliases

- [CodeDirectoryHash.DataType](codedirectoryhash/datatype.md): The basic input data type for this constraint: Data
- [CodeDirectoryHash.OutType](codedirectoryhash/outtype.md): The type of this constraint: [CodeDirectoryHash](codedirectoryhash.md)

### Type Methods

- [in(\_:)](codedirectoryhash/in%28__%29-1kiuo.md): Match against any of the code directory hashes in the provided list.
- [in(\_:)](codedirectoryhash/in%28__%29-912dv.md): Match against any of the code directory hashes in the provided list.

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

- [EntitlementsQuery](entitlementsquery.md): A constraint that tests values in the entitlements dictionary associated with a process or code file.
- [InfoPlistHash](infoplisthash.md): A constraint that tests the specified hash against the Information property list hash stored in the code signature of the process or code file.
- [IsInitProcess](isinitprocess.md): A constraint that tests whether a process is the operating system’s initial process.
- [IsMainBinary](ismainbinary.md): A constraint that tests whether a code file is a main binary.
- [IsSIPProtected](issipprotected.md): A constraint that tests whether a code file or process is on a volume protected by System Integrity Protection (SIP).
- [PlatformType](platformtype.md): A constraint that tests whether a code file or running process targets a given platform.
- [SigningIdentifier](signingidentifier.md): A constraint that tests whether the provided signing identifier matches the signature attached to the code.
- [TeamIdentifier](teamidentifier.md): A constraint that tests whether the provided team identifier matches the team identified in the code signature.
- [ValidationCategory](validationcategory.md): A constraint that tests whether a code file or running process is signed in a way that conforms to the specified validation category.
