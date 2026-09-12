> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementcopystring(_:_:_:)](https://developer.apple.com/documentation/security/secrequirementcopystring(_:_:_:))

# SecRequirementCopyString(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Converts a code requirement object into text form.

## Declaration

```swift
func SecRequirementCopyString(_ requirement: SecRequirement, _ flags: SecCSFlags, _ text: UnsafeMutablePointer<CFString?>) -> OSStatus
```

## Parameters

- `requirement`: A valid code requirement object.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `text`: On return, a text representation of the code requirement.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you use the [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md) or [SecRequirementCreateWithStringAndErrors(\_:\_:\_:\_:)](secrequirementcreatewithstringanderrors%28________%29.md) function to create a code requirement object from a text string and later use the [SecRequirementCopyString(\_:\_:\_:)](secrequirementcopystring%28______%29.md) function to convert the object back to a string, the reconstituted text may differ in formatting, contain different source comments, and perform its validation functions in different order from the original. However, it is guaranteed that that the reconstituted text is functionally identical to the original. That is, recompiling the text using [SecRequirementCreateWithString(\_:\_:\_:)](secrequirementcreatewithstring%28______%29.md) will produce a code requirement object that behaves identically to the first one you created.

# SecRequirementCopyString (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Converts a code requirement object into text form.

## Declaration

```objectivec
OSStatus SecRequirementCopyString(SecRequirementRef requirement, SecCSFlags flags, CFStringRef*text);
```

## Parameters

- `requirement`: A valid code requirement object.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `text`: On return, a text representation of the code requirement.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

If you use the [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md) or [SecRequirementCreateWithStringAndErrors](secrequirementcreatewithstringanderrors%28________%29.md) function to create a code requirement object from a text string and later use the [SecRequirementCopyString](secrequirementcopystring%28______%29.md) function to convert the object back to a string, the reconstituted text may differ in formatting, contain different source comments, and perform its validation functions in different order from the original. However, it is guaranteed that that the reconstituted text is functionally identical to the original. That is, recompiling the text using [SecRequirementCreateWithString](secrequirementcreatewithstring%28______%29.md) will produce a code requirement object that behaves identically to the first one you created.
