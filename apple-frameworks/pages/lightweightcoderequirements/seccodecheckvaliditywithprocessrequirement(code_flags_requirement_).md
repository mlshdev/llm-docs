> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/seccodecheckvaliditywithprocessrequirement(code:flags:requirement:)](https://developer.apple.com/documentation/lightweightcoderequirements/seccodecheckvaliditywithprocessrequirement(code:flags:requirement:))

# SecCodeCheckValidityWithProcessRequirement(code:flags:requirement:)

**Framework:** LightweightCodeRequirements  
**Kind:** Function  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Checks whether the code associated with a running process satisfies a lightweight code requirement.

## Declaration

```swift
func SecCodeCheckValidityWithProcessRequirement(code: SecCode, flags: SecCSFlags, requirement: ProcessCodeRequirement) -> ValidationResult
```

<a id="discussion"></a>

## Discussion

Returns a validation result which indicates whether the code signature is valid, whether it matches the requirement, and if not one of those two, then why not.

## See Also

### Checking code requirements for launching processes

- [launchRequirement](../foundation/process/launchrequirement.md)
- [LaunchCodeRequirement](launchcoderequirement.md): A lightweight code requirement that you use to evaluate the executable for a launching process.
- [allOf(requirement:)](allof%28requirement_%29-4gf5f.md): Creates a constraint that requires a launching process’s executable to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-6nicx.md): Creates a constraint that requires a launching process’s executable to satisfy any of the provided constraints.
- [LaunchConstraint](launchconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in launch code requirements.
- [LaunchConstraintBuilder](launchconstraintbuilder.md): A custom parameter attribute that constructs launch constraints from closures.
