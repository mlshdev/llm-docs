> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_get_negotiated_ciphersuite(_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_get_negotiated_ciphersuite(_:))

# sec_protocol_metadata_get_negotiated_ciphersuite(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 12.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```swift
func sec_protocol_metadata_get_negotiated_ciphersuite(_ metadata: sec_protocol_metadata_t) -> SSLCipherSuite
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A SSLCipherSuite.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS ciphersuite.

# sec_protocol_metadata_get_negotiated_ciphersuite (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 13.0) · iPadOS 12.0+ (deprecated in 13.0) · Mac Catalyst 13.0+ (deprecated in 13.0) · macOS 10.14+ (deprecated in 10.15) · tvOS 12.0+ (deprecated in 13.0) · visionOS 1.0+ (deprecated in 1.0) · watchOS 5.0+ (deprecated in 6.0)

## Declaration

```objectivec
SSLCipherSuite sec_protocol_metadata_get_negotiated_ciphersuite(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A SSLCipherSuite.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS ciphersuite.
