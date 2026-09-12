> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_canonicalize_name(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_canonicalize_name(_:_:_:_:))

# gss_canonicalize_name(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Converts an internal name into a mechanism name.

## Declaration

```swift
func gss_canonicalize_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ input_name: gss_name_t, _ mech_type: gss_OID, _ output_name: UnsafeMutablePointer<gss_name_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The name to convert.
- `mech_type`: The mechanism for which the name should be converted.
- `output_name`: A pointer the function uses to return the canonicalized name. Release the name with a call to the [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) function when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [GSSNameCreateDisplayString(\_:)](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName(\_:\_:\_:)](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name(\_:\_:)](gss_release_name%28____%29.md): Frees the resources associated with a name object.

# gss_canonicalize_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Converts an internal name into a mechanism name.

## Declaration

```objectivec
OM_uint32 gss_canonicalize_name(OM_uint32 *minor_status, gss_name_t const input_name, gss_OID const mech_type, gss_name_t*output_name);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The name to convert.
- `mech_type`: The mechanism for which the name should be converted.
- `output_name`: A pointer the function uses to return the canonicalized name. Release the name with a call to the [gss_release_name](gss_release_name%28____%29.md) function when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Creation and Destruction

- [gss_name_t](gss_name_t.md): A pointer to an opaque type that you use to communicate name objects with GSS-API functions.
- [gss_const_name_t](gss_const_name_t.md): A pointer to an immutable version of the opaque descriptor used to exchange name objects with GSS-API functions.
- [GSSNameCreateDisplayString](gssnamecreatedisplaystring%28__%29.md): Returns a string suitable for displaying to the user from a GSS name.
- [GSSCreateName](gsscreatename%28______%29.md): Returns a GSS name given a buffer and a type.
- [gss_release_name](gss_release_name%28____%29.md): Frees the resources associated with a name object.
