> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_sec_context_by_oid(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_sec_context_by_oid(_:_:_:_:))

# gss_inquire_sec_context_by_oid(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a particular part of a context.

## Declaration

```swift
func gss_inquire_sec_context_by_oid(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ desired_object: gss_OID, _ data_set: UnsafeMutablePointer<gss_buffer_set_t>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to inquire about.
- `desired_object`: The object identifier naming the aspect of the context to examine.
- `data_set`: A pointer to a buffer set that includes the reference objects. Free this buffer set with [gss_release_buffer_set(\_:\_:)](gss_release_buffer_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_context_time(\_:\_:\_:)](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_wrap_size_limit(\_:\_:\_:\_:\_:\_:)](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.

# gss_inquire_sec_context_by_oid (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns information about a particular part of a context.

## Declaration

```objectivec
OM_uint32 gss_inquire_sec_context_by_oid(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, gss_OID const desired_object, gss_buffer_set_t*data_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to inquire about.
- `desired_object`: The object identifier naming the aspect of the context to examine.
- `data_set`: A pointer to a buffer set that includes the reference objects. Free this buffer set with [gss_release_buffer_set](gss_release_buffer_set%28____%29.md) when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiry and Limits

- [gss_context_time](gss_context_time%28______%29.md): Returns the amount of time remaining before a context expires.
- [gss_inquire_context](gss_inquire_context%28__________________%29.md): Returns information about a security context.
- [gss_wrap_size_limit](gss_wrap_size_limit%28____________%29.md): Returns the largest allowable wrap size for a given set of constraints.
