> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/teamidentifiermatchescurrentprocess](https://developer.apple.com/documentation/lightweightcoderequirements/teamidentifiermatchescurrentprocess)

# TeamIdentifierMatchesCurrentProcess

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+ · watchOS 11.0+

A constraint that matches if a process has the same team identifier as the calling process.

## Declaration

```swift
struct TeamIdentifierMatchesCurrentProcess
```

## Topics

### Initializers

- [init()](teamidentifiermatchescurrentprocess/init%28%29.md): Creates a constraint that matches the current process’s team identifier.
- [init(\_:)](teamidentifiermatchescurrentprocess/init%28__%29.md): Creates a constraint that tests whether a process’s team identifier matches the current process’s team identifier.
- [init(from:)](teamidentifiermatchescurrentprocess/init%28from_%29.md): Create a new constraint by decoding from the given decoder

### Instance Methods

- [encode(to:)](teamidentifiermatchescurrentprocess/encode%28to_%29.md): Encodes this constraint into the given encoder.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [ProcessConstraint](processconstraint.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking code requirements for running processes

- [SecTaskValidateForRequirement(task:requirement:)](sectaskvalidateforrequirement%28task_requirement_%29.md): Tests whether a task’s executable satisfies a lightweight code requirement.
- [ProcessCodeRequirement](processcoderequirement.md): A lightweight code requirement that you use to evaluate a running process.
- [allOf(requirement:)](allof%28requirement_%29-4k3ay.md): Creates a constraint that requires a running process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-vwhn.md): Creates a constraint that requires a running process’s executable to satisfy any of the provided constraints.
- [ProcessConstraint](processconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in process code requirements.
- [ProcessCodeSigningFlags](processcodesigningflags.md): A constraint that matches the current code-signing flags of a process.
- [ProcessConstraintBuilder](processconstraintbuilder.md): A custom parameter attribute that constructs process constraints from closures.
