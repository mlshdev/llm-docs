> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_estimated_packets_available_key](https://developer.apple.com/documentation/vmnet/vmnet_estimated_packets_available_key)

# vmnet_estimated_packets_available_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
let vmnet_estimated_packets_available_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

The estimated number of packets available to be read.

This key is used for the `vmnet` event.

The value for this key is of type [XPC_TYPE_UINT64](https://developer.apple.com/documentation/xpc/xpc_type_uint64-swift.var).

# vmnet_estimated_packets_available_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```objectivec
extern const char * const vmnet_estimated_packets_available_key;
```

<a id="Discussion"></a>

## Discussion

The estimated number of packets available to be read.

This key is used for the `vmnet` event.

The value for this key is of type [XPC_TYPE_UINT64](https://developer.apple.com/documentation/xpc/xpc_type_uint64-swift.var).
