> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_wrap_size_limit(_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_wrap_size_limit(_:_:_:_:_:_:))

# gss_wrap_size_limit(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the largest allowable wrap size for a given set of constraints.

## Declaration

```swift
func gss_wrap_size_limit(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ conf_req_flag: Int32, _ qop_req: gss_qop_t, _ req_output_size: OM_uint32, _ max_input_size: UnsafeMutablePointer<OM_uint32>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to transmit the data.
- `conf_req_flag`: A flag that you set to a non-zero value to indicate that wrapping function will apply confidentiality in addition to integrity protection or zero if only integrity protection is required.
- `qop_req`: The required quality of protection. See [Object Identifiers](object-identifiers.md) for possible values.
- `req_output_size`: The maximum allowable output token size from the [gss_wrap(\_:\_:\_:\_:\_:\_:\_:)](gss_wrap%28______________%29.md) function.
- `max_input_size`: A  pointer the function uses to return the maximum input size.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_context_time(\_:\_:\_:)](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid(\_:\_:\_:\_:)](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.

# gss_wrap_size_limit (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the largest allowable wrap size for a given set of constraints.

## Declaration

```objectivec
OM_uint32 gss_wrap_size_limit(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, int conf_req_flag, gss_qop_t qop_req, OM_uint32 req_output_size, OM_uint32 *max_input_size);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context used to transmit the data.
- `conf_req_flag`: A flag that you set to a non-zero value to indicate that wrapping function will apply confidentiality in addition to integrity protection or zero if only integrity protection is required.
- `qop_req`: The required quality of protection. See [Object Identifiers](object-identifiers.md) for possible values.
- `req_output_size`: The maximum allowable output token size from the [gss_wrap](gss_wrap%28______________%29.md) function.
- `max_input_size`: A  pointer the function uses to return the maximum input size.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_context_time](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
