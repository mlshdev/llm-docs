> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/interface_param_xpc_dictionary_keys](https://developer.apple.com/documentation/vmnet/interface_param_xpc_dictionary_keys)

# interface_param XPC Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** vmnet  
**Kind:** API Collection

XPC dictionary keys used by the `interface_param` argument returned by the completion handler of the `vmnet` function that describes the parameters that should be used to configure the network interface.

## Topics

### Constants

- [vmnet_mac_address_key](vmnet_mac_address_key.md): The MAC address to configure on the virtual interface in the guest operating system.
- [vmnet_mtu_key](vmnet_mtu_key.md): The maximum transmission unit (MTU) to configure on the virtual interface in the guest operating system.
- [vmnet_max_packet_size_key](vmnet_max_packet_size_key.md): The maximum size of the packet that an app can write to the interface.

## See Also

### Constants

- [interface_desc XPC Dictionary Keys](interface_desc_xpc_dictionary_keys.md): XPC dictionary keys supported by the `interface_desc` parameter passed to the `vmnet` function to describe the parameters of the network interface.
- [event XPC Dictionary](event_xpc_dictionary.md): XPC dictionary keys used by the `event` value returned to the client in the `handler` callback specified by the `vmnet` function that provides information about the callback event.
