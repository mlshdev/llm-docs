> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_duplicate_name(_:_:_:)](https://developer.apple.com/documentation/gss/gss_duplicate_name(_:_:_:))

# gss_duplicate_name(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a copy of an internal name.

## Declaration

```swift
func gss_duplicate_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ src_name: gss_name_t, _ dest_name: UnsafeMutablePointer<gss_name_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `src_name`: The name to duplicate.
- `dest_name`: A pointer the function uses to return the copied name. Release the name using a call to the [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) function when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Inquiries

- [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name(\_:\_:\_:\_:)](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name(\_:\_:\_:\_:\_:)](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name(\_:\_:\_:)](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech(\_:\_:\_:)](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_aapl_change_password(\_:\_:\_:\_:)](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok(\_:\_:)](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.

# gss_duplicate_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a copy of an internal name.

## Declaration

```objectivec
OM_uint32 gss_duplicate_name(OM_uint32 *minor_status, gss_name_t const src_name, gss_name_t*dest_name);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `src_name`: The name to duplicate.
- `dest_name`: A pointer the function uses to return the copied name. Release the name using a call to the [gss_release_name](gss_release_name%28____%29.md) function when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Inquiries

- [gss_display_name](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_aapl_change_password](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.
