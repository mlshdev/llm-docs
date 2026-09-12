> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/anyof(requirement:)-6nicx](https://developer.apple.com/documentation/lightweightcoderequirements/anyof(requirement:)-6nicx)

# anyOf(requirement:)

**Framework:** LightweightCodeRequirements  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a constraint that requires a launching process’s executable to satisfy any of the provided constraints.

## Declaration

```swift
func anyOf(@LaunchConstraintBuilder requirement: () -> [any LaunchConstraint]) -> any LaunchConstraint
```

## See Also

### Checking code requirements for launching processes

- [SecCodeCheckValidityWithProcessRequirement(code:flags:requirement:)](seccodecheckvaliditywithprocessrequirement%28code_flags_requirement_%29.md): Checks whether the code associated with a running process satisfies a lightweight code requirement.
- [launchRequirement](../foundation/process/launchrequirement.md)
- [LaunchCodeRequirement](launchcoderequirement.md): A lightweight code requirement that you use to evaluate the executable for a launching process.
- [allOf(requirement:)](allof%28requirement_%29-4gf5f.md): Creates a constraint that requires a launching process’s executable to satisfy all of the provided constraints.
- [LaunchConstraint](launchconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in launch code requirements.
- [LaunchConstraintBuilder](launchconstraintbuilder.md): A custom parameter attribute that constructs launch constraints from closures.
