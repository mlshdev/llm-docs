> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/seccodecheckvaliditywithondiskrequirement(code:flags:requirement:)](https://developer.apple.com/documentation/lightweightcoderequirements/seccodecheckvaliditywithondiskrequirement(code:flags:requirement:))

# SecCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)

**Framework:** LightweightCodeRequirements  
**Kind:** Function  
**Availability:** Mac Catalyst 18.0+ · macOS 15.0+

Checks whether code on disk satisfies a lightweight code requirement.

## Declaration

```swift
func SecCodeCheckValidityWithOnDiskRequirement(code: SecCode, flags: SecCSFlags, requirement: OnDiskCodeRequirement) -> ValidationResult
```

<a id="discussion"></a>

## Discussion

Returns a validation result which indicates whether the code signature is valid, whether it matches the requirement, and if not one of those two, then why not.

## See Also

### Checking code requirements for code files on disk

- [SecStaticCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](secstaticcodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether static code on disk satisfies a lightweight code requirement.
- [ValidationResult](validationresult.md): A structure that represents the result of testing a lightweight code requirement.
- [OnDiskCodeRequirement](ondiskcoderequirement.md): A lightweight code requirement that you use to evaluate a code file on disk.
- [allOf(requirement:)](allof%28requirement_%29-2ocwl.md): Creates a constraint that requires code on disk to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-71pff.md): Creates a constraint that requires code on disk to satisfy any of the provided constraints.
- [OnDiskConstraint](ondiskconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in on-disk code requirements.
- [OnDiskCodeSigningFlags](ondiskcodesigningflags.md): A constraint that tests the code-signing flags of a code file on disk.
- [OnDiskConstraintBuilder](ondiskconstraintbuilder.md): A custom parameter attribute that constructs on-disk constraints from closures.
