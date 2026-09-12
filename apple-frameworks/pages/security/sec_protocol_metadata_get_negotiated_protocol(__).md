> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_get_negotiated_protocol(_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_get_negotiated_protocol(_:))

# sec_protocol_metadata_get_negotiated_protocol(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 18.5) · iPadOS 12.0+ (deprecated in 18.5) · Mac Catalyst 13.1+ (deprecated in 18.5) · macOS 10.14+ (deprecated in 15.5) · tvOS 12.0+ (deprecated in 18.5) · visionOS 1.0+ (deprecated in 2.5) · watchOS 5.0+ (deprecated in 11.5)

## Declaration

```swift
func sec_protocol_metadata_get_negotiated_protocol(_ metadata: sec_protocol_metadata_t) -> UnsafePointer<CChar>?
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A NULL-terminated string carrying the negotiated protocol.

<a id="discussion"></a>

## Discussion

Get the application protocol negotiated, e.g., via the TLS ALPN extension.

# sec_protocol_metadata_get_negotiated_protocol (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ (deprecated in 18.5) · iPadOS 12.0+ (deprecated in 18.5) · Mac Catalyst 13.1+ (deprecated in 18.5) · macOS 10.14+ (deprecated in 15.5) · tvOS 12.0+ (deprecated in 18.5) · visionOS 1.0+ (deprecated in 2.5) · watchOS 5.0+ (deprecated in 11.5)

## Declaration

```objectivec
const char *sec_protocol_metadata_get_negotiated_protocol(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A NULL-terminated string carrying the negotiated protocol.

<a id="discussion"></a>

## Discussion

Get the application protocol negotiated, e.g., via the TLS ALPN extension.
