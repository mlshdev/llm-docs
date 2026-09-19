> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/security/sec_protocol_metadata_get_negotiated_tls_ciphersuite(_:)

# sec_protocol_metadata_get_negotiated_tls_ciphersuite(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_metadata_get_negotiated_tls_ciphersuite(_ metadata: sec_protocol_metadata_t) -> tls_ciphersuite_t
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A `tls_ciphersuite_t`.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS ciphersuite.

# sec_protocol_metadata_get_negotiated_tls_ciphersuite (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
tls_ciphersuite_t sec_protocol_metadata_get_negotiated_tls_ciphersuite(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A `tls_ciphersuite_t`.

<a id="discussion"></a>

## Discussion

Get the negotiated TLS ciphersuite.
