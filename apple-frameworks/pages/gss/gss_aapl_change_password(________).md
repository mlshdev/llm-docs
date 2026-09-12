> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_aapl_change_password(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_aapl_change_password(_:_:_:_:))

# gss_aapl_change_password(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Changes the password associated with a name.

## Declaration

```swift
func gss_aapl_change_password(_ name: gss_name_t, _ mech: gss_const_OID, _ attributes: CFDictionary, _ error: UnsafeMutablePointer<Unmanaged<CFError>?>?) -> OM_uint32
```

## Parameters

- `name`: The GSS name for which you want to change the password.
- `mech`: The underlying mechanism in use. For example, use [GSS_KRB5_MECHANISM](gss_krb5_mechanism.md) for Kerberos.
- `attributes`: A dictionary that you use to specify the old and new passwords as string values. Use the keys [kGSSChangePasswordOldPassword](kgsschangepasswordoldpassword.md) and [kGSSChangePasswordNewPassword](kgsschangepasswordnewpassword.md) for the old and new passwords, respectively.
- `error`: A `CFErrorRef` pointer that the function sets to point at a new error object if the function call fails. Pass `NULL` to ignore this error. When an error does exist, it describes the reason for the failure, and you are responsible for releasing it with `CFRelease`.

<a id="return-value"></a>

## Return Value

A major status code set to [GSS_S_COMPLETE](gss_s_complete.md) if the call succeeds, or some other value indicating the reason for failure if not.

## See Also

### Inquiries

- [gss_display_name(\_:\_:\_:\_:)](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name(\_:\_:\_:\_:)](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name(\_:\_:\_:\_:\_:)](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name(\_:\_:\_:)](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech(\_:\_:\_:)](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name(\_:\_:\_:)](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_userok(\_:\_:)](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.

# gss_aapl_change_password (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 6.0+ · iPadOS 6.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Changes the password associated with a name.

## Declaration

```objectivec
OM_uint32 gss_aapl_change_password(gss_name_t const name, gss_const_OID mech, CFDictionaryRef attributes, CFErrorRef*error);
```

## Parameters

- `name`: The GSS name for which you want to change the password.
- `mech`: The underlying mechanism in use. For example, use [GSS_KRB5_MECHANISM](gss_krb5_mechanism.md) for Kerberos.
- `attributes`: A dictionary that you use to specify the old and new passwords as string values. Use the keys [kGSSChangePasswordOldPassword](kgsschangepasswordoldpassword.md) and [kGSSChangePasswordNewPassword](kgsschangepasswordnewpassword.md) for the old and new passwords, respectively.
- `error`: A `CFErrorRef` pointer that the function sets to point at a new error object if the function call fails. Pass `NULL` to ignore this error. When an error does exist, it describes the reason for the failure, and you are responsible for releasing it with `CFRelease`.

<a id="return-value"></a>

## Return Value

A major status code set to [GSS_S_COMPLETE](gss_s_complete.md) if the call succeeds, or some other value indicating the reason for failure if not.

## See Also

### Inquiries

- [gss_display_name](gss_display_name%28________%29.md): Converts a name in the internal format to an octet string and the associated name type.
- [gss_compare_name](gss_compare_name%28________%29.md): Returns a flag that indicates if two names in internal name format refer to the same entity.
- [gss_inquire_name](gss_inquire_name%28__________%29.md): Returns information about a name.
- [gss_inquire_mechs_for_name](gss_inquire_mechs_for_name%28______%29.md): Returns a list of mechanisms that support a particular name type.
- [gss_inquire_names_for_mech](gss_inquire_names_for_mech%28______%29.md): Returns a list of name types that a given mechanism supports.
- [gss_duplicate_name](gss_duplicate_name%28______%29.md): Returns a copy of an internal name.
- [gss_userok](gss_userok%28____%29.md): Returns a flag that indicates if a given user is authorized.
