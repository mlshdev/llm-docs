> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscreatecredentialfromuuid(_:)](https://developer.apple.com/documentation/gss/gsscreatecredentialfromuuid(_:))

# GSSCreateCredentialFromUUID(\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Creates a credential from a universally unique identifier.

## Declaration

```swift
func GSSCreateCredentialFromUUID(_ uuid: CFUUID) -> gss_cred_id_t?
```

## Parameters

- `uuid`: The universally unique identifier of the credential to fetch.

<a id="return-value"></a>

## Return Value

A GSS credential for a given ```CF``UUID``` object if the credential exists, otherwise `NULL`. Free the credential’s memory with [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md) when you are done with it.

<a id="Discussion"></a>

## Discussion

Use this function to get the credential corresponding to a `CFUUID` object that you originally obtained using a call to [GSSCredentialCopyUUID(\_:)](gsscredentialcopyuuid%28__%29.md).

## See Also

### Allocation and Deallocation

- [gss_add_cred(\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option(\_:\_:\_:\_:)](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred(\_:\_:)](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred(\_:\_:)](gss_destroy_cred%28____%29.md): Purges a credential from memory.

# GSSCreateCredentialFromUUID (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Creates a credential from a universally unique identifier.

## Declaration

```objectivec
gss_cred_id_tGSSCreateCredentialFromUUID(CFUUIDRef uuid);
```

## Parameters

- `uuid`: The universally unique identifier of the credential to fetch.

<a id="return-value"></a>

## Return Value

A GSS credential for a given ```CF``UUID``` object if the credential exists, otherwise `NULL`. Free the credential’s memory with [gss_release_cred](gss_release_cred%28____%29.md) when you are done with it.

<a id="Discussion"></a>

## Discussion

Use this function to get the credential corresponding to a `CFUUID` object that you originally obtained using a call to [GSSCredentialCopyUUID](gsscredentialcopyuuid%28__%29.md).

## See Also

### Allocation and Deallocation

- [gss_add_cred](gss_add_cred%28______________________%29.md): Adds a new credential element to an existing credential.
- [gss_set_cred_option](gss_set_cred_option%28________%29.md): Changes a credential option.
- [gss_release_cred](gss_release_cred%28____%29.md): Releases the memory of a credential.
- [gss_destroy_cred](gss_destroy_cred%28____%29.md): Purges a credential from memory.
