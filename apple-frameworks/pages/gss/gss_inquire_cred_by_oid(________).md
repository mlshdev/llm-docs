> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_inquire_cred_by_oid(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_inquire_cred_by_oid(_:_:_:_:))

# gss_inquire_cred_by_oid(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Inquires about a particular characteristic of a credential.

## Declaration

```swift
func gss_inquire_cred_by_oid(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ cred_handle: gss_cred_id_t, _ desired_object: gss_OID, _ data_set: UnsafeMutablePointer<gss_buffer_set_t?>) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to inquire about.
- `desired_object`: The object identifier of the characteristic of the credential to return.
- `data_set`: A pointer the function uses to return a set of buffers that contain the results across all of the credential’s mechanisms. If the desired object is not found, this is set to [GSS_C_NO_BUFFER_SET](gss_c_no_buffer_set.md). Otherwise, call [gss_release_buffer_set(\_:\_:)](gss_release_buffer_set%28____%29.md) to free the memory of this object when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiries

- [gss_inquire_cred(\_:\_:\_:\_:\_:\_:)](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech(\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [GSSCredentialGetLifetime(\_:)](gsscredentialgetlifetime%28__%29.md): Returns the remaining time in seconds before the credential expires.

# gss_inquire_cred_by_oid (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Inquires about a particular characteristic of a credential.

## Declaration

```objectivec
OM_uint32 gss_inquire_cred_by_oid(OM_uint32 *minor_status, gss_cred_id_t const cred_handle, gss_OID const desired_object, gss_buffer_set_t*data_set);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to inquire about.
- `desired_object`: The object identifier of the characteristic of the credential to return.
- `data_set`: A pointer the function uses to return a set of buffers that contain the results across all of the credential’s mechanisms. If the desired object is not found, this is set to [GSS_C_NO_BUFFER_SET](gss_c_no_buffer_set.md). Otherwise, call [gss_release_buffer_set](gss_release_buffer_set%28____%29.md) to free the memory of this object when you are done with it.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Inquiries

- [gss_inquire_cred](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [GSSCredentialGetLifetime](gsscredentialgetlifetime%28__%29.md): Returns the remaining time in seconds before the credential expires.
