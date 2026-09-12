> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_userok(_:_:)](https://developer.apple.com/documentation/gss/gss_userok(_:_:))

# gss_userok(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a flag that indicates if a given user is authorized.

## Declaration

```swift
func gss_userok(_ name: gss_name_t, _ user: UnsafePointer<CChar>) -> Int32
```

## Parameters

- `name`: A name object.
- `user`: A C string that is first imported as a name object with name type [GSS_C_NT_USER_NAME](gss_c_nt_user_name.md) and then authorized against the name object given by the first parameter.

<a id="return-value"></a>

## Return Value

A non-zero integer when the user is authorized and zero otherwise.

## See Also

### Inquiries

- [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name(\_:\_:\_:\_:)](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name(\_:\_:\_:\_:\_:)](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name(\_:\_:\_:)](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech(\_:\_:\_:)](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name(\_:\_:\_:)](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password(\_:\_:\_:\_:)](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.

# gss_userok (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a flag that indicates if a given user is authorized.

## Declaration

```objectivec
int gss_userok(gss_name_t const name, const char *user);
```

## Parameters

- `name`: A name object.
- `user`: A C string that is first imported as a name object with name type [GSS_C_NT_USER_NAME](gss_c_nt_user_name.md) and then authorized against the name object given by the first parameter.

<a id="return-value"></a>

## Return Value

A non-zero integer when the user is authorized and zero otherwise.

## See Also

### Inquiries

- [gss_display_name](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_aapl_change_password](gss_aapl_change_password%28________%29.md): Changes the password associated with a name.
