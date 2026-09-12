> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecopystaticcode(_:_:_:)](https://developer.apple.com/documentation/security/seccodecopystaticcode(_:_:_:))

# SecCodeCopyStaticCode(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a static code object representing the on-disk version of the given running code.

## Declaration

```swift
func SecCodeCopyStaticCode(_ code: SecCode, _ flags: SecCSFlags, _ staticCode: UnsafeMutablePointer<SecStaticCode?>) -> OSStatus
```

## Parameters

- `code`: A valid code object representing code running on the system.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) and [Code Signing Architecture Flags](code-signing-architecture-flags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `staticCode`: On return, a static code object representing the code in the file system that is the origin of the code specified by the `code` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the [SecCodeCopyPath(\_:\_:\_:)](seccodecopypath%28______%29.md) function to get the URL specifying the location on disk of the code represented by a code or static code object.

Many functions in the Code Signing Services API take either a static code object or a code object as an input parameter. For these functions, if you pass in a code reference, the function first translates it to a static code reference in the same manner as the [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md) function. In each such case, the parameter description documents this behavior.

<a id="Special-Considerations"></a>

### Special Considerations

The link established by this function is generally reliable but is not guaranteed to be secure.

## See Also

### Related Documentation

- [SecCodeCopyGuestWithAttributes(\_:\_:\_:\_:)](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [SecCodeCopyHost(\_:\_:\_:)](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecCodeCopySelf(\_:\_:)](seccodecopyself%28____%29.md): Retrieves the code object for the code making the call.

# SecCodeCopyStaticCode (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a static code object representing the on-disk version of the given running code.

## Declaration

```objectivec
OSStatus SecCodeCopyStaticCode(SecCodeRef code, SecCSFlags flags, SecStaticCodeRef*staticCode);
```

## Parameters

- `code`: A valid code object representing code running on the system.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) and [Code Signing Architecture Flags](code-signing-architecture-flags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `staticCode`: On return, a static code object representing the code in the file system that is the origin of the code specified by the `code` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

Use the [SecCodeCopyPath](seccodecopypath%28______%29.md) function to get the URL specifying the location on disk of the code represented by a code or static code object.

Many functions in the Code Signing Services API take either a static code object or a code object as an input parameter. For these functions, if you pass in a code reference, the function first translates it to a static code reference in the same manner as the [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md) function. In each such case, the parameter description documents this behavior.

<a id="Special-Considerations"></a>

### Special Considerations

The link established by this function is generally reliable but is not guaranteed to be secure.

## See Also

### Related Documentation

- [SecCodeCopyGuestWithAttributes](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [SecCodeCopyHost](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecCodeCopySelf](seccodecopyself%28____%29.md): Retrieves the code object for the code making the call.
