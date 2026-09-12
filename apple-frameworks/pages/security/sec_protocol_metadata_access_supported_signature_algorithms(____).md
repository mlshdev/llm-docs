> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_access_supported_signature_algorithms(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_access_supported_signature_algorithms(_:_:))

# sec_protocol_metadata_access_supported_signature_algorithms(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_access_supported_signature_algorithms(_ metadata: sec_protocol_metadata_t, _ handler: @escaping (UInt16) -> Void) -> Bool
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times, once per signature algorithm advertised by the peer. Each `signature_algorithm` is a TLS SignatureScheme codepoint (the on-the-wire 2-byte value) from the IANA “TLS SignatureScheme” registry — see RFC 8446 §4.2.3.

<a id="return-value"></a>

## Return Value

Returns true if the supported signature list was accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the signature algorithms supported by the peer. Clients may call this in response to a challenge block.

# sec_protocol_metadata_access_supported_signature_algorithms (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
bool sec_protocol_metadata_access_supported_signature_algorithms(sec_protocol_metadata_t metadata, void (^handler)(uint16_t signature_algorithm));
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times, once per signature algorithm advertised by the peer. Each `signature_algorithm` is a TLS SignatureScheme codepoint (the on-the-wire 2-byte value) from the IANA “TLS SignatureScheme” registry — see RFC 8446 §4.2.3.

<a id="return-value"></a>

## Return Value

Returns true if the supported signature list was accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the signature algorithms supported by the peer. Clients may call this in response to a challenge block.
