> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_pre_shared_key_selection_t](https://developer.apple.com/documentation/security/sec_protocol_pre_shared_key_selection_t)

# sec_protocol_pre_shared_key_selection_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_pre_shared_key_selection_t = (sec_protocol_metadata_t, dispatch_data_t?, @escaping sec_protocol_pre_shared_key_selection_complete_t) -> Void
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `psk_identity_hint`: A `dispatch_data_t` object carrying the peer’s (optional) PSK identity hint.
- `complete`: A `sec_protocol_pre_shared_key_selection_complete_t` block to be invoked when PSK selection is complete.

<a id="discussion"></a>

## Discussion

Block to be invoked when the client must choose a PSK identity given a hint from its peer.

# sec_protocol_pre_shared_key_selection_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_sec_protocol_metadata> *, NSObject<OS_dispatch_data> *, void (^)(NSObject<OS_dispatch_data> *)) sec_protocol_pre_shared_key_selection_t;
```

## Parameters

- `metadata`: A `sec_protocol_metadata_t` instance.
- `psk_identity_hint`: A `dispatch_data_t` object carrying the peer’s (optional) PSK identity hint.
- `complete`: A `sec_protocol_pre_shared_key_selection_complete_t` block to be invoked when PSK selection is complete.

<a id="discussion"></a>

## Discussion

Block to be invoked when the client must choose a PSK identity given a hint from its peer.
