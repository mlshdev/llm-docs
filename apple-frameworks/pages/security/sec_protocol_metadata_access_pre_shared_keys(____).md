> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_metadata_access_pre_shared_keys(_:_:)](https://developer.apple.com/documentation/security/sec_protocol_metadata_access_pre_shared_keys(_:_:))

# sec_protocol_metadata_access_pre_shared_keys(\_:\_:) (Swift)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```swift
func sec_protocol_metadata_access_pre_shared_keys(_ metadata: sec_protocol_metadata_t, _ handler: @escaping (dispatch_data_t, dispatch_data_t) -> Void) -> Bool
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with tuples of dispatch_data_t objects carrying PSKs and their corresponding identities.

<a id="return-value"></a>

## Return Value

Returns true if the PSKs were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the PSKs supported by the local instance.

# sec_protocol_metadata_access_pre_shared_keys (Objective-C)

**Framework:** Security  
**Kind:** Function  
**Availability:** iOS 13.0+ · iPadOS 13.0+ · Mac Catalyst 13.1+ · macOS 10.15+ · tvOS 13.0+ · visionOS 1.0+ · watchOS 6.0+

## Declaration

```objectivec
bool sec_protocol_metadata_access_pre_shared_keys(sec_protocol_metadata_t metadata, void (^handler)(dispatch_data_t psk, dispatch_data_t psk_identity));
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `handler`: A block to invoke one or more times with tuples of dispatch_data_t objects carrying PSKs and their corresponding identities.

<a id="return-value"></a>

## Return Value

Returns true if the PSKs were accessible, false otherwise.

<a id="discussion"></a>

## Discussion

Get the PSKs supported by the local instance.
