> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_destroy_cred(_:_:)](https://developer.apple.com/documentation/gss/gss_destroy_cred(_:_:))

# gss_destroy_cred(\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Purges a credential from memory.

## Declaration

```swift
func gss_destroy_cred(_ min_stat: UnsafeMutablePointer<OM_uint32>, _ cred_handle: UnsafeMutablePointer<gss_cred_id_t?>) -> OM_uint32
```

## Parameters

- `min_stat`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to eliminate from memory.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function actively purges the credential from memory and then calls [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) to free the memory. This is a more secure option than calling the release function directly.

## See Also

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID(\_:)](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option(\_:\_:\_:\_:)](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.

# gss_destroy_cred (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Purges a credential from memory.

## Declaration

```objectivec
OM_uint32 gss_destroy_cred(OM_uint32 *min_stat, gss_cred_id_t*cred_handle);
```

## Parameters

- `min_stat`: A pointer to the secondary status result that provides additional information in case of failure.
- `cred_handle`: The credential to eliminate from memory.

<a id="return-value"></a>

## Return Value

A status code set to [GSS_S_COMPLETE](gss_s_complete.md) on success. See [Function Status](function-status.md) for a description of other status outputs.

## Mentioned In

- [Allocating and Releasing Objects](allocating-and-releasing-objects.md)

<a id="Discussion"></a>

## Discussion

This function actively purges the credential from memory and then calls [gss_release_cred](gss_release_cred%28____%29.md) to free the memory. This is a more secure option than calling the release function directly.

## See Also

### Allocation and Deallocation

- [GSSCreateCredentialFromUUID](gsscreatecredentialfromuuid%28__%29.md): Creates a credential from a universally unique identifier.
- [gss_add_cred](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
