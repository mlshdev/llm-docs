> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_display_status(_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_display_status(_:_:_:_:_:_:))

# gss_display_status(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a human readable string for a status code.

## Declaration

```swift
func gss_display_status(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ status_value: OM_uint32, _ status_type: Int32, _ mech_type: gss_OID?, _ message_content: UnsafeMutablePointer<OM_uint32>, _ status_string: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `status_value`: The status to be examined.
- `status_type`: The kind of status to be examined. Set to [GSS_C_GSS_CODE](gss_c_gss_code.md) for a GSS status code, or to [GSS_C_MECH_CODE](gss_c_mech_code.md) for a mechanism status code.
- `mech_type`: The mechanism for which to interpret the status value. Set to [GSS_C_NO_OID](gss_c_no_oid.md) to indicate the system default.
- `message_content`: A pointer the function uses to return a context that is currently always set to zero.
- `status_string`: A buffer the function fills with the human readable string corresponding to the status code. Release this buffer with a call to [gss_release_buffer(\_:\_:)](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [GSSCreateError(\_:\_:\_:)](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.

# gss_display_status (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a human readable string for a status code.

## Declaration

```objectivec
OM_uint32 gss_display_status(OM_uint32 *minor_status, OM_uint32 status_value, int status_type, gss_OID const mech_type, OM_uint32 *message_content, gss_buffer_t status_string);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `status_value`: The status to be examined.
- `status_type`: The kind of status to be examined. Set to [GSS_C_GSS_CODE](gss_c_gss_code.md) for a GSS status code, or to [GSS_C_MECH_CODE](gss_c_mech_code.md) for a mechanism status code.
- `mech_type`: The mechanism for which to interpret the status value. Set to [GSS_C_NO_OID](gss_c_no_oid.md) to indicate the system default.
- `message_content`: A pointer the function uses to return a context that is currently always set to zero.
- `status_string`: A buffer the function fills with the human readable string corresponding to the status code. Release this buffer with a call to [gss_release_buffer](gss_release_buffer%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a complete enumeration of status outputs.

## See Also

### Status and Error Creation

- [OM_uint32](om_uint32.md): A 32-bit unsigned integer.
- [OM_uint64](om_uint64.md): A 64-bit unsigned integer.
- [gss_uint32](gss_uint32.md): A 32-bit unsigned integer.
- [gss_status_id_t](gss_status_id_t.md): A pointer to a status result.
- [GSS_C_MECH_CODE](gss_c_mech_code.md): A flag that indicates the status code comes from a call to an underlying mechanism, such as Kerberos.
- [GSS_C_GSS_CODE](gss_c_gss_code.md): A flag that indicates the named status code comes from a GSS-API call.
- [GSS_S_COMPLETE](gss_s_complete.md): The operation completed without error.
- [GSSCreateError](gsscreateerror%28______%29.md): Returns an error object based on GSS-API major and minor status codes.
