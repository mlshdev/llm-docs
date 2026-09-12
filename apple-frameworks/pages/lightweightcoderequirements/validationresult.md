> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/validationresult](https://developer.apple.com/documentation/lightweightcoderequirements/validationresult)

# ValidationResult

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** Mac Catalyst 17.4+ · macOS 14.4+

A structure that represents the result of testing a lightweight code requirement.

## Declaration

```swift
struct ValidationResult
```

## Topics

### Instance Properties

- [failureReason](validationresult/failurereason.md)
- [requirementMatched](validationresult/requirementmatched.md)
- [signatureIsValid](validationresult/signatureisvalid.md)

## See Also

### Checking code requirements for code files on disk

- [SecStaticCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](secstaticcodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether static code on disk satisfies a lightweight code requirement.
- [SecCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](seccodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether code on disk satisfies a lightweight code requirement.
- [OnDiskCodeRequirement](ondiskcoderequirement.md): A lightweight code requirement that you use to evaluate a code file on disk.
- [allOf(requirement:)](allof%28requirement_%29-2ocwl.md): Creates a constraint that requires code on disk to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-71pff.md): Creates a constraint that requires code on disk to satisfy any of the provided constraints.
- [OnDiskConstraint](ondiskconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in on-disk code requirements.
- [OnDiskCodeSigningFlags](ondiskcodesigningflags.md): A constraint that tests the code-signing flags of a code file on disk.
- [OnDiskConstraintBuilder](ondiskconstraintbuilder.md): A custom parameter attribute that constructs on-disk constraints from closures.
