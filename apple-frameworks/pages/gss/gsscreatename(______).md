> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscreatename(_:_:_:)](https://developer.apple.com/documentation/gss/gsscreatename(_:_:_:))

# GSSCreateName(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a GSS name given a buffer and a type.

## Declaration

```swift
func GSSCreateName(_ name: CFTypeRef, _ name_type: gss_const_OID, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> gss_name_t?
```

## Parameters

- `name`: A name buffer describing the credential. The buffer is either a `CFDataRef` or a `CFStringRef` containing the name.
- `name_type`: An OID name type constant, such as [GSS_C_NT_USER_NAME](gss_c_nt_user_name.md).
- `error`: A `CFErrorRef` pointer that the function sets to point at a new error object if the function call fails, or `NULL` to ignore the error. If the error exists, it describes the reason for the failure, and you are responsible for releasing it with `CFRelease`.

<a id="return-value"></a>

## Return Value

A GSS name for the given buffer and type, or `NULL` on failure. Release this object with a call to [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) when you are done with it.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString(\_:)](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [gss_release_name(\_:\_:)](gss_release_name%28____%29.md): Frees the resources associated with a name object.

# GSSCreateName (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a GSS name given a buffer and a type.

## Declaration

```objectivec
gss_name_tGSSCreateName(CFTypeRef name, gss_const_OID name_type, CFErrorRef*error);
```

## Parameters

- `name`: A name buffer describing the credential. The buffer is either a `CFDataRef` or a `CFStringRef` containing the name.
- `name_type`: An OID name type constant, such as [GSS_C_NT_USER_NAME](gss_c_nt_user_name.md).
- `error`: A `CFErrorRef` pointer that the function sets to point at a new error object if the function call fails, or `NULL` to ignore the error. If the error exists, it describes the reason for the failure, and you are responsible for releasing it with `CFRelease`.

<a id="return-value"></a>

## Return Value

A GSS name for the given buffer and type, or `NULL` on failure. Release this object with a call to [gss_release_name](gss_release_name%28____%29.md) when you are done with it.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [gss_release_name](gss_release_name%28____%29.md): Frees the resources associated with a name object.
