> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_copy_peer_public_key(_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_copy_peer_public_key(_:))

# sec_protocol_metadata_copy_peer_public_key(\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```swift
func sec_protocol_metadata_copy_peer_public_key(_ metadata: sec_protocol_metadata_t) -> dispatch_data_t?
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A `dispatch_data_t` containing the peer’s raw public key.

<a id="discussion"></a>

## Discussion

Get the protocol instance peer’s public key.

# sec_protocol_metadata_copy_peer_public_key (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 5.0+

## Declaration

```objectivec
dispatch_data_tsec_protocol_metadata_copy_peer_public_key(sec_protocol_metadata_t metadata);
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.

<a id="return-value"></a>

## Return Value

A `dispatch_data_t` containing the peer’s raw public key.

<a id="discussion"></a>

## Discussion

Get the protocol instance peer’s public key.
