> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_port_forwarding_rule_get_details(_:_:_:_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_port_forwarding_rule_get_details(_:_:_:_:_:))

# vmnet_port_forwarding_rule_get_details(\_:\_:\_:\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+ (deprecated in 12.0)

Extracts port forwarding rule details from the rule XPC dictionary object.

## Declaration

```swift
func vmnet_port_forwarding_rule_get_details(_ rule: xpc_object_t, _ protocol: UnsafeMutablePointer<UInt8>, _ external_port: UnsafeMutablePointer<UInt16>, _ internal_address: UnsafeMutablePointer<in_addr>, _ internal_port: UnsafeMutablePointer<UInt16>) -> vmnet_return_t
```

## Parameters

- `rule`: The XPC dictionary element from the XPC array provided to the `vmnet_interface_get_port_forward_rules_handler_t` callback.
- `protocol`: Either `IPPROTO_TCP` or `IPPROTO_UDP`. For more information, see the `<netinet/in.h>` include file.
- `external_port`: The TCP or UDP port on the outside network that should be redirected from. Must be in host byte order.
- `internal_address`: The internal address.
- `internal_port`: The internal port number.

<a id="return-value"></a>

## Return Value

`vmnet_return_t/vmnet_return_t.VMNET_SUCCESS` if rule is valid and all details were populated, an error code otherwise.

<a id="Discussion"></a>

## Discussion

Allows you to extract the protocol, external port, internal address, and the internal port from the XPC dictionary object.

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
- [vmnet_nat66_prefix_key](vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_network_configuration_set_external_interface(\_:\_:)](vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet(\_:\_:\_:)](vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix(\_:\_:\_:)](vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu(\_:\_:)](vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix(\_:\_:\_:)](vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.

# vmnet_port_forwarding_rule_get_details (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 10.15+ (deprecated in 12.0)

Extracts port forwarding rule details from the rule XPC dictionary object.

## Declaration

```objectivec
vmnet_return_t vmnet_port_forwarding_rule_get_details(xpc_object_t rule, uint8_t *protocol, uint16_t *external_port, struct in_addr *internal_address, uint16_t *internal_port);
```

## Parameters

- `rule`: The XPC dictionary element from the XPC array provided to the `vmnet_interface_get_port_forward_rules_handler_t` callback.
- `protocol`: Either `IPPROTO_TCP` or `IPPROTO_UDP`. For more information, see the `<netinet/in.h>` include file.
- `external_port`: The TCP or UDP port on the outside network that should be redirected from. Must be in host byte order.
- `internal_address`: The internal address.
- `internal_port`: The internal port number.

<a id="return-value"></a>

## Return Value

`vmnet_return_t/vmnet_return_t.VMNET_SUCCESS` if rule is valid and all details were populated, an error code otherwise.

<a id="Discussion"></a>

## Discussion

Allows you to extract the protocol, external port, internal address, and the internal port from the XPC dictionary object.

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
- [vmnet_nat66_prefix_key](vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_network_configuration_set_external_interface](vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet](vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix](vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu](vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix](vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.
