> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_set_cred_option(_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_set_cred_option(_:_:_:_:))

# gss_set_cred_option(\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Changes a credential option.

## Declaration

```swift
func gss_set_cred_option(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ cred_handle: UnsafeMutablePointer<gss_cred_id_t?>?, _ object: gss_OID, _ value: gss_buffer_t?) -> OM_uint32
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to update.
- `object`: An object identifier that indicates the characteristic of the credential that should be changed.
- `value`: The new value for the named object.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID(\_:)](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred(\_:\_:)](gss_destroy_cred%28____%29.md): Purges a credential from memory.

# gss_set_cred_option (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Changes a credential option.

## Declaration

```objectivec
OM_uint32 gss_set_cred_option(OM_uint32 *minor_status, gss_cred_id_t*cred_handle, gss_OID const object, gss_buffer_t const value);
```

## Parameters

- `minor_status`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to update.
- `object`: An object identifier that indicates the characteristic of the credential that should be changed.
- `value`: The new value for the named object.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## See Also

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred](gss_destroy_cred%28____%29.md): Purges a credential from memory.
