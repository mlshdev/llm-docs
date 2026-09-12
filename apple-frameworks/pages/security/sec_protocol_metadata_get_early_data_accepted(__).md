> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_get_early_data_accepted(_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_get_early_data_accepted(_:))

# sec_protocol_metadata_get_early_data_accepted(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_get_early_data_accepted(_ metadata: sec_protocol_metadata_t) -> Bool
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A bool indicating if early data was accepted.

<a id="discussion"></a>

## Discussion

Determine if early data was accepted by the peer.

# sec_protocol_metadata_get_early_data_accepted (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
bool sec_protocol_metadata_get_early_data_accepted(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A bool indicating if early data was accepted.

<a id="discussion"></a>

## Discussion

Determine if early data was accepted by the peer.
