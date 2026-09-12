> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/secstaticcodecreatewithpath(_:_:_:)](https://developer.apple.com/documentation/security/secstaticcodecreatewithpath(_:_:_:))

# SecStaticCodeCreateWithPath(\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a static code object representing the code at a specified file system path.

## Declaration

```swift
func SecStaticCodeCreateWithPath(_ path: CFURL, _ flags: SecCSFlags, _ staticCode: UnsafeMutablePointer<SecStaticCode?>) -> OSStatus
```

## Parameters

- `path`: A URL identifying the location on disk of the code for which you want a static code object. For bundles, pass a URL to the root directory of the bundle. For single files, pass a URL to the file. If you pass a URL to the main executable of a bundle, the bundle as a whole is generally recognized. Only absolute paths should be used.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `staticCode`: On return, the static code object representing the code you specified in the `path` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

A static code object is not inherently linked to running code in the system.

It is possible to create a static code object from unsigned code. Although most uses of such an object cause the function to fail and return the result code `errSecCSUnsigned` error, you can call the [SecCodeCopyPath(\_:\_:\_:)](seccodecopypath%28______%29.md) and [SecCodeCopySigningInformation(\_:\_:\_:)](seccodecopysigninginformation%28______%29.md) functions for such objects.

## See Also

### Related Documentation

- [SecCodeCopyPath(\_:\_:\_:)](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.
- [SecCodeCopyStaticCode(\_:\_:\_:)](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.

# SecStaticCodeCreateWithPath (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Creates a static code object representing the code at a specified file system path.

## Declaration

```objectivec
OSStatus SecStaticCodeCreateWithPath(CFURLRef path, SecCSFlags flags, SecStaticCodeRef*staticCode);
```

## Parameters

- `path`: A URL identifying the location on disk of the code for which you want a static code object. For bundles, pass a URL to the root directory of the bundle. For single files, pass a URL to the file. If you pass a URL to the main executable of a bundle, the bundle as a whole is generally recognized. Only absolute paths should be used.
- `flags`: Optional flags; see [SecCSFlags](seccsflags.md) for possible values. Pass [kSecCSDefaultFlags](seccsflags/kseccsdefaultflags.md) for standard behavior.
- `staticCode`: On return, the static code object representing the code you specified in the `path` parameter.

<a id="return-value"></a>

## Return Value

A result code. See [Code Signing Services Result Codes](code-signing-services-result-codes.md).

<a id="Discussion"></a>

## Discussion

A static code object is not inherently linked to running code in the system.

It is possible to create a static code object from unsigned code. Although most uses of such an object cause the function to fail and return the result code `errSecCSUnsigned` error, you can call the [SecCodeCopyPath](seccodecopypath%28______%29.md) and [SecCodeCopySigningInformation](seccodecopysigninginformation%28______%29.md) functions for such objects.

## See Also

### Related Documentation

- [SecCodeCopyPath](seccodecopypath%28______%29.md): Retrieves the location on disk of signed code, given a code or static code object.
- [SecCodeCopyStaticCode](seccodecopystaticcode%28______%29.md): Returns a static code object representing the on-disk version of the given running code.
