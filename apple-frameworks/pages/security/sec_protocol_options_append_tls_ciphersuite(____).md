> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_append_tls_ciphersuite(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_append_tls_ciphersuite(_:_:))

# sec_protocol_options_append_tls_ciphersuite(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_options_append_tls_ciphersuite(_ options: sec_protocol_options_t, _ ciphersuite: tls_ciphersuite_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `ciphersuite`: A `tls_ciphersuite_t` value.

<a id="discussion"></a>

## Discussion

Append a TLS ciphersuite to the set of enabled ciphersuites.

# sec_protocol_options_append_tls_ciphersuite (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
void sec_protocol_options_append_tls_ciphersuite(sec_protocol_options_t options, tls_ciphersuite_t ciphersuite);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `ciphersuite`: A `tls_ciphersuite_t` value.

<a id="discussion"></a>

## Discussion

Append a TLS ciphersuite to the set of enabled ciphersuites.
