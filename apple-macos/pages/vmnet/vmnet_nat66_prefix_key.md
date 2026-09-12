> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_nat66_prefix_key](https://developer.apple.com/documentation/vmnet/vmnet_nat66_prefix_key)

# vmnet_nat66_prefix_key (Swift)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

The IPv6 prefix string to use with vmnet shared mode.

## Declaration

```swift
let vmnet_nat66_prefix_key: UnsafePointer<CChar>
```

<a id="Discussion"></a>

## Discussion

Use this with the `VMNET_SHARED_MODE`; the prefix must be a Unique Local Addresses (ULA) and start with one of the ULA prefixes such as `fd00::/8`. For more information on ULAs, see [RFC-4193](https://datatracker.ietf.org/doc/html/rfc4193).

## See Also

### Customizing a network configuration

- [vmnet_network_configuration_ref](vmnet_network_configuration_ref.md): A reference to a network vmnet network configuration.
- [vmnet_network_configuration_add_dhcp_reservation(\_:\_:\_:)](vmnet_network_configuration_add_dhcp_reservation%28______%29.md): Configures a new dhcp reservation for a vmnet network.
- [vmnet_network_configuration_add_port_forwarding_rule(\_:\_:\_:\_:\_:\_:)](vmnet_network_configuration_add_port_forwarding_rule%28____________%29.md): Configures a new port forwarding rule for a vmnet network.
- [vmnet_network_configuration_disable_router_advertisement(\_:)](vmnet_network_configuration_disable_router_advertisement%28__%29.md): Disables router advertisement on a network.
- [vmnet_network_configuration_disable_nat66(\_:)](vmnet_network_configuration_disable_nat66%28__%29.md): Disables NAT66 on a network.
- [vmnet_network_configuration_disable_nat44(\_:)](vmnet_network_configuration_disable_nat44%28__%29.md): Disables NAT44 on a network.
- [vmnet_network_configuration_disable_dns_proxy(\_:)](vmnet_network_configuration_disable_dns_proxy%28__%29.md): Disables the DNS proxy on a network.
- [vmnet_network_configuration_disable_dhcp(\_:)](vmnet_network_configuration_disable_dhcp%28__%29.md): Disables DHCP server on a network.
- [vmnet_nat66_prefix_length_key](vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_port_forwarding_rule_get_details(\_:\_:\_:\_:\_:)](vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.
- [vmnet_network_configuration_set_external_interface(\_:\_:)](vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet(\_:\_:\_:)](vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix(\_:\_:\_:)](vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu(\_:\_:)](vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix(\_:\_:\_:)](vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.

# vmnet_nat66_prefix_key (Objective-C)

**Framework:** vmnet  
**Kind:** Global Variable  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+

The IPv6 prefix string to use with vmnet shared mode.

## Declaration

```objectivec
extern const char * const vmnet_nat66_prefix_key;
```

<a id="Discussion"></a>

## Discussion

Use this with the `VMNET_SHARED_MODE`; the prefix must be a Unique Local Addresses (ULA) and start with one of the ULA prefixes such as `fd00::/8`. For more information on ULAs, see [RFC-4193](https://datatracker.ietf.org/doc/html/rfc4193).

## See Also

### Customizing a network configuration

- [vmnet_network_configuration_ref](vmnet_network_configuration_ref.md): A reference to a network vmnet network configuration.
- [vmnet_network_configuration_add_dhcp_reservation](vmnet_network_configuration_add_dhcp_reservation%28______%29.md): Configures a new dhcp reservation for a vmnet network.
- [vmnet_network_configuration_add_port_forwarding_rule](vmnet_network_configuration_add_port_forwarding_rule%28____________%29.md): Configures a new port forwarding rule for a vmnet network.
- [vmnet_network_configuration_disable_router_advertisement](vmnet_network_configuration_disable_router_advertisement%28__%29.md): Disables router advertisement on a network.
- [vmnet_network_configuration_disable_nat66](vmnet_network_configuration_disable_nat66%28__%29.md): Disables NAT66 on a network.
- [vmnet_network_configuration_disable_nat44](vmnet_network_configuration_disable_nat44%28__%29.md): Disables NAT44 on a network.
- [vmnet_network_configuration_disable_dns_proxy](vmnet_network_configuration_disable_dns_proxy%28__%29.md): Disables the DNS proxy on a network.
- [vmnet_network_configuration_disable_dhcp](vmnet_network_configuration_disable_dhcp%28__%29.md): Disables DHCP server on a network.
- [vmnet_nat66_prefix_length_key](vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_port_forwarding_rule_get_details](vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.
- [vmnet_network_configuration_set_external_interface](vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet](vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix](vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu](vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix](vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.
