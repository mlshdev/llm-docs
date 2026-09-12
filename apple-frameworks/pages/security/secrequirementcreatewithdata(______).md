> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementcreatewithdata(_:_:_:)](https://developer.apple.com/documentation/security/secrequirementcreatewithdata(_:_:_:))

# SecRequirementCreateWithData(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a code requirement object from the binary form of a code requirement.

## Declaration

```swift
func SecRequirementCreateWithData(_ data: CFData, _ flags: SecCSFlags, _ requirement: UnsafeMutablePointer<SecRequirement?>) -> OSStatus
```

## Parameters

- `data`: A binary blob created earlier from a valid code requirement object by calling the [SecRequirementCopyData(\_:\_:\_:)](secrequirementcopydata%28______%29.md) function.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, contains a code requirement object that behaves identically to the one from which the data blob was obtained.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use the [SecRequirementCopyData(\_:\_:\_:)](secrequirementcopydata%28______%29.md) function to convert a code requirement object to a binary blob, and store the blob in any form you wish. When you are ready to use the code requirement in another function call, you can use the [SecRequirementCreateWithData(\_:\_:\_:)](secrequirementcreatewithdata%28______%29.md) function to convert it back to a code requirement object.

# SecRequirementCreateWithData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a code requirement object from the binary form of a code requirement.

## Declaration

```objectivec
OSStatus SecRequirementCreateWithData(CFDataRef data, SecCSFlags flags, SecRequirementRef*requirement);
```

## Parameters

- `data`: A binary blob created earlier from a valid code requirement object by calling the [SecRequirementCopyData](secrequirementcopydata%28______%29.md) function.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, contains a code requirement object that behaves identically to the one from which the data blob was obtained.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can use the [SecRequirementCopyData](secrequirementcopydata%28______%29.md) function to convert a code requirement object to a binary blob, and store the blob in any form you wish. When you are ready to use the code requirement in another function call, you can use the [SecRequirementCreateWithData](secrequirementcreatewithdata%28______%29.md) function to convert it back to a code requirement object.
