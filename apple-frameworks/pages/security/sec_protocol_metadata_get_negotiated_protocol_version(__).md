> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_get_negotiated_protocol_version(_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_get_negotiated_protocol_version(_:))

# sec_protocol_metadata_get_negotiated_protocol_version(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```swift
func sec_protocol_metadata_get_negotiated_protocol_version(_ metadata: sec_protocol_metadata_t) -> SSLProtocol
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A SSLProtocol enum of the TLS version.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS version.

# sec_protocol_metadata_get_negotiated_protocol_version (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.1+ (deprecated in 13.1) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```objectivec
SSLProtocol sec_protocol_metadata_get_negotiated_protocol_version(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A SSLProtocol enum of the TLS version.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS version.
