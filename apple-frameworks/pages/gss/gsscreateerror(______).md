> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscreateerror(_:_:_:)](https://developer.apple.com/documentation/gss/gsscreateerror(_:_:_:))

# GSSCreateError(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns an error object based on GSS-API major and minor status codes.

## Declaration

```swift
func GSSCreateError(_ mech: gss_const_OID, _ major_status: OM_uint32, _ minor_status: OM_uint32) -> Unmanaged<CFError>?
```

## Parameters

- `mech`: The underlying mechanism in use. For example, use [GSS_KRB5_MECHANISM](gss_krb5_mechanism.md) for Kerberos. Use [GSS_C_NO_OID](gss_c_no_oid.md) if none is available.
- `major_status`: Major status code from a failed GSS-API function call.
- `minor_status`: Minor status code from a failed GSS-API function call.

<a id="return-value"></a>

## Return Value

A [CFError](../corefoundation/cferror.md) instance that corresponds to the failure described by the inputs. Release the error with [CFRelease](../corefoundation/cfrelease.md) when you are done with it.

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [gss_display_status(\_:\_:\_:\_:\_:\_:)](gss_display_status%28____________%29.md): Returns a human readable string for a status code.

# GSSCreateError (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.1+ · macOS 10.10+ · visionOS 1.0+

Returns an error object based on GSS-API major and minor status codes.

## Declaration

```objectivec
CFErrorRefGSSCreateError(gss_const_OID mech, OM_uint32 major_status, OM_uint32 minor_status);
```

## Parameters

- `mech`: The underlying mechanism in use. For example, use [GSS_KRB5_MECHANISM](gss_krb5_mechanism.md) for Kerberos. Use [GSS_C_NO_OID](gss_c_no_oid.md) if none is available.
- `major_status`: Major status code from a failed GSS-API function call.
- `minor_status`: Minor status code from a failed GSS-API function call.

<a id="return-value"></a>

## Return Value

A [CFErrorRef](../corefoundation/cferror.md) instance that corresponds to the failure described by the inputs. Release the error with [CFRelease](../corefoundation/cfrelease.md) when you are done with it.

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [gss_display_status](gss_display_status%28____________%29.md): Returns a human readable string for a status code.
