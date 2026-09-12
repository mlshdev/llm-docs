> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_tls_ocsp_enabled(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_tls_ocsp_enabled(_:_:))

# sec_protocol_options_set_tls_ocsp_enabled(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_options_set_tls_ocsp_enabled(_ options: sec_protocol_options_t, _ ocsp_enabled: Bool)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `ocsp_enabled`: Flag to enable or disable OCSP support.

<a id="discussion"></a>

## Discussion

Enable or disable OCSP support.

# sec_protocol_options_set_tls_ocsp_enabled (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
void sec_protocol_options_set_tls_ocsp_enabled(sec_protocol_options_t options, bool ocsp_enabled);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `ocsp_enabled`: Flag to enable or disable OCSP support.

<a id="discussion"></a>

## Discussion

Enable or disable OCSP support.
