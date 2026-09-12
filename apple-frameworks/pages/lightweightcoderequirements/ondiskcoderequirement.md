> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcoderequirement](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcoderequirement)

# OnDiskCodeRequirement

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A lightweight code requirement that you use to evaluate a code file on disk.

## Declaration

```swift
struct OnDiskCodeRequirement
```

<a id="overview"></a>

## Overview

[OnDiskCodeRequirement](ondiskcoderequirement.md) objects can only be built using constraints that conform to the [OnDiskConstraint](ondiskconstraint.md) protocol. Specifically [OnDiskCodeRequirement](ondiskcoderequirement.md) objects will be matched against a SecStaticCodeRef. A SecStaticCodeRef may reference any of the following:

- The main executable of a bundle
- A specific file on disk
- The region of a Mach-O pertaining to a specific architecture (e.g. x86_64, arm64, arm64e).

## Topics

### Initializers

- [init(\_:)](ondiskcoderequirement/init%28__%29-2lfey.md): Convert a [LaunchCodeRequirement](launchcoderequirement.md) to an [OnDiskCodeRequirement](ondiskcoderequirement.md) if possible.
- [init(\_:)](ondiskcoderequirement/init%28__%29-9imtm.md): Convert a [ProcessCodeRequirement](processcoderequirement.md) to an [OnDiskCodeRequirement](ondiskcoderequirement.md) if possible.
- [init(from:)](ondiskcoderequirement/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](ondiskcoderequirement/encode%28to_%29.md): Encodes this value into the given encoder

### Type Methods

- [allOf(requirement:)](ondiskcoderequirement/allof%28requirement_%29.md): Create a [OnDiskCodeRequirement](ondiskcoderequirement.md) that requires matching all of the provided constraints.
- [anyOf(requirement:)](ondiskcoderequirement/anyof%28requirement_%29.md): Create a [OnDiskCodeRequirement](ondiskcoderequirement.md) that requires matching any of the provided constraints.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking code requirements for code files on disk

- [SecStaticCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](secstaticcodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether static code on disk satisfies a lightweight code requirement.
- [SecCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](seccodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether code on disk satisfies a lightweight code requirement.
- [ValidationResult](validationresult.md): A structure that represents the result of testing a lightweight code requirement.
- [allOf(requirement:)](allof%28requirement_%29-2ocwl.md): Creates a constraint that requires code on disk to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-71pff.md): Creates a constraint that requires code on disk to satisfy any of the provided constraints.
- [OnDiskConstraint](ondiskconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in on-disk code requirements.
- [OnDiskCodeSigningFlags](ondiskcodesigningflags.md): A constraint that tests the code-signing flags of a code file on disk.
- [OnDiskConstraintBuilder](ondiskconstraintbuilder.md): A custom parameter attribute that constructs on-disk constraints from closures.
