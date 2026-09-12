> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/seccodecopyself(_:_:)](https://developer.apple.com/documentation/security/seccodecopyself(_:_:))

# SecCodeCopySelf(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the code object for the code making the call.

## Declaration

```swift
func SecCodeCopySelf(_ flags: SecCSFlags, _ self: UnsafeMutablePointer<SecCode?>) -> OSStatus
```

## Parameters

- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `self`: On return, a code object representing the caller.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

A code object (that is, an object of type [SecCode](seccode.md)) represents code that is running on the system. The code can be a UNIX process, a script, an applet, a widget, or any other separately-identifiable code. You can use the code object returned by this function as input to other functions in the Code Signing Services API. This function returns a code object for the code that calls it regardless of whether the code is signed. Call the [SecCodeCheckValidity(\_:\_:\_:)](seccodecheckvalidity%28______%29.md) or [SecCodeCheckValidityWithErrors(\_:\_:\_:\_:)](seccodecheckvaliditywitherrors%28________%29.md) function to determine whether the code has a valid signature.

If the code calling this function is either a dedicated host or has called the [SecHostSelectGuest](sechostselectguest.md) function, then the host is considered to be acting as a proxy for its dedicated or selected guest and the [SecCodeCopySelf(\_:\_:)](seccodecopyself%28____%29.md) function returns a code object for that guest.  See [kSecCSDedicatedHost](kseccsdedicatedhost.md) for a discussion of dedicated hosts.

## See Also

### Related Documentation

- [SecCodeCopyGuestWithAttributes(\_:\_:\_:\_:)](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [SecCodeCopyHost(\_:\_:\_:)](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.

# SecCodeCopySelf (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Retrieves the code object for the code making the call.

## Declaration

```objectivec
OSStatus SecCodeCopySelf(SecCSFlags flags, SecCodeRef*self);
```

## Parameters

- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `self`: On return, a code object representing the caller.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

A code object (that is, an object of type [SecCodeRef](seccode.md)) represents code that is running on the system. The code can be a UNIX process, a script, an applet, a widget, or any other separately-identifiable code. You can use the code object returned by this function as input to other functions in the Code Signing Services API. This function returns a code object for the code that calls it regardless of whether the code is signed. Call the [SecCodeCheckValidity](seccodecheckvalidity%28______%29.md) or [SecCodeCheckValidityWithErrors](seccodecheckvaliditywitherrors%28________%29.md) function to determine whether the code has a valid signature.

If the code calling this function is either a dedicated host or has called the [SecHostSelectGuest](sechostselectguest.md) function, then the host is considered to be acting as a proxy for its dedicated or selected guest and the [SecCodeCopySelf](seccodecopyself%28____%29.md) function returns a code object for that guest.  See [kSecCSDedicatedHost](kseccsdedicatedhost.md) for a discussion of dedicated hosts.

## See Also

### Related Documentation

- [SecCodeCopyGuestWithAttributes](seccodecopyguestwithattributes%28________%29.md): Asks a code host to identify one of its guests given the type and value of specific attributes of the guest code.
- [SecCodeCopyHost](seccodecopyhost%28______%29.md): Retrieves the code object for the host of specified guest code.
- [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.
