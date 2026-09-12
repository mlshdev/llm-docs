> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_rfc1964_keydata_t](https://developer.apple.com/documentation/gss/gss_krb5_rfc1964_keydata_t)

# gss_krb5_rfc1964_keydata_t (Swift)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure for an RFC 1964-compliant Kerberos encryption key.

## Declaration

```swift
typealias gss_krb5_rfc1964_keydata_t = gss_krb5_rfc1964_keydata
```

## Topics

### Key Data Members

- [ctx_key](gss_krb5_rfc1964_keydata/ctx_key.md): The context key (Kerberos session key or subkey).
- [seal_alg](gss_krb5_rfc1964_keydata/seal_alg.md): The seal/encrypt algorithm.
- [sign_alg](gss_krb5_rfc1964_keydata/sign_alg.md): The signing algorithm.

## See Also

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_v1_t](gss_krb5_lucid_context_v1_t.md): The structure of a Kerberos context.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.

# gss_krb5_rfc1964_keydata_t (Objective-C)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure for an RFC 1964-compliant Kerberos encryption key.

## Declaration

```objectivec
typedef struct gss_krb5_rfc1964_keydata gss_krb5_rfc1964_keydata_t;
```

## Topics

### Key Data Members

- [ctx_key](gss_krb5_rfc1964_keydata/ctx_key.md): The context key (Kerberos session key or subkey).
- [seal_alg](gss_krb5_rfc1964_keydata/seal_alg.md): The seal/encrypt algorithm.
- [sign_alg](gss_krb5_rfc1964_keydata/sign_alg.md): The signing algorithm.

## See Also

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_v1_t](gss_krb5_lucid_context_v1_t.md): The structure of a Kerberos context.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.
