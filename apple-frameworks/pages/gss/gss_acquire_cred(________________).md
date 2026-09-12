> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_acquire_cred(_:_:_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_acquire_cred(_:_:_:_:_:_:_:_:))

# gss_acquire_cred(\_:\_:\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Acquires a credential for use in establishing a security context.

## Declaration

```swift
func gss_acquire_cred(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ desired_name: gss_name_t?, _ time_req: OM_uint32, _ desired_mechs: gss_OID_set?, _ cred_usage: gss_cred_usage_t, _ output_cred_handle: UnsafeMutablePointer<gss_cred_id_t?>, _ actual_mechs: UnsafeMutablePointer<gss_OID_set?>?, _ time_rec: UnsafeMutablePointer<OM_uint32>?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `desired_name`: The name of the principal whose credential should be acquired. Specify `GSS_C_NO_NAME` to get a generic credential or use [gss_import_name(\_:\_:\_:\_:)](gss_import_name%28________%29.md) to obtain a name object.
- `time_req`: The time in seconds that the credential should remain valid. Use [GSS_C_INDEFINITE](gss_c_indefinite.md) to indicate the maximum allowed duration.
- `desired_mechs`: The set of underlying security mechanisms to use with the credential. Use `GSS_C_NO_OID_SET` to get the default set.
- `cred_usage`: A flag that indicates how the credential will be used. Specify [GSS_C_INITIATE](gss_c_initiate.md) for context initiation, [GSS_C_ACCEPT](gss_c_accept.md) for context acceptance, or [GSS_C_BOTH](gss_c_both.md) for both.
- `output_cred_handle`: A pointer the function uses to return the credential. Release the credential’s memory with [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it.
- `actual_mechs`: A pointer the function uses to return the actual mechanisms used by the credential. Set to `NULL` to ignore this output. If you do receive a set of mechanisms, use [gss_release_oid_set(\_:\_:)](gss_release_oid_set%28____%29.md) to release its memory when you are done with it.
- `time_rec`: A pointer the function uses to return the actual number of seconds for which the credential is valid. Set to `NULL` to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Acquisition

- [gss_aapl_initial_cred(\_:\_:\_:\_:\_:)](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred_with_password(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID(\_:)](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName(\_:)](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random(\_:\_:\_:\_:\_:\_:)](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.

# gss_acquire_cred (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Acquires a credential for use in establishing a security context.

## Declaration

```objectivec
OM_uint32 gss_acquire_cred(OM_uint32 *minor_status, gss_name_t const desired_name, OM_uint32 time_req, gss_OID_set const desired_mechs, gss_cred_usage_t cred_usage, gss_cred_id_t*output_cred_handle, gss_OID_set*actual_mechs, OM_uint32 *time_rec);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `desired_name`: The name of the principal whose credential should be acquired. Specify `GSS_C_NO_NAME` to get a generic credential or use [gss_import_name](gss_import_name%28________%29.md) to obtain a name object.
- `time_req`: The time in seconds that the credential should remain valid. Use [GSS_C_INDEFINITE](gss_c_indefinite.md) to indicate the maximum allowed duration.
- `desired_mechs`: The set of underlying security mechanisms to use with the credential. Use `GSS_C_NO_OID_SET` to get the default set.
- `cred_usage`: A flag that indicates how the credential will be used. Specify [GSS_C_INITIATE](gss_c_initiate.md) for context initiation, [GSS_C_ACCEPT](gss_c_accept.md) for context acceptance, or [GSS_C_BOTH](gss_c_both.md) for both.
- `output_cred_handle`: A pointer the function uses to return the credential. Release the credential’s memory with [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it.
- `actual_mechs`: A pointer the function uses to return the actual mechanisms used by the credential. Set to `NULL` to ignore this output. If you do receive a set of mechanisms, use [gss_release_oid_set](gss_release_oid_set%28____%29.md) to release its memory when you are done with it.
- `time_rec`: A pointer the function uses to return the actual number of seconds for which the credential is valid. Set to `NULL` to ignore this output.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

## See Also

### Acquisition

- [gss_aapl_initial_cred](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred_with_password](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.
