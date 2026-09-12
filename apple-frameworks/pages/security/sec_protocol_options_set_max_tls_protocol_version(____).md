> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_max_tls_protocol_version(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_max_tls_protocol_version(_:_:))

# sec_protocol_options_set_max_tls_protocol_version(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_options_set_max_tls_protocol_version(_ options: sec_protocol_options_t, _ version: tls_protocol_version_t)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `version`: A tls_protocol_version_t enum value.

<a id="discussion"></a>

## Discussion

Set the maximum support TLS version.

# sec_protocol_options_set_max_tls_protocol_version (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
void sec_protocol_options_set_max_tls_protocol_version(sec_protocol_options_t options, tls_protocol_version_t version);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `version`: A tls_protocol_version_t enum value.

<a id="discussion"></a>

## Discussion

Set the maximum support TLS version.
