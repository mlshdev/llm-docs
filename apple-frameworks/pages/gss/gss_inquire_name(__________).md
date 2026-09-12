> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_name(_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_name(_:_:_:_:_:))

# gss_inquire_name(\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a name.

## Declaration

```swift
func gss_inquire_name(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ input_name: gss_name_t, _ name_is_MN: UnsafeMutablePointer<Int32>, _ MN_mech: UnsafeMutablePointer<gss_OID?>?, _ attrs: UnsafeMutablePointer<gss_buffer_set_t?>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The name to examine.
- `name_is_MN`: A pointer the function uses to return a status flag indicating whether or not the name is a mechanism name. The value is non-zero if it is a mechanism name.
- `MN_mech`: A pointer the function uses to return an object identifier indicating the first mechanism found to support the name.
- `attrs`: A pointer the function uses to return an attributes buffer.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Inquiries

- [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name(\_:\_:\_:\_:)](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_mechs_for_name(\_:\_:\_:)](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech(\_:\_:\_:)](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name(\_:\_:\_:)](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password(\_:\_:\_:\_:)](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok(\_:\_:)](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.

# gss_inquire_name (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a name.

## Declaration

```objectivec
OM_uint32 gss_inquire_name(OM_uint32 *minor_status, gss_name_t input_name, int *name_is_MN, gss_OID*MN_mech, gss_buffer_set_t*attrs);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `input_name`: The name to examine.
- `name_is_MN`: A pointer the function uses to return a status flag indicating whether or not the name is a mechanism name. The value is non-zero if it is a mechanism name.
- `MN_mech`: A pointer the function uses to return an object identifier indicating the first mechanism found to support the name.
- `attrs`: A pointer the function uses to return an attributes buffer.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Inquiries

- [gss_display_name](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_mechs_for_name](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
- [gss_userok](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.
