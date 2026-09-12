> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcoderequirement](https://developer.apple.com/documentation/lightweightcoderequirements/processcoderequirement)

# ProcessCodeRequirement

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A lightweight code requirement that you use to evaluate a running process.

## Declaration

```swift
struct ProcessCodeRequirement
```

<a id="overview"></a>

## Overview

[ProcessCodeRequirement](processcoderequirement.md) objects can only be built using constraints that conform to the [ProcessConstraint](processconstraint.md) protocol.

## Topics

### Initializers

- [init(\_:)](processcoderequirement/init%28__%29-1va02.md): Convert an [OnDiskCodeRequirement](ondiskcoderequirement.md) to a [ProcessCodeRequirement](processcoderequirement.md) if possible.
- [init(\_:)](processcoderequirement/init%28__%29-4gkz2.md): Convert a [LaunchCodeRequirement](launchcoderequirement.md) to a [ProcessCodeRequirement](processcoderequirement.md) if possible.
- [init(from:)](processcoderequirement/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](processcoderequirement/encode%28to_%29.md): Encodes this value into the given encoder

### Type Methods

- [allOf(requirement:)](processcoderequirement/allof%28requirement_%29.md): Create a [ProcessCodeRequirement](processcoderequirement.md) that requires matching all of the provided constraints.
- [anyOf(requirement:)](processcoderequirement/anyof%28requirement_%29.md): Create a [ProcessCodeRequirement](processcoderequirement.md) that requires matching any of the provided constraints.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking code requirements for running processes

- [SecTaskValidateForRequirement(task:requirement:)](sectaskvalidateforrequirement%28task_requirement_%29.md): Tests whether a task’s executable satisfies a lightweight code requirement.
- [allOf(requirement:)](allof%28requirement_%29-4k3ay.md): Creates a constraint that requires a running process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-vwhn.md): Creates a constraint that requires a running process’s executable to satisfy any of the provided constraints.
- [ProcessConstraint](processconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in process code requirements.
- [ProcessCodeSigningFlags](processcodesigningflags.md): A constraint that matches the current code-signing flags of a process.
- [ProcessConstraintBuilder](processconstraintbuilder.md): A custom parameter attribute that constructs process constraints from closures.
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md): A constraint that matches if a process has the same team identifier as the calling process.
