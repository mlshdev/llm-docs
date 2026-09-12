> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_lucid_context_v1](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1)

# gss_krb5_lucid_context_v1 (Swift)

**Framework:** GSS  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```swift
struct gss_krb5_lucid_context_v1
```

## Topics

### Initializers

- [init()](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1/init%28%29)
- [init(version:initiate:endtime:send_seq:recv_seq:protocol:rfc1964_kd:cfx_kd:)](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1/init%28version:initiate:endtime:send_seq:recv_seq:protocol:rfc1964_kd:cfx_kd:%29)

### Instance Properties

- [cfx_kd](gss_krb5_lucid_context_v1/cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](gss_krb5_lucid_context_v1/endtime.md): The expiration time of the context.
- [initiate](gss_krb5_lucid_context_v1/initiate.md): The flag indicating if the role is initiator.
- [protocol](gss_krb5_lucid_context_v1/protocol.md): The protocol to use.
- [recv_seq](gss_krb5_lucid_context_v1/recv_seq.md): The receive sequence number.
- [rfc1964_kd](gss_krb5_lucid_context_v1/rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](gss_krb5_lucid_context_v1/send_seq.md): The send sequence number.
- [version](gss_krb5_lucid_context_v1/version.md): The structure version number.

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)

## See Also

### Structures

- [gss_krb5_cfx_keydata](gss_krb5_cfx_keydata.md)
- [gss_krb5_lucid_context_version](gss_krb5_lucid_context_version.md)
- [gss_krb5_lucid_key](gss_krb5_lucid_key.md)
- [gss_krb5_rfc1964_keydata](gss_krb5_rfc1964_keydata.md)

# gss_krb5_lucid_context_v1 (Objective-C)

**Framework:** GSS  
**Kind:** Structure  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

## Declaration

```objectivec
struct gss_krb5_lucid_context_v1;
```

## Topics

### Instance Properties

- [cfx_kd](gss_krb5_lucid_context_v1/cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](gss_krb5_lucid_context_v1/endtime.md): The expiration time of the context.
- [initiate](gss_krb5_lucid_context_v1/initiate.md): The flag indicating if the role is initiator.
- [protocol](gss_krb5_lucid_context_v1/protocol.md): The protocol to use.
- [recv_seq](gss_krb5_lucid_context_v1/recv_seq.md): The receive sequence number.
- [rfc1964_kd](gss_krb5_lucid_context_v1/rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](gss_krb5_lucid_context_v1/send_seq.md): The send sequence number.
- [version](gss_krb5_lucid_context_v1/version.md): The structure version number.

## See Also

### Structures

- [gss_krb5_cfx_keydata](gss_krb5_cfx_keydata.md)
- [gss_krb5_lucid_context_version](gss_krb5_lucid_context_version.md)
- [gss_krb5_lucid_key](gss_krb5_lucid_key.md)
- [gss_krb5_rfc1964_keydata](gss_krb5_rfc1964_keydata.md)
