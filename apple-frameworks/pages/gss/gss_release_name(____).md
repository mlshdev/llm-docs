> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_name(_:_:)](https://developer.apple.com/documentation/gss/gss_release_name(_:_:))

# gss_release_name(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the resources associated with a name object.

## Declaration

```swift
func gss_release_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ input_name: UnsafeMutablePointer<gss_name_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: A pointer to the name that should be freed. The name is set to [GSS_C_NO_NAME](gss_c_no_name.md) when the function returns successfully.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name(\_:\_:\_:\_:)](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString(\_:)](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName(\_:\_:\_:)](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.

# gss_release_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Frees the resources associated with a name object.

## Declaration

```objectivec
OM_uint32 gss_release_name(OM_uint32 *minor_status, gss_name_t*input_name);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: A pointer to the name that should be freed. The name is set to [GSS_C_NO_NAME](gss_c_no_name.md) when the function returns successfully.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [gss_canonicalize_name](gss_canonicalize_name%28________%29.md): Converts an internal name into a mechanism name.
- [GSSNameCreateDisplayString](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
