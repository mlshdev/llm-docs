> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_interface_id_key](https://developer.apple.com/documentation/vmnet/vmnet_interface_id_key)

# vmnet_interface_id_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
let vmnet_interface_id_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Interface identifier of the previously created interface.

If no interface identifier is passed to the `vmnet` function, a new MAC address is generated and a interface identifier is associated to it. This identifier is passed back to the client in the `interface_param` dictionary. To re-use a previously generated MAC address, the interface identifier associated with the MAC address needs to be passed to the `vmnet` function in the `interface_desc` parameter.

The value specified for this key should be of type [XPC_TYPE_UUID](https://developer.apple.com/documentation/xpc/xpc_type_uuid-swift.var).

> **Important**

> Specifying a value for `vmnet_interface_id_key` does not guarantee the return of MAC address associated with the identifier. In cases where the MAC address associated with the id cannot be granted, an error is returned to the caller.

> **Note**

> This key may also be used in an XPC dictionary for a `interface_param` argument, for which it represents the identifier mapping to the MAC address returned in `vmnet_mac_address_key`. See [interface_param XPC Dictionary Keys](interface_param_xpc_dictionary_keys.md) for more information.

## See Also

### Constants

- [vmnet_operation_mode_key](vmnet_operation_mode_key.md): The mode to use to configure the guest operating system network interface.

# vmnet_interface_id_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```objectivec
extern const char * const vmnet_interface_id_key;
```

<a id="Discussion"></a>

## Discussion

Interface identifier of the previously created interface.

If no interface identifier is passed to the `vmnet` function, a new MAC address is generated and a interface identifier is associated to it. This identifier is passed back to the client in the `interface_param` dictionary. To re-use a previously generated MAC address, the interface identifier associated with the MAC address needs to be passed to the `vmnet` function in the `interface_desc` parameter.

The value specified for this key should be of type [XPC_TYPE_UUID](https://developer.apple.com/documentation/xpc/xpc_type_uuid-swift.var).

> **Important**

> Specifying a value for `vmnet_interface_id_key` does not guarantee the return of MAC address associated with the identifier. In cases where the MAC address associated with the id cannot be granted, an error is returned to the caller.

> **Note**

> This key may also be used in an XPC dictionary for a `interface_param` argument, for which it represents the identifier mapping to the MAC address returned in `vmnet_mac_address_key`. See [interface_param XPC Dictionary Keys](interface_param_xpc_dictionary_keys.md) for more information.

## See Also

### Constants

- [vmnet_operation_mode_key](vmnet_operation_mode_key.md): The mode to use to configure the guest operating system network interface.
