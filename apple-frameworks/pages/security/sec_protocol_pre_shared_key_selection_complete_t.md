> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/sec_protocol_pre_shared_key_selection_complete_t](https://developer.apple.com/documentation/security/sec_protocol_pre_shared_key_selection_complete_t)

# sec_protocol_pre_shared_key_selection_complete_t (Swift)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```swift
typealias sec_protocol_pre_shared_key_selection_complete_t = (dispatch_data_t?) -> Void
```

## Parameters

- `psk_identity`: A `dispatch_data_t` instance carrying the chosen PSK identity, or nil if one does not match.

<a id="discussion"></a>

## Discussion

Block to be invoked when a PSK selection event is complete and a PSK identity is chosen.

# sec_protocol_pre_shared_key_selection_complete_t (Objective-C)

**Framework:** Security  
**Kind:** Type Alias  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_dispatch_data> *) sec_protocol_pre_shared_key_selection_complete_t;
```

## Parameters

- `psk_identity`: A `dispatch_data_t` instance carrying the chosen PSK identity, or nil if one does not match.

<a id="discussion"></a>

## Discussion

Block to be invoked when a PSK selection event is complete and a PSK identity is chosen.
