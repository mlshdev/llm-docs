> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_mac_address_key](https://developer.apple.com/documentation/vmnet/vmnet_mac_address_key)

# vmnet_mac_address_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The MAC address to configure on the virtual interface in the guest operating system.

## Declaration

```swift
let vmnet_mac_address_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

The value for this key is of type [XPC_TYPE_STRING](https://developer.apple.com/documentation/xpc/xpc_type_string-swift.var).

## See Also

### Constants

- [vmnet_mtu_key](vmnet_mtu_key.md): The maximum transmission unit (MTU) to configure on the virtual interface in the guest operating system.
- [vmnet_max_packet_size_key](vmnet_max_packet_size_key.md): The maximum size of the packet that an app can write to the interface.

# vmnet_mac_address_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The MAC address to configure on the virtual interface in the guest operating system.

## Declaration

```objectivec
extern const char * const vmnet_mac_address_key;
```

<a id="Discussion"></a>

## Discussion

The value for this key is of type [XPC_TYPE_STRING](https://developer.apple.com/documentation/xpc/xpc_type_string-swift.var).

## See Also

### Constants

- [vmnet_mtu_key](vmnet_mtu_key.md): The maximum transmission unit (MTU) to configure on the virtual interface in the guest operating system.
- [vmnet_max_packet_size_key](vmnet_max_packet_size_key.md): The maximum size of the packet that an app can write to the interface.
