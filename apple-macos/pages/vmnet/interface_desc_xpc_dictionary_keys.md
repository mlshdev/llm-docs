> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/interface_desc_xpc_dictionary_keys](https://developer.apple.com/documentation/vmnet/interface_desc_xpc_dictionary_keys)

# interface_desc XPC Dictionary Keys

**Interface languages:** Swift, Objective-C

**Framework:** vmnet  
**Kind:** API Collection

XPC dictionary keys supported by the `interface_desc` parameter passed to the `vmnet` function to describe the parameters of the network interface.

## Topics

### Constants

- [vmnet_operation_mode_key](vmnet_operation_mode_key.md): The mode to use to configure the guest operating system network interface.
- [vmnet_interface_id_key](vmnet_interface_id_key.md)

## See Also

### Constants

- [interface_param XPC Dictionary Keys](interface_param_xpc_dictionary_keys.md): XPC dictionary keys used by the `interface_param` argument returned by the completion handler of the `vmnet` function that describes the parameters that should be used to configure the network interface.
- [event XPC Dictionary](event_xpc_dictionary.md): XPC dictionary keys used by the `event` value returned to the client in the `handler` callback specified by the `vmnet` function that provides information about the callback event.
