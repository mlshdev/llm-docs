> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/lightweightcoderequirements/ondiskcodesigningflags](https://developer.apple.com/documentation/lightweightcoderequirements/ondiskcodesigningflags)

# OnDiskCodeSigningFlags

**Framework:** LightweightCodeRequirements  
**Kind:** Structure  
**Availability:** iOS 17.4+ · iPadOS 17.4+ · Mac Catalyst 17.4+ · macOS 14.4+ · tvOS 17.4+ · visionOS 1.1+ · watchOS 10.4+

A constraint that tests the code-signing flags of a code file on disk.

## Declaration

```swift
struct OnDiskCodeSigningFlags
```

## Topics

### Structures

- [OnDiskCodeSigningFlags.ValueSet](ondiskcodesigningflags/valueset.md): Code signing flags that can be set on code on disk.

### Type Aliases

- [OnDiskCodeSigningFlags.DataType](ondiskcodesigningflags/datatype.md): The basic input data type for this constraint: `OnDiskCodeSigningFlags.ValueSet`
- [OnDiskCodeSigningFlags.OutType](ondiskcodesigningflags/outtype.md): The type of this constraint: [OnDiskCodeSigningFlags](ondiskcodesigningflags.md)

### Type Methods

- [isSuperset(of:)](ondiskcodesigningflags/issuperset%28of_%29.md): Matches when the code signing flags on the file/slice are a superset of the specified flags.

## Relationships

### Conforms To

- [Decodable](https://developer.apple.com/documentation/swift/decodable)
- [Encodable](https://developer.apple.com/documentation/swift/encodable)
- [OnDiskConstraint](ondiskconstraint.md)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Checking code requirements for code files on disk

- [SecStaticCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](secstaticcodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether static code on disk satisfies a lightweight code requirement.
- [SecCodeCheckValidityWithOnDiskRequirement(code:flags:requirement:)](seccodecheckvaliditywithondiskrequirement%28code_flags_requirement_%29.md): Checks whether code on disk satisfies a lightweight code requirement.
- [ValidationResult](validationresult.md): A structure that represents the result of testing a lightweight code requirement.
- [OnDiskCodeRequirement](ondiskcoderequirement.md): A lightweight code requirement that you use to evaluate a code file on disk.
- [allOf(requirement:)](allof%28requirement_%29-2ocwl.md): Creates a constraint that requires code on disk to satisfy all of the provided constraints.
- [anyOf(requirement:)](anyof%28requirement_%29-71pff.md): Creates a constraint that requires code on disk to satisfy any of the provided constraints.
- [OnDiskConstraint](ondiskconstraint.md): A protocol to which a lightweight code requirement constraint conforms if you can use it in on-disk code requirements.
- [OnDiskConstraintBuilder](ondiskconstraintbuilder.md): A custom parameter attribute that constructs on-disk constraints from closures.
