> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_operation_mode_key](https://developer.apple.com/documentation/vmnet/vmnet_operation_mode_key)

# vmnet_operation_mode_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The mode to use to configure the guest operating system network interface.

## Declaration

```swift
let vmnet_operation_mode_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

The value specified for this key should be of type [XPC_TYPE_UINT64](https://developer.apple.com/documentation/xpc/xpc_type_uint64-swift.var).

## See Also

### Constants

- [vmnet_interface_id_key](vmnet_interface_id_key.md)

# vmnet_operation_mode_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The mode to use to configure the guest operating system network interface.

## Declaration

```objectivec
extern const char * const vmnet_operation_mode_key;
```

<a id="Discussion"></a>

## Discussion

The value specified for this key should be of type [XPC_TYPE_UINT64](https://developer.apple.com/documentation/xpc/xpc_type_uint64-swift.var).

## See Also

### Constants

- [vmnet_interface_id_key](vmnet_interface_id_key.md)
