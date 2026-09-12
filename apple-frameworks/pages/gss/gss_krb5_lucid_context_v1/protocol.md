> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gss/gss_krb5_lucid_context_v1/protocol](https://developer.apple.com/documentation/gss/gss_krb5_lucid_context_v1/protocol)

# protocol (Swift)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The protocol to use.

## Declaration

```swift
var `protocol`: OM_uint32
```

<a id="Discussion"></a>

## Discussion

If this value is 0, then the protocol under RFC-1964 is used. If the value is 1, then the protocol under draft-ietf-krb-wg-gssapi-cfx-07 is used.

## See Also

### Context Members

- [cfx_kd](cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [recv_seq](recv_seq.md): The receive sequence number.
- [rfc1964_kd](rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.

# protocol (Objective-C)

**Framework:** GSS  
**Kind:** Instance Property  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · visionOS 1.0+

The protocol to use.

## Declaration

```objectivec
OM_uint32 protocol;
```

<a id="Discussion"></a>

## Discussion

If this value is 0, then the protocol under RFC-1964 is used. If the value is 1, then the protocol under draft-ietf-krb-wg-gssapi-cfx-07 is used.

## See Also

### Context Members

- [cfx_kd](cfx_kd.md): The key data structure for Kerberos 5.
- [endtime](endtime.md): The expiration time of the context.
- [initiate](initiate.md): The flag indicating if the role is initiator.
- [recv_seq](recv_seq.md): The receive sequence number.
- [rfc1964_kd](rfc1964_kd.md): The RFC-1964 key data.
- [send_seq](send_seq.md): The send sequence number.
- [version](version.md): The structure version number.
