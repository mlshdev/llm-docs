> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/launchconstraint](https://developer.apple.com/documentation/lightweightcoderequirements/launchconstraint)

# LaunchConstraint

**Framework:** LightweightCodeRequirements  
**Kind:** Protocol  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A protocol to which a lightweight code requirement constraint conforms if you can use it in launch code requirements.

## Declaration

```swift
protocol LaunchConstraint : Decodable, Encodable, Sendable
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
- [ValidationCategory](validationcategory.md)

## See Also

### Checking code requirements for launching processes

- [SecCodeCheckValidityWithProcessRequirement(code:flags:requirement:)](seccodecheckvaliditywithprocessrequirement%28code_flags_requirement_%29.md): Checks whether the code associated with a running process satisfies a lightweight code requirement.
- [launchRequirement](../foundation/process/launchrequirement.md)
- [LaunchCodeRequirement](launchcoderequirement.md): A lightweight code requirement that you use to evaluate the executable for a launching process.
- [allOf(requirement:)](allof%28requirement_%29-4gf5f.md): Creates a constraint that requires a launching process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-6nicx.md): Creates a constraint that requires a launching process’s executable to satisfy any of the provided constraints.
- [LaunchConstraintBuilder](launchconstraintbuilder.md): A custom parameter attribute that constructs launch constraints from closures.
