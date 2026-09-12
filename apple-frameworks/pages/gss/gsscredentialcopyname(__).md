> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscredentialcopyname(_:)](https://developer.apple.com/documentation/gss/gsscredentialcopyname(_:))

# GSSCredentialCopyName(\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns the name describing the credential.

## Declaration

```swift
func GSSCredentialCopyName(_ cred: gss_cred_id_t) -> gss_name_t?
```

## Parameters

- `cred`: The credential from which to get the name.

<a id="return-value"></a>

## Return Value

A GSS name for the given credential, or NULL on failure. Release this object with a call to [gss_release_name(\_:\_:)](gss_release_name%28____%29.md) when you are done with it.

## See Also

### Acquisition

- [gss_aapl_initial_cred(\_:\_:\_:\_:\_:)](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred(\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID(\_:)](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [gss_pseudo_random(\_:\_:\_:\_:\_:\_:)](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.

# GSSCredentialCopyName (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns the name describing the credential.

## Declaration

```objectivec
gss_name_tGSSCredentialCopyName(gss_cred_id_t cred);
```

## Parameters

- `cred`: The credential from which to get the name.

<a id="return-value"></a>

## Return Value

A GSS name for the given credential, or NULL on failure. Release this object with a call to [gss_release_name](gss_release_name%28____%29.md) when you are done with it.

## See Also

### Acquisition

- [gss_aapl_initial_cred](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [gss_pseudo_random](gss_pseudo_random%28____________%29.md): Returns a pseudo-random byte stream for keying.
