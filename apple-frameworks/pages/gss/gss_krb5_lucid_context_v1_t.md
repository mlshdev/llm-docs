> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_lucid_context_v1_t](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1_t)

# gss_krb5_lucid_context_v1_t (Swift)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure of a Kerberos context.

## Declaration

```swift
typealias gss_krb5_lucid_context_v1_t = gss_krb5_lucid_context_v1
```

## Topics

### Context Members

- [cfx_kd](gss_krb5_lucid_context_v1/cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](gss_krb5_lucid_context_v1/endtime.md): The expiration time of the context.
- [initiate](gss_krb5_lucid_context_v1/initiate.md): The flag indicating if the role is initiator.
- [protocol](gss_krb5_lucid_context_v1/protocol.md): The protocol to use.
- [recv_seq](gss_krb5_lucid_context_v1/recv_seq.md): The receive sequence number.
- [rfc1964_kd](gss_krb5_lucid_context_v1/rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](gss_krb5_lucid_context_v1/send_seq.md): The send sequence number.
- [version](gss_krb5_lucid_context_v1/version.md): The structure version number.

## See Also

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.
- [gss_krb5_rfc1964_keydata_t](gss_krb5_rfc1964_keydata_t.md): The structure for an RFC 1964-compliant Kerberos encryption key.

# gss_krb5_lucid_context_v1_t (Objective-C)

**Framework:** GSS  
**Kind:** Type Alias  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The structure of a Kerberos context.

## Declaration

```objectivec
typedef struct gss_krb5_lucid_context_v1 gss_krb5_lucid_context_v1_t;
```

## Topics

### Context Members

- [cfx_kd](gss_krb5_lucid_context_v1/cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](gss_krb5_lucid_context_v1/endtime.md): The expiration time of the context.
- [initiate](gss_krb5_lucid_context_v1/initiate.md): The flag indicating if the role is initiator.
- [protocol](gss_krb5_lucid_context_v1/protocol.md): The protocol to use.
- [recv_seq](gss_krb5_lucid_context_v1/recv_seq.md): The receive sequence number.
- [rfc1964_kd](gss_krb5_lucid_context_v1/rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](gss_krb5_lucid_context_v1/send_seq.md): The send sequence number.
- [version](gss_krb5_lucid_context_v1/version.md): The structure version number.

## See Also

### Contexts and Keys

- [gss_krb5_cfx_keydata_t](gss_krb5_cfx_keydata_t.md): The structure of a Kerberos context and acceptor-asserted key.
- [gss_krb5_lucid_context_version_t](gss_krb5_lucid_context_version_t.md): The structure for determining the returned Kerberos lucid context structure version.
- [gss_krb5_lucid_key_t](gss_krb5_lucid_key_t.md): The structure for a Kerberos encryption key.
- [gss_krb5_rfc1964_keydata_t](gss_krb5_rfc1964_keydata_t.md): The structure for an RFC 1964-compliant Kerberos encryption key.
