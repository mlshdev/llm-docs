> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_s_complete](https://developer.apple.com/documentation/gss/gss_s_complete)

# GSS_S_COMPLETE (Swift)

**Framework:** GSS  
**Kind:** Global Variable  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The operation completed without error.

## Declaration

```swift
var GSS_S_COMPLETE: Int32 { get }
```

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [gss_display_status(\_:\_:\_:\_:\_:\_:)](gss_display_status%28____________%29.md): Returns a human readable string for a status code.
- [GSSCreateError(\_:\_:\_:)](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.

# GSS_S_COMPLETE (Objective-C)

**Framework:** GSS  
**Kind:** Macro  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The operation completed without error.

## Declaration

```objectivec
#define GSS_S_COMPLETE
```

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [gss_display_status](gss_display_status%28____________%29.md): Returns a human readable string for a status code.
- [GSSCreateError](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.
