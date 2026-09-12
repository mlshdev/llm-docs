> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_options_set_tls_max_version(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_options_set_tls_max_version(_:_:))

# sec_protocol_options_set_tls_max_version(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 12.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```swift
func sec_protocol_options_set_tls_max_version(_ options: sec_protocol_options_t, _ version: SSLProtocol)
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `version`: A SSLProtocol enum value.

<a id="discussion"></a>

## Discussion

Set the maximum support TLS version.

# sec_protocol_options_set_tls_max_version (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```objectivec
void sec_protocol_options_set_tls_max_version(sec_protocol_options_t options, SSLProtocol version);
```

## Parameters

- `options`: A `sec_protocol_options_t` instance.
- `version`: A SSLProtocol enum value.

<a id="discussion"></a>

## Discussion

Set the maximum support TLS version.
