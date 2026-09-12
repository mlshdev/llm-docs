> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_peers_are_equal(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_peers_are_equal(_:_:))

# sec_protocol_metadata_peers_are_equal(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_peers_are_equal(_ metadataA: sec_protocol_metadata_t, _ metadataB: sec_protocol_metadata_t) -> Bool
```

## Parameters

- `metadataA`: A `sec_protocol_metadata_t` instance.
- `metadataB`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

Returns true if both metadata values refer to the same peer, and false otherwise.

<a id="discussion"></a>

## Discussion

Compare peer information for two `sec_protocol_metadata` instances. This comparison does not include protocol configuration options, e.g., ciphersuites.

# sec_protocol_metadata_peers_are_equal (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
bool sec_protocol_metadata_peers_are_equal(sec_protocol_metadata_t metadataA, sec_protocol_metadata_t metadataB);
```

## Parameters

- `metadataA`: A `sec_protocol_metadata_t` instance.
- `metadataB`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

Returns true if both metadata values refer to the same peer, and false otherwise.

<a id="discussion"></a>

## Discussion

Compare peer information for two `sec_protocol_metadata` instances. This comparison does not include protocol configuration options, e.g., ciphersuites.
