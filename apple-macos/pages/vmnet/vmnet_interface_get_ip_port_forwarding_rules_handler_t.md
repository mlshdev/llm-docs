> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_interface_get_ip_port_forwarding_rules_handler_t](https://developer.apple.com/documentation/vmnet/vmnet_interface_get_ip_port_forwarding_rules_handler_t)

# vmnet_interface_get_ip_port_forwarding_rules_handler_t (Swift)

**Framework:** vmnet  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```swift
typealias vmnet_interface_get_ip_port_forwarding_rules_handler_t = (xpc_object_t?) -> Void
```

## See Also

### Data types

- [vmnet_interface_completion_handler_t](vmnet_interface_completion_handler_t.md)
- [vmnet_interface_event_callback_t](vmnet_interface_event_callback_t.md)
- [vmnet_interface_get_port_forwarding_rules_handler_t](vmnet_interface_get_port_forwarding_rules_handler_t.md)
- [vmnet_start_interface_completion_handler_t](vmnet_start_interface_completion_handler_t.md): The type of the block provided in the call to vmnet_start_interface

# vmnet_interface_get_ip_port_forwarding_rules_handler_t (Objective-C)

**Framework:** vmnet  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

## Declaration

```objectivec
typedef void (^)(NSObject<OS_xpc_object> *) vmnet_interface_get_ip_port_forwarding_rules_handler_t;
```

## See Also

### Data types

- [vmnet_interface_completion_handler_t](vmnet_interface_completion_handler_t.md)
- [vmnet_interface_event_callback_t](vmnet_interface_event_callback_t.md)
- [vmnet_interface_get_port_forwarding_rules_handler_t](vmnet_interface_get_port_forwarding_rules_handler_t.md)
- [vmnet_start_interface_completion_handler_t](vmnet_start_interface_completion_handler_t.md): The type of the block provided in the call to vmnet_start_interface
