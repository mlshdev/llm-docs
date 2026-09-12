> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_start_interface_completion_handler_t](https://developer.apple.com/documentation/vmnet/vmnet_start_interface_completion_handler_t)

# vmnet_start_interface_completion_handler_t (Swift)

**Framework:** vmnet  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The type of the block provided in the call to vmnet_start_interface

## Declaration

```swift
typealias vmnet_start_interface_completion_handler_t = (vmnet_return_t, xpc_object_t?) -> Void
```

<a id="discussion"></a>

## Discussion

- Parfameters:

  - status: If status is `VMNET_SUCCESS`, the framework created the interface successfully. Otherwise, the interface failed to be created.
  - interface_param: A dictionary containing interface parameters that describe the interface.

## See Also

### Data types

- [vmnet_interface_completion_handler_t](vmnet_interface_completion_handler_t.md)
- [vmnet_interface_event_callback_t](vmnet_interface_event_callback_t.md)
- [vmnet_interface_get_ip_port_forwarding_rules_handler_t](vmnet_interface_get_ip_port_forwarding_rules_handler_t.md)
- [vmnet_interface_get_port_forwarding_rules_handler_t](vmnet_interface_get_port_forwarding_rules_handler_t.md)

# vmnet_start_interface_completion_handler_t (Objective-C)

**Framework:** vmnet  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

The type of the block provided in the call to vmnet_start_interface

## Declaration

```objectivec
typedef void (^)(enum vmnet_return_t, NSObject<OS_xpc_object> *) vmnet_start_interface_completion_handler_t;
```

<a id="discussion"></a>

## Discussion

- Parfameters:

  - status: If status is `VMNET_SUCCESS`, the framework created the interface successfully. Otherwise, the interface failed to be created.
  - interface_param: A dictionary containing interface parameters that describe the interface.

## See Also

### Data types

- [vmnet_interface_completion_handler_t](vmnet_interface_completion_handler_t.md)
- [vmnet_interface_event_callback_t](vmnet_interface_event_callback_t.md)
- [vmnet_interface_get_ip_port_forwarding_rules_handler_t](vmnet_interface_get_ip_port_forwarding_rules_handler_t.md)
- [vmnet_interface_get_port_forwarding_rules_handler_t](vmnet_interface_get_port_forwarding_rules_handler_t.md)
