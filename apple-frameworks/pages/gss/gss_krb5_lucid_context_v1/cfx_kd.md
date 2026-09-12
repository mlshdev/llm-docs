> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_lucid_context_v1/cfx_kd](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1/cfx_kd)

# cfx_kd (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The key data structure for Kerberos 5.

## Declaration

```swift
var cfx_kd: gss_krb5_cfx_keydata_t
```

<a id="Discussion"></a>

## Discussion

Use this structure only if the `protocol` member is set to 1. In that case, the `rfc1964_kd` member contents are invalid and should be zero.

## See Also

### Context Members

- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [protocol](protocol.md): The protocol to use.
- [recv_seq](recv_seq.md): The receive sequence number.
- [rfc1964_kd](rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.

# cfx_kd (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The key data structure for Kerberos 5.

## Declaration

```objectivec
gss_krb5_cfx_keydata_t cfx_kd;
```

<a id="Discussion"></a>

## Discussion

Use this structure only if the `protocol` member is set to 1. In that case, the `rfc1964_kd` member contents are invalid and should be zero.

## See Also

### Context Members

- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [protocol](protocol.md): The protocol to use.
- [recv_seq](recv_seq.md): The receive sequence number.
- [rfc1964_kd](rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.
