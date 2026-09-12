> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_context(_:_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_context(_:_:_:_:_:_:_:_:_:))

# gss_inquire_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a security context.

## Declaration

```swift
func gss_inquire_context(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ src_name: UnsafeMutablePointer<gss_name_t?>?, _ targ_name: UnsafeMutablePointer<gss_name_t?>?, _ lifetime_rec: UnsafeMutablePointer<OM_uint32>?, _ mech_type: UnsafeMutablePointer<gss_OID?>?, _ ctx_flags: UnsafeMutablePointer<OM_uint32>?, _ locally_initiated: UnsafeMutablePointer<Int32>?, _ xopen: UnsafeMutablePointer<Int32>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to obtain information about.
- `src_name`: A pointer the function uses to return the name of the initiator. Free the name object’s memory with a call to [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) when you are done with it. Specify `NULL` to ignore this output.
- `targ_name`: A pointer the function uses to return the name of the acceptor. Free the name object’s memory with a call to [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) when you are done with it. Specify `NULL` to ignore this output.
- `lifetime_rec`: A pointer the function uses to return the number of seconds before the context expires, or zero if it has already expired. If the context does not support expiration, it returns [GSS_C_INDEFINITE](gss_c_indefinite.md). Specify `NULL` to ignore this output.
- `mech_type`: A pointer the function uses to return the mechanism providing the context. Do not release the OID object, because it is held in static memory. Specify `NULL` to ignore this output.
- `ctx_flags`: A pointer the function uses to return the flags associated with the context. See [Context Services](context-services.md) for a description of available flags. Specify NULL to ignore this output.
- `locally_initiated`: A pointer the function uses to return an indicator of the context’s point of origin. The value is zero when the function is called by context’s acceptor and non-zero otherwise. Specify NULL to ignore this output.
- `xopen`: A pointer the function uses to return an indicator of the context’s current state. The value is non-zero when the context if fully established and zero otherwise. Specify NULL to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

The context must exist but need not be fully established for the inquiry to succeed.

## See Also

### Inquiry and Limits

- [gss_context_time(\_:\_:\_:)](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_sec_context_by_oid(\_:\_:\_:\_:)](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit(\_:\_:\_:\_:\_:\_:)](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.

# gss_inquire_context (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a security context.

## Declaration

```objectivec
OM_uint32 gss_inquire_context(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, gss_name_t*src_name, gss_name_t*targ_name, OM_uint32 *lifetime_rec, gss_OID*mech_type, OM_uint32 *ctx_flags, int *locally_initiated, int *xopen);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to obtain information about.
- `src_name`: A pointer the function uses to return the name of the initiator. Free the name object’s memory with a call to [gss_release_name](gss_release_name%28____%29.md) when you are done with it. Specify `NULL` to ignore this output.
- `targ_name`: A pointer the function uses to return the name of the acceptor. Free the name object’s memory with a call to [gss_release_name](gss_release_name%28____%29.md) when you are done with it. Specify `NULL` to ignore this output.
- `lifetime_rec`: A pointer the function uses to return the number of seconds before the context expires, or zero if it has already expired. If the context does not support expiration, it returns [GSS_C_INDEFINITE](gss_c_indefinite.md). Specify `NULL` to ignore this output.
- `mech_type`: A pointer the function uses to return the mechanism providing the context. Do not release the OID object, because it is held in static memory. Specify `NULL` to ignore this output.
- `ctx_flags`: A pointer the function uses to return the flags associated with the context. See [Context Services](context-services.md) for a description of available flags. Specify NULL to ignore this output.
- `locally_initiated`: A pointer the function uses to return an indicator of the context’s point of origin. The value is zero when the function is called by context’s acceptor and non-zero otherwise. Specify NULL to ignore this output.
- `xopen`: A pointer the function uses to return an indicator of the context’s current state. The value is non-zero when the context if fully established and zero otherwise. Specify NULL to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

The context must exist but need not be fully established for the inquiry to succeed.

## See Also

### Inquiry and Limits

- [gss_context_time](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_sec_context_by_oid](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.
