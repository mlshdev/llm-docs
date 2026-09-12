> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gsscredentialgetlifetime(_:)](https://developer.apple.com/documentation/gss/gsscredentialgetlifetime(_:))

# GSSCredentialGetLifetime(\_:) (Swift)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns the remaining time in seconds before the credential expires.

## Declaration

```swift
func GSSCredentialGetLifetime(_ cred: gss_cred_id_t) -> OM_uint32
```

## Parameters

- `cred`: The credential to inspect.

<a id="return-value"></a>

## Return Value

The time in seconds that the credential has before it expires. The time is 0 if the call fails, or [GSS_C_INDEFINITE](gss_c_indefinite.md) if the credential never expires.

## See Also

### Inquiries

- [gss_inquire_cred(\_:\_:\_:\_:\_:\_:)](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech(\_:\_:\_:\_:\_:\_:\_:)](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [gss_inquire_cred_by_oid(\_:\_:\_:\_:)](gss_inquire_cred_by_oid%28________%29.md): Inquires about a particular characteristic of a credential.

# GSSCredentialGetLifetime (Objective-C)

**Framework:** GSS  
**Kind:** Function  
**Availability:** iOS 7.0+ · iPadOS 7.0+ · Mac Catalyst 13.1+ · macOS 10.9+ · visionOS 1.0+

Returns the remaining time in seconds before the credential expires.

## Declaration

```objectivec
OM_uint32 GSSCredentialGetLifetime(gss_cred_id_t cred);
```

## Parameters

- `cred`: The credential to inspect.

<a id="return-value"></a>

## Return Value

The time in seconds that the credential has before it expires. The time is 0 if the call fails, or [GSS_C_INDEFINITE](gss_c_indefinite.md) if the credential never expires.

## See Also

### Inquiries

- [gss_inquire_cred](gss_inquire_cred%28____________%29.md): Obtains information about a credential.
- [gss_inquire_cred_by_mech](gss_inquire_cred_by_mech%28______________%29.md): Obtains per-mechanism information about a credential.
- [gss_inquire_cred_by_oid](gss_inquire_cred_by_oid%28________%29.md): Inquires about a particular characteristic of a credential.
