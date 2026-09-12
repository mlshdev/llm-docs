> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/processconstraint](https://developer.apple.com/documentation/lightweightcoderequirements/processconstraint)

# ProcessConstraint

**Framework:** LightweightCodeRequirements  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A protocol to which a lightweight code requirement constraint conforms if you can use it in process code requirements.

## Declaration

```swift
protocol ProcessConstraint : Decodable, Encodable, Sendable
```

## Relationships

### Inherits From

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

### Conforming Types

- [CodeDirectoryHash](codedirectoryhash.md)
- [EntitlementsQuery](entitlementsquery.md)
- [InfoPlistHash](infoplisthash.md)
- [IsInitProcess](isinitprocess.md)
- [IsSIPProtected](issipprotected.md)
- [PlatformType](platformtype.md)
- [ProcessCodeSigningFlags](processcodesigningflags.md)
- [SigningIdentifier](signingidentifier.md)
- [TeamIdentifier](teamidentifier.md)
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md)
- [ValidationCategory](validationcategory.md)

## See Also

### Checking code requirements for running processes

- [SecTaskValidateForRequirement(task:requirement:)](sectaskvalidateforrequirement%28task_requirement_%29.md): Tests whether a task’s executable satisfies a lightweight code requirement.
- [ProcessCodeRequirement](processcoderequirement.md): A lightweight code requirement that you use to evaluate a running process.
- [allOf(requirement:)](allof%28requirement_%29-4k3ay.md): Creates a constraint that requires a running process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-vwhn.md): Creates a constraint that requires a running process’s executable to satisfy any of the provided constraints.
- [ProcessCodeSigningFlags](processcodesigningflags.md): A constraint that matches the current code-signing flags of a process.
- [ProcessConstraintBuilder](processconstraintbuilder.md): A custom parameter attribute that constructs process constraints from closures.
- [TeamIdentifierMatchesCurrentProcess](teamidentifiermatchescurrentprocess.md): A constraint that matches if a process has the same team identifier as the calling process.
