> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_lucid_context_v1/rfc1964_kd](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1/rfc1964_kd)

# rfc1964_kd (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The RFC-1964 key data.

## Declaration

```swift
var rfc1964_kd: gss_krb5_rfc1964_keydata_t
```

<a id="Discussion"></a>

## Discussion

Use this structure only if the `protocol` member is set to 0. In that case, the `ctx_kd` member contents are invalid and should be zero.

## See Also

### Context Members

- [cfx_kd](cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [protocol](protocol.md): The protocol to use.
- [recv_seq](recv_seq.md): The receive sequence number.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.

# rfc1964_kd (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The RFC-1964 key data.

## Declaration

```objectivec
gss_krb5_rfc1964_keydata_t rfc1964_kd;
```

<a id="Discussion"></a>

## Discussion

Use this structure only if the `protocol` member is set to 0. In that case, the `ctx_kd` member contents are invalid and should be zero.

## See Also

### Context Members

- [cfx_kd](cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [protocol](protocol.md): The protocol to use.
- [recv_seq](recv_seq.md): The receive sequence number.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.
