> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_create_secret_with_context(_:_:_:_:_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_create_secret_with_context(_:_:_:_:_:_:))

# sec_protocol_metadata_create_secret_with_context(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_create_secret_with_context(_ metadata: sec_protocol_metadata_t, _ label_len: Int, _ label: UnsafePointer<CChar>, _ context_len: Int, _ context: UnsafePointer<UInt8>, _ exporter_length: Int) -> dispatch_data_t?
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `label_len`: Length of the KDF label string.
- `label`: KDF label string.
- `context_len`: Length of the KDF context string.
- `context`: Constant opaque context value
- `exporter_length`: Length of the secret to be exported.

<a id="return-value"></a>

## Return Value

Returns a dispatch_data_t object carrying the exported secret.

<a id="discussion"></a>

## Discussion

Export a secret, e.g., a cryptographic key, derived from the protocol metadata using a label and context string.

# sec_protocol_metadata_create_secret_with_context (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
dispatch_data_tsec_protocol_metadata_create_secret_with_context(sec_protocol_metadata_t metadata, size_t label_len, const char *label, size_t context_len, const uint8_t *context, size_t exporter_length);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `label_len`: Length of the KDF label string.
- `label`: KDF label string.
- `context_len`: Length of the KDF context string.
- `context`: Constant opaque context value
- `exporter_length`: Length of the secret to be exported.

<a id="return-value"></a>

## Return Value

Returns a dispatch_data_t object carrying the exported secret.

<a id="discussion"></a>

## Discussion

Export a secret, e.g., a cryptographic key, derived from the protocol metadata using a label and context string.
