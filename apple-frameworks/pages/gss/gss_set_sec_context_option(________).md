> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_set_sec_context_option(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_set_sec_context_option(_:_:_:_:))

# gss_set_sec_context_option(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Sets an option on a context.

## Declaration

```swift
func gss_set_sec_context_option(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: UnsafeMutablePointer<gss_ctx_id_t>?, _ object: gss_OID, _ value: gss_buffer_t?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to alter.
- `object`: An object identifier that indicates what part of the context to alter.
- `value`: A new value for the indicated object.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token(\_:\_:\_:)](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.

# gss_set_sec_context_option (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Sets an option on a context.

## Declaration

```objectivec
OM_uint32 gss_set_sec_context_option(OM_uint32 *minor_status, gss_ctx_id_t*context_handle, gss_OID const object, gss_buffer_t const value);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context to alter.
- `object`: An object identifier that indicates what part of the context to alter.
- `value`: A new value for the indicated object.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_process_context_token](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
