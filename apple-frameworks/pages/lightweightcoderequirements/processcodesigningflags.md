> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processcodesigningflags](https://developer.apple.com/documentation/lightweightcoderequirements/processcodesigningflags)

# ProcessCodeSigningFlags

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A constraint that matches the current code-signing flags of a process.

## Declaration

```swift
struct ProcessCodeSigningFlags
```

## Topics

### Structures

- [ProcessCodeSigningFlags.ValueSet](processcodesigningflags/valueset.md): Code signing flags that can be set on a process

### Type Aliases

- [ProcessCodeSigningFlags.DataType](processcodesigningflags/datatype.md): The basic input data type for this constraint: `ProcessCodeSigningFlags.ValueSet`
- [ProcessCodeSigningFlags.OutType](processcodesigningflags/outtype.md): The type of this constraint: [ProcessCodeSigningFlags](processcodesigningflags.md)

### Type Methods

- [isSuperset(of:)](processcodesigningflags/issuperset%28of_%29.md): Matches when the code signing flags on the process are a superset of the specified flags.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [LaunchConstraint](launchconstraint.md)
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
- [ProcessConstraintBuilder](processconstraintbuilder.md): A custom parameter attribute that constructs process constraints from closures.
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md): A constraint that matches if a process has the same team identifier as the calling process.
