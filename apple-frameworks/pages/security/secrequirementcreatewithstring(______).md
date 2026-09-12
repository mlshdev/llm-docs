> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementcreatewithstring(_:_:_:)](https://developer.apple.com/documentation/security/secrequirementcreatewithstring(_:_:_:))

# SecRequirementCreateWithString(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a code requirement object by compiling a valid text representation of a code requirement.

## Declaration

```swift
func SecRequirementCreateWithString(_ text: CFString, _ flags: SecCSFlags, _ requirement: UnsafeMutablePointer<SecRequirement?>) -> OSStatus
```

## Parameters

- `text`: The text form of a code requirement.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, contains a code requirement object that implements the conditions described in the text.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Code requirements and the code signing requirement language are documented in [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929).

If you use the [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md) function to create a code requirement object from a text string and later use the [SecRequirementCopyString(\_:\_:\_:)](secrequirementcopystring%28______%29.md) function to convert the object back to a string, the reconstituted text may differ in formatting, contain different source comments, and perform its validation functions in different order from the original. However, it is guaranteed that that the reconstituted text is functionally identical to the original. That is, recompiling the text using [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md) will produce a code requirement object that behaves identically to the first one you created.

# SecRequirementCreateWithString (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a code requirement object by compiling a valid text representation of a code requirement.

## Declaration

```objectivec
OSStatus SecRequirementCreateWithString(CFStringRef text, SecCSFlags flags, SecRequirementRef*requirement);
```

## Parameters

- `text`: The text form of a code requirement.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, contains a code requirement object that implements the conditions described in the text.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Code requirements and the code signing requirement language are documented in [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929).

If you use the [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md) function to create a code requirement object from a text string and later use the [SecRequirementCopyString](secrequirementcopystring%28______%29.md) function to convert the object back to a string, the reconstituted text may differ in formatting, contain different source comments, and perform its validation functions in different order from the original. However, it is guaranteed that that the reconstituted text is functionally identical to the original. That is, recompiling the text using [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md) will produce a code requirement object that behaves identically to the first one you created.
