> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_tls_diffie_hellman_parameters(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_tls_diffie_hellman_parameters(_:_:))

# sec_protocol_options_set_tls_diffie_hellman_parameters(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

> DHE ciphersuites are no longer supported

## Declaration

```swift
func sec_protocol_options_set_tls_diffie_hellman_parameters(_ options: sec_protocol_options_t, _ params: dispatch_data_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `params`: A dispatch_data_t containing legacy Diffie-Hellman parameters.

<a id="discussion"></a>

## Discussion

Set the supported Diffie-Hellman parameters.

# sec_protocol_options_set_tls_diffie_hellman_parameters (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

> DHE ciphersuites are no longer supported

## Declaration

```objectivec
void sec_protocol_options_set_tls_diffie_hellman_parameters(sec_protocol_options_t options, dispatch_data_t params);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `params`: A dispatch_data_t containing legacy Diffie-Hellman parameters.

<a id="discussion"></a>

## Discussion

Set the supported Diffie-Hellman parameters.
