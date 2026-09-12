> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_tls_pre_shared_key_identity_hint(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_tls_pre_shared_key_identity_hint(_:_:))

# sec_protocol_options_set_tls_pre_shared_key_identity_hint(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_options_set_tls_pre_shared_key_identity_hint(_ options: sec_protocol_options_t, _ psk_identity_hint: dispatch_data_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `psk_identity_hint`: A dispatch_data_t containing a PSK identity hint.

<a id="discussion"></a>

## Discussion

Set the PSK identity hint to use by servers when negotiating a PSK ciphersuite. See https://tools.ietf.org/html/rfc4279 for more details.

# sec_protocol_options_set_tls_pre_shared_key_identity_hint (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
void sec_protocol_options_set_tls_pre_shared_key_identity_hint(sec_protocol_options_t options, dispatch_data_t psk_identity_hint);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `psk_identity_hint`: A dispatch_data_t containing a PSK identity hint.

<a id="discussion"></a>

## Discussion

Set the PSK identity hint to use by servers when negotiating a PSK ciphersuite. See https://tools.ietf.org/html/rfc4279 for more details.
