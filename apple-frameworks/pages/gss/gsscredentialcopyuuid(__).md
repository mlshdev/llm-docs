> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscredentialcopyuuid(_:)](https://developer.apple.com/documentation/gss/gsscredentialcopyuuid(_:))

# GSSCredentialCopyUUID(\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a copy of the universally unique identifier corresponding to a GSS credential.

## Declaration

```swift
func GSSCredentialCopyUUID(_ credential: gss_cred_id_t) -> Unmanaged<CFUUID>?
```

## Parameters

- `credential`: The credential whose unique identifier you want.

<a id="return-value"></a>

## Return Value

A `CFUUID` object that corresponds to the given credential. Use `CFRelease` to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

When you want to restore the credential from the `CFUUID`, use [GSSCreateCredentialFromUUID(\_:)](gsscreatecredentialfromuuid%28__%29.md).

## See Also

### Acquisition

- [gss_aapl_initial_cred(\_:\_:\_:\_:\_:)](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred(\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyName(\_:)](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random(\_:\_:\_:\_:\_:\_:)](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.

# GSSCredentialCopyUUID (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns a copy of the universally unique identifier corresponding to a GSS credential.

## Declaration

```objectivec
CFUUIDRefGSSCredentialCopyUUID(gss_cred_id_t credential);
```

## Parameters

- `credential`: The credential whose unique identifier you want.

<a id="return-value"></a>

## Return Value

A `CFUUID` object that corresponds to the given credential. Use `CFRelease` to free this object’s memory when you are done with it.

<a id="Discussion"></a>

## Discussion

When you want to restore the credential from the `CFUUID`, use [GSSCreateCredentialFromUUID](gsscreatecredentialfromuuid%28__%29.md).

## See Also

### Acquisition

- [gss_aapl_initial_cred](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyName](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
- [gss_pseudo_random](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.
