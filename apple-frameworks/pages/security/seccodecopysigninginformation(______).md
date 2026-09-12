> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecopysigninginformation(_:_:_:)](https://developer.apple.com/documentation/security/seccodecopysigninginformation(_:_:_:))

# SecCodeCopySigningInformation(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves various pieces of information from a code signature.

## Declaration

```swift
func SecCodeCopySigningInformation(_ code: SecStaticCode, _ flags: SecCSFlags, _ information: UnsafeMutablePointer<CFDictionary?>) -> OSStatus
```

## Parameters

- `code`: The code or static code object from whose signature you wish to retrieve information. If you provide a code object, the function processes it in the same manner as the [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md) function—that is, the static code signing information is obtained from the signature on disk. Note that dynamic information ([kSecCSDynamicInformation](kseccsdynamicinformation.md)) can be obtained only for a code object, not for a static code object.
- `flags`: Specify any or all of the flags in [Code Signing Information Flags](code-signing-information-flags.md) to select what information to return. A basic set of values is returned regardless; specify [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for just those.
- `information`: On return, a dictionary containing information about the code. The contents of the dictionary depend on the flags you pass in the `flags` parameter. Regardless of flags, the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) key is always present if the code is signed and always absent if the code is unsigned. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md) for descriptions of the dictionary keys.  In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The amount and detail level of the data returned is controlled by the flags passed to the call.

If the code exists but is not signed, this function call succeeds and returns a dictionary that does not contain the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) key. This is the recommended way to check quickly whether code is signed if that is the only information you need. However, note that this function does not validate the signature.

If the signing data for the code is corrupt or invalid, this function may fail or it may return partial data. To ensure that only valid data is returned (and errors are raised for invalid data), you must successfully call the [SecCodeCheckValidity(\_:\_:\_:)](seccodecheckvalidity%28______%29.md) or [SecCodeCheckValidityWithErrors(\_:\_:\_:\_:)](seccodecheckvaliditywitherrors%28________%29.md) function before calling [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some of the objects returned in the information dictionary are (retained) “live” API objects used by the code signing infrastructure. Making changes to these objects is unsupported and may cause subsequent code signing operations on the affected code to behave in undefined ways.

## See Also

### Related Documentation

- [SecCodeCopyDesignatedRequirement(\_:\_:\_:)](seccodecopydesignatedrequirement%28______%29.md): Retrieves the designated code requirement of signed code.
- [SecCodeCopyPath(\_:\_:\_:)](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.

# SecCodeCopySigningInformation (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves various pieces of information from a code signature.

## Declaration

```objectivec
OSStatus SecCodeCopySigningInformation(SecStaticCodeRef code, SecCSFlags flags, CFDictionaryRef*information);
```

## Parameters

- `code`: The code or static code object from whose signature you wish to retrieve information. If you provide a code object, the function processes it in the same manner as the [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md) function—that is, the static code signing information is obtained from the signature on disk. Note that dynamic information ([kSecCSDynamicInformation](kseccsdynamicinformation.md)) can be obtained only for a code object, not for a static code object.
- `flags`: Specify any or all of the flags in [Code Signing Information Flags](code-signing-information-flags.md) to select what information to return. A basic set of values is returned regardless; specify [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for just those.
- `information`: On return, a dictionary containing information about the code. The contents of the dictionary depend on the flags you pass in the `flags` parameter. Regardless of flags, the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) key is always present if the code is signed and always absent if the code is unsigned. See [Signing Information Dictionary Keys](signing-information-dictionary-keys.md) for descriptions of the dictionary keys.  In Objective-C, call the [CFRelease](../corefoundation/cfrelease.md) function to release this object when you are finished with it.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

The amount and detail level of the data returned is controlled by the flags passed to the call.

If the code exists but is not signed, this function call succeeds and returns a dictionary that does not contain the [kSecCodeInfoIdentifier](kseccodeinfoidentifier.md) key. This is the recommended way to check quickly whether code is signed if that is the only information you need. However, note that this function does not validate the signature.

If the signing data for the code is corrupt or invalid, this function may fail or it may return partial data. To ensure that only valid data is returned (and errors are raised for invalid data), you must successfully call the [SecCodeCheckValidity](seccodecheckvalidity%28______%29.md) or [SecCodeCheckValidityWithErrors](seccodecheckvaliditywitherrors%28________%29.md) function before calling [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md).

<a id="Special-Considerations"></a>

### Special Considerations

Some of the objects returned in the information dictionary are (retained) “live” API objects used by the code signing infrastructure. Making changes to these objects is unsupported and may cause subsequent code signing operations on the affected code to behave in undefined ways.

## See Also

### Related Documentation

- [SecCodeCopyDesignatedRequirement](seccodecopydesignatedrequirement%28______%29.md): Retrieves the designated code requirement of signed code.
- [SecCodeCopyPath](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.
