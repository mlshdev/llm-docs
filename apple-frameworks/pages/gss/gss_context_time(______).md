> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_context_time(_:_:_:)](https://developer.apple.com/documentation/gss/gss_context_time(_:_:_:))

# gss_context_time(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the amount of time remaining before a context expires.

## Declaration

```swift
func gss_context_time(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ time_rec: UnsafeMutablePointer<OM_uint32>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to examine.
- `time_rec`: A pointer the function uses to return the number of seconds for which the context is valid. Returns 0 if the context is already expired.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_inquire_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid(\_:\_:\_:\_:)](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit(\_:\_:\_:\_:\_:\_:)](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.

# gss_context_time (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns the amount of time remaining before a context expires.

## Declaration

```objectivec
OM_uint32 gss_context_time(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, OM_uint32 *time_rec);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to examine.
- `time_rec`: A pointer the function uses to return the number of seconds for which the context is valid. Returns 0 if the context is already expired.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_inquire_context](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_inquire_sec_context_by_oid](gss_inquire_sec_context_by_oid%28________%29.md): Returns information about a particular part of a context.
- [gss_wrap_size_limit](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.
