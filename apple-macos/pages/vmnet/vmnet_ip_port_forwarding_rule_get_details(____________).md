> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_ip_port_forwarding_rule_get_details(_:_:_:_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_ip_port_forwarding_rule_get_details(_:_:_:_:_:_:))

# vmnet_ip_port_forwarding_rule_get_details(\_:\_:\_:\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 11.0+

## Declaration

```swift
func vmnet_ip_port_forwarding_rule_get_details(_ rule: xpc_object_t, _ protocol: UnsafeMutablePointer<UInt8>, _ external_port: UnsafeMutablePointer<UInt16>, _ address_family: UInt8, _ internal_address: UnsafeMutableRawPointer, _ internal_port: UnsafeMutablePointer<UInt16>) -> vmnet_return_t
```

## See Also

### Functions

- [vmnet_copy_shared_interface_list()](vmnet_copy_shared_interface_list%28%29.md)
- [vmnet_interface_add_ip_port_forwarding_rule(\_:\_:\_:\_:\_:\_:\_:)](vmnet_interface_add_ip_port_forwarding_rule%28______________%29.md)
- [vmnet_interface_add_port_forwarding_rule(\_:\_:\_:\_:\_:\_:)](vmnet_interface_add_port_forwarding_rule%28____________%29.md): Deprecated.
- [vmnet_interface_get_ip_port_forwarding_rules(\_:\_:\_:)](vmnet_interface_get_ip_port_forwarding_rules%28______%29.md)
- [vmnet_interface_get_port_forwarding_rules(\_:\_:)](vmnet_interface_get_port_forwarding_rules%28____%29.md): Deprecated.
- [vmnet_interface_remove_ip_port_forwarding_rule(\_:\_:\_:\_:\_:)](vmnet_interface_remove_ip_port_forwarding_rule%28__________%29.md)
- [vmnet_interface_remove_port_forwarding_rule(\_:\_:\_:\_:)](vmnet_interface_remove_port_forwarding_rule%28________%29.md): Deprecated.
- [vmnet_port_forwarding_rule_get_details(\_:\_:\_:\_:\_:)](vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.

# vmnet_ip_port_forwarding_rule_get_details (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 11.0+

## Declaration

```objectivec
vmnet_return_t vmnet_ip_port_forwarding_rule_get_details(xpc_object_t rule, uint8_t *protocol, uint16_t *external_port, uint8_t address_family, void *internal_address, uint16_t *internal_port);
```

## See Also

### Functions

- [vmnet_copy_shared_interface_list](vmnet_copy_shared_interface_list%28%29.md)
- [vmnet_interface_add_ip_port_forwarding_rule](vmnet_interface_add_ip_port_forwarding_rule%28______________%29.md)
- [vmnet_interface_add_port_forwarding_rule](vmnet_interface_add_port_forwarding_rule%28____________%29.md): Deprecated.
- [vmnet_interface_get_ip_port_forwarding_rules](vmnet_interface_get_ip_port_forwarding_rules%28______%29.md)
- [vmnet_interface_get_port_forwarding_rules](vmnet_interface_get_port_forwarding_rules%28____%29.md): Deprecated.
- [vmnet_interface_remove_ip_port_forwarding_rule](vmnet_interface_remove_ip_port_forwarding_rule%28__________%29.md)
- [vmnet_interface_remove_port_forwarding_rule](vmnet_interface_remove_port_forwarding_rule%28________%29.md): Deprecated.
- [vmnet_port_forwarding_rule_get_details](vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.
