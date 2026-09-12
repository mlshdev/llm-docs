> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_pseudo_random(_:_:_:_:_:_:)](https://developer.apple.com/documentation/gss/gss_pseudo_random(_:_:_:_:_:_:))

# gss_pseudo_random(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a pseudo-random byte stream for keying.

## Declaration

```swift
func gss_pseudo_random(_ minor_status: UnsafeMutablePointer<OM_uint32>, _ context: gss_ctx_id_t, _ prf_key: Int32, _ prf_in: gss_buffer_t, _ desired_output_len: Int, _ prf_out: gss_buffer_t) -> OM_uint32
```

## See Also

### Acquisition

- [gss_aapl_initial_cred(\_:\_:\_:\_:\_:)](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred(\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password(\_:\_:\_:\_:\_:\_:\_:\_:\_:)](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID(\_:)](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName(\_:)](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.

# gss_pseudo_random (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · macOS 10.7+ · visionOS 1.0+

Returns a pseudo-random byte stream for keying.

## Declaration

```objectivec
OM_uint32 gss_pseudo_random(OM_uint32 *minor_status, gss_ctx_id_t context, int prf_key, gss_buffer_t const prf_in, ssize_t desired_output_len, gss_buffer_t prf_out);
```

## See Also

### Acquisition

- [gss_aapl_initial_cred](gss_aapl_initial_cred%28__________%29.md): Acquires a new credential using a password or certificate.
- [gss_acquire_cred](gss_acquire_cred%28________________%29.md): Acquires a credential for use in establishing a security context.
- [gss_acquire_cred_with_password](gss_acquire_cred_with_password%28__________________%29.md): Acquires a credential for use in establishing a security context using a password.
- [GSSCredentialCopyUUID](gsscredentialcopyuuid%28__%29.md): Returns a copy of the universally unique identifier corresponding to a GSS credential.
- [GSSCredentialCopyName](gsscredentialcopyname%28__%29.md): Returns the name describing the credential.
