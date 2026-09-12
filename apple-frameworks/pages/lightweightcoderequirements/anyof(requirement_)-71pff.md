> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/anyof(requirement:)-71pff](https://developer.apple.com/documentation/lightweightcoderequirements/anyof(requirement:)-71pff)

# anyOf(requirement:)

**Framework:** LightweightCodeRequirements  
**Kind:** Function  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

Creates a constraint that requires code on disk to satisfy any of the provided constraints.

## Declaration

```swift
func anyOf(@OnDiskConstraintBuilder requirement: () -> [any OnDiskConstraint]) -> any OnDiskConstraint
```

## See Also

### Checking code requirements for code files on disk

- [SecStaticCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](secstaticcodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether static code on disk satisfies a lightweight code requirement.
- [SecCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](seccodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether code on disk satisfies a lightweight code requirement.
- [ValidationResult](validationresult.md): A structure that represents the result of testing a lightweight code requirement.
- [OnDiskCodeRequirement](ondiskcoderequirement.md): A lightweight code requirement that you use to evaluate a code file on disk.
- [allOf(requirement:)](allof%28requirement_%29-2ocwl.md): Creates a constraint that requires code on disk to satisfy all of the provided constraints.
- [OnDiskConstraint](ondiskconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in on-disk code requirements.
- [OnDiskCodeSigningFlags](ondiskcodesigningflags.md): A constraint that tests the code-signing flags of a code file on disk.
- [OnDiskConstraintBuilder](ondiskconstraintbuilder.md): A custom parameter attribute that constructs on-disk constraints from closures.
