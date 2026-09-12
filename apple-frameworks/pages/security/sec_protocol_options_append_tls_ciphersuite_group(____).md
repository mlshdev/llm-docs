> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_append_tls_ciphersuite_group(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_append_tls_ciphersuite_group(_:_:))

# sec_protocol_options_append_tls_ciphersuite_group(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_options_append_tls_ciphersuite_group(_ options: sec_protocol_options_t, _ group: tls_ciphersuite_group_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `group`: A tls_ciphersuite_group_t value.

<a id="discussion"></a>

## Discussion

Append a TLS ciphersuite group to the set of enabled ciphersuites.

# sec_protocol_options_append_tls_ciphersuite_group (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
void sec_protocol_options_append_tls_ciphersuite_group(sec_protocol_options_t options, tls_ciphersuite_group_t group);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `group`: A tls_ciphersuite_group_t value.

<a id="discussion"></a>

## Discussion

Append a TLS ciphersuite group to the set of enabled ciphersuites.
