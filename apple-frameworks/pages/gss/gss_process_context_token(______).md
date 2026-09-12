> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_process_context_token(_:_:_:)](https://developer.apple.com/documentation/gss/gss_process_context_token(_:_:_:))

# gss_process_context_token(\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Processes a token from a peer asynchronously.

## Declaration

```swift
func gss_process_context_token(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context_handle: gss_ctx_id_t, _ token_buffer: gss_buffer_t) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context that should handle the token.
- `token_buffer`: The token to process.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Normally, contexts exchange tokens during the initialization process, using [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md) and in the initiator and [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md) in the acceptor. Occasionally, a mechanism needs to send a token asynchronously, for example after a call to the [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md) function when you supply an output token buffer. The `gss_process_context_token` function provides a means to supply a token received from a peer to the context unexpectedly.

## See Also

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_set_sec_context_option(\_:\_:\_:\_:)](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

# gss_process_context_token (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Processes a token from a peer asynchronously.

## Declaration

```objectivec
OM_uint32 gss_process_context_token(OM_uint32 *minor_status, gss_ctx_id_t const context_handle, gss_buffer_t const token_buffer);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `context_handle`: The context that should handle the token.
- `token_buffer`: The token to process.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

<a id="Discussion"></a>

## Discussion

Normally, contexts exchange tokens during the initialization process, using [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md) and in the initiator and [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md) in the acceptor. Occasionally, a mechanism needs to send a token asynchronously, for example after a call to the [gss_delete_sec_context](gss_delete_sec_context%28______%29.md) function when you supply an output token buffer. The `gss_process_context_token` function provides a means to supply a token received from a peer to the context unexpectedly.

## See Also

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_set_sec_context_option](gss_set_sec_context_option%28________%29.md): Sets an option on a context.
