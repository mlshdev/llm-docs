> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_add_tls_ciphersuite_group(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_add_tls_ciphersuite_group(_:_:))

# sec_protocol_options_add_tls_ciphersuite_group(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 12.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

> Use sec_protocol_options_append_tls_ciphersuite_group

## Declaration

```swift
func sec_protocol_options_add_tls_ciphersuite_group(_ options: sec_protocol_options_t, _ group: SSLCiphersuiteGroup)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `group`: A SSLCipherSuiteGroup value.

<a id="discussion"></a>

## Discussion

Add a TLS ciphersuite group to the set of enabled ciphersuites.

# sec_protocol_options_add_tls_ciphersuite_group (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

> Use sec_protocol_options_append_tls_ciphersuite_group

## Declaration

```objectivec
void sec_protocol_options_add_tls_ciphersuite_group(sec_protocol_options_t options, SSLCiphersuiteGroup group);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `group`: A SSLCipherSuiteGroup value.

<a id="discussion"></a>

## Discussion

Add a TLS ciphersuite group to the set of enabled ciphersuites.
