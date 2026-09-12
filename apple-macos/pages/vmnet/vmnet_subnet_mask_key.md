> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_subnet_mask_key](https://developer.apple.com/documentation/vmnet/vmnet_subnet_mask_key)

# vmnet_subnet_mask_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A string that represnts the IPv4 subnet mask to use on the interface.

## Declaration

```swift
let vmnet_subnet_mask_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

You must also specify `vmnet_start_address_key` and `vmnet_end_address_key` that you supply in the `interface_desc` and `interface_param` dictionaries.

## See Also

### Constants

- [vmnet_allocate_mac_address_key](vmnet_allocate_mac_address_key.md)
- [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md)
- [vmnet_enable_isolation_key](vmnet_enable_isolation_key.md)
- [vmnet_enable_tso_key](vmnet_enable_tso_key.md)
- [vmnet_end_address_key](vmnet_end_address_key.md)
- [vmnet_host_ip_address_key](vmnet_host_ip_address_key.md)
- [vmnet_host_ipv6_address_key](vmnet_host_ipv6_address_key.md)
- [vmnet_host_subnet_mask_key](vmnet_host_subnet_mask_key.md)
- [vmnet_nat66_prefix_key](vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_nat66_prefix_length_key](vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_network_identifier_key](vmnet_network_identifier_key.md): The identifier that uniquely identifies this network as a UUID.
- [vmnet_read_max_packets_key](vmnet_read_max_packets_key.md)
- [vmnet_shared_interface_name_key](vmnet_shared_interface_name_key.md): A string that represents the name of the interface to use when the operating mode of the interface in the vmnet bridged mode.
- [vmnet_start_address_key](vmnet_start_address_key.md): A string that represents th starting IPv4 address to use for the interface.
- [vmnet_operation_mode_key](vmnet_operation_mode_key.md): The mode to use to configure the guest operating system network interface.

# vmnet_subnet_mask_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

A string that represnts the IPv4 subnet mask to use on the interface.

## Declaration

```objectivec
extern const char * const vmnet_subnet_mask_key;
```

<a id="Discussion"></a>

## Discussion

You must also specify `vmnet_start_address_key` and `vmnet_end_address_key` that you supply in the `interface_desc` and `interface_param` dictionaries.

## See Also

### Constants

- [vmnet_allocate_mac_address_key](vmnet_allocate_mac_address_key.md)
- [vmnet_enable_checksum_offload_key](vmnet_enable_checksum_offload_key.md)
- [vmnet_enable_isolation_key](vmnet_enable_isolation_key.md)
- [vmnet_enable_tso_key](vmnet_enable_tso_key.md)
- [vmnet_end_address_key](vmnet_end_address_key.md)
- [vmnet_host_ip_address_key](vmnet_host_ip_address_key.md)
- [vmnet_host_ipv6_address_key](vmnet_host_ipv6_address_key.md)
- [vmnet_host_subnet_mask_key](vmnet_host_subnet_mask_key.md)
- [vmnet_nat66_prefix_key](vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_nat66_prefix_length_key](vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_network_identifier_key](vmnet_network_identifier_key.md): The identifier that uniquely identifies this network as a UUID.
- [vmnet_read_max_packets_key](vmnet_read_max_packets_key.md)
- [vmnet_shared_interface_name_key](vmnet_shared_interface_name_key.md): A string that represents the name of the interface to use when the operating mode of the interface in the vmnet bridged mode.
- [vmnet_start_address_key](vmnet_start_address_key.md): A string that represents th starting IPv4 address to use for the interface.
- [vmnet_operation_mode_key](vmnet_operation_mode_key.md): The mode to use to configure the guest operating system network interface.
