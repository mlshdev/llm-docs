> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_release_cred(_:_:)](https://developer.apple.com/documentation/gss/gss_release_cred(_:_:))

# gss_release_cred(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Releases the memory of a credential.

## Declaration

```swift
func gss_release_cred(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ cred_handle: UnsafeMutablePointer<gss_cred_id_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential whose memory should be freed.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function frees the memory associated with the credential, but doesn’t necessarily purge that memory of the credential’s data. If you need to ensure no trace of the credential remains in memory, use [gss_destroy_cred(\_:\_:)](gss_destroy_cred%28____%29.md) instead. That function first removes the credential data from memory and then frees the memory using a call to this function.

## See Also

### Creation and Deletion

- [gss_init_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context(\_:\_:\_:)](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_process_context_token(\_:\_:\_:)](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option(\_:\_:\_:\_:)](gss_set_sec_context_option%28________%29.md): Sets an option on a context.

# gss_release_cred (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Releases the memory of a credential.

## Declaration

```objectivec
OM_uint32 gss_release_cred(OM_uint32 *minor_status, gss_cred_id_t*cred_handle);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential whose memory should be freed.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function frees the memory associated with the credential, but doesn’t necessarily purge that memory of the credential’s data. If you need to ensure no trace of the credential remains in memory, use [gss_destroy_cred](gss_destroy_cred%28____%29.md) instead. That function first removes the credential data from memory and then frees the memory using a call to this function.

## See Also

### Creation and Deletion

- [gss_init_sec_context](gss_init_sec_context%28__________________________%29.md): Initiates a security context with a peer.
- [gss_accept_sec_context](gss_accept_sec_context%28______________________%29.md): Accepts a security context initiated by a peer.
- [gss_delete_sec_context](gss_delete_sec_context%28______%29.md): Deletes a security context.
- [gss_process_context_token](gss_process_context_token%28______%29.md): Processes a token from a peer asynchronously.
- [gss_set_sec_context_option](gss_set_sec_context_option%28________%29.md): Sets an option on a context.
