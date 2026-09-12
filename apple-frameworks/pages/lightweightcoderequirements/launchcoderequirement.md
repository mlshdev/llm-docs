> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/launchcoderequirement](https://developer.apple.com/documentation/lightweightcoderequirements/launchcoderequirement)

# LaunchCodeRequirement

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A lightweight code requirement that you use to evaluate the executable for a launching process.

## Declaration

```swift
struct LaunchCodeRequirement
```

<a id="overview"></a>

## Overview

If you set a `LaunchCodeRequirement` object for a launching process and the executable doesn’t satisfy the requirement, the operating system doesn’t run the process and creates a crash report instead. [LaunchCodeRequirement](launchcoderequirement.md) objects can only be built using constraints that conform to the [LaunchConstraint](launchconstraint.md) protocol. Note that [LaunchCodeRequirement](launchcoderequirement.md) are applied to processes. If a launch requests execution of ‘#!’ script, the launch constraint will be applied to the interpreter. For example a script with the following ‘#!’ will apply a launch constraint to bash.

```bash
#! /bin/bash
```

if the ‘#!’ is instead:

```bash
 #! /usr/bin/env python
```

Then the launch constraint is applied to env.

## Topics

### Initializers

- [init(\_:)](launchcoderequirement/init%28__%29-5fh0u.md): Convert a [ProcessCodeRequirement](processcoderequirement.md) to a [LaunchCodeRequirement](launchcoderequirement.md) if possible.
- [init(\_:)](launchcoderequirement/init%28__%29-6hixy.md): Convert a [OnDiskCodeRequirement](ondiskcoderequirement.md) to a [LaunchCodeRequirement](launchcoderequirement.md) if possible.
- [init(from:)](launchcoderequirement/init%28from_%29.md): Create a new instance by decoding from the given decoder

### Instance Methods

- [encode(to:)](launchcoderequirement/encode%28to_%29.md): Encodes this value into the given encoder

### Type Methods

- [allOf(requirement:)](launchcoderequirement/allof%28requirement_%29.md): Create a [LaunchCodeRequirement](launchcoderequirement.md) that requires matching all of the provided constraints.
- [anyOf(requirement:)](launchcoderequirement/anyof%28requirement_%29.md): Create a [LaunchCodeRequirement](launchcoderequirement.md) that requires matching any of the provided constraints.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking code requirements for launching processes

- [SecCodeCheckValidityWithProcessRequirement(code:flags:requirement:)](seccodecheckvaliditywithprocessrequirement%28code_flags_requirement_%29.md): Checks whether the code associated with a running process satisfies a lightweight code requirement.
- [launchRequirement](../foundation/process/launchrequirement.md)
- [allOf(requirement:)](allof%28requirement_%29-4gf5f.md): Creates a constraint that requires a launching process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-6nicx.md): Creates a constraint that requires a launching process’s executable to satisfy any of the provided constraints.
- [LaunchConstraint](launchconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in launch code requirements.
- [LaunchConstraintBuilder](launchconstraintbuilder.md): A custom parameter attribute that constructs launch constraints from closures.
