> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecopydesignatedrequirement(_:_:_:)](https://developer.apple.com/documentation/security/seccodecopydesignatedrequirement(_:_:_:))

# SecCodeCopyDesignatedRequirement(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the designated code requirement of signed code.

## Declaration

```swift
func SecCodeCopyDesignatedRequirement(_ code: SecStaticCode, _ flags: SecCSFlags, _ requirement: UnsafeMutablePointer<SecRequirement?>) -> OSStatus
```

## Parameters

- `code`: The code or static code object for which you want the designated requirement. If you provide a code object, the function processes it in the same manner as the  [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md) function.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, the code’s designated requirement. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The designated requirement is the internal code requirement that the code specifies as the way to identify it. See [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929) for a discussion of code requirements and designated requirements.

If the code contains an explicit designated requirement, a copy of that is returned. If it doesn’t, a designated requirement is constructed from the code’s signing authority and its embedded unique identifier. No designated requirement can be obtained from unsigned code. Code that is modified after being signed, that has been signed improperly, or whose signature has become invalid, may or may not yield a designated requirement. This function does not validate the signature.

## See Also

### Related Documentation

- [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md): Retrieves various pieces of information from a code signature.

# SecCodeCopyDesignatedRequirement (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the designated code requirement of signed code.

## Declaration

```objectivec
OSStatus SecCodeCopyDesignatedRequirement(SecStaticCodeRef code, SecCSFlags flags, SecRequirementRef*requirement);
```

## Parameters

- `code`: The code or static code object for which you want the designated requirement. If you provide a code object, the function processes it in the same manner as the  [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md) function.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `requirement`: On return, the code’s designated requirement. In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The designated requirement is the internal code requirement that the code specifies as the way to identify it. See [Code Signing Guide](https://developer.apple.com/library/archive/documentation/Security/Conceptual/CodeSigningGuide/Introduction/Introduction.html#//apple_ref/doc/uid/TP40005929) for a discussion of code requirements and designated requirements.

If the code contains an explicit designated requirement, a copy of that is returned. If it doesn’t, a designated requirement is constructed from the code’s signing authority and its embedded unique identifier. No designated requirement can be obtained from unsigned code. Code that is modified after being signed, that has been signed improperly, or whose signature has become invalid, may or may not yield a designated requirement. This function does not validate the signature.

## See Also

### Related Documentation

- [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md): Retrieves various pieces of information from a code signature.
