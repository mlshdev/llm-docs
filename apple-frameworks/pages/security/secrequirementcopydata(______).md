> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secrequirementcopydata(_:_:_:)](https://developer.apple.com/documentation/security/secrequirementcopydata(_:_:_:))

# SecRequirementCopyData(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Extracts a binary form of a code requirement from a code requirement object.

## Declaration

```swift
func SecRequirementCopyData(_ requirement: SecRequirement, _ flags: SecCSFlags, _ data: UnsafeMutablePointer<CFData?>) -> OSStatus
```

## Parameters

- `requirement`: A valid code requirement object.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `data`: On return, the code requirement in the form of a binary blob.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can extract the binary blob from the [CFData](../corefoundation/cfdata.md) object and store it in any form you wish. Use of this function is the only publicly supported way to get such a data blob. You can use the [SecRequirementCreateWithData(\_:\_:\_:)](secrequirementcreatewithdata%28______%29.md) function to convert it back to a code requirement object.

# SecRequirementCopyData (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Extracts a binary form of a code requirement from a code requirement object.

## Declaration

```objectivec
OSStatus SecRequirementCopyData(SecRequirementRef requirement, SecCSFlags flags, CFDataRef*data);
```

## Parameters

- `requirement`: A valid code requirement object.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `data`: On return, the code requirement in the form of a binary blob.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

You can extract the binary blob from the [CFDataRef](../corefoundation/cfdata.md) object and store it in any form you wish. Use of this function is the only publicly supported way to get such a data blob. You can use the [SecRequirementCreateWithData](secrequirementcreatewithdata%28______%29.md) function to convert it back to a code requirement object.
