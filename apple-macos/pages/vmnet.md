> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet](https://developer.apple.com/documentation/vmnet)

# vmnet (Swift)

**Framework:** vmnet  
**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Connect with network interfaces to read and write packets on guest operating systems.

<a id="overview"></a>

## Overview

The vmnet framework is an API for virtual machines to read and write packets.

The API allows a Guest OS interface to be in host mode or shared mode. Interfaces in host mode can communicate with the native host system and other interfaces running in host mode. In shared mode, the network interface can send and receive packets to the Internet, the native host, and other interfaces running in sharing mode.

> **Note**

> For more information about virtualization technologies, see the [Hypervisor](hypervisor.md) framework.

<a id="Requirements"></a>

### Requirements

The vmnet framework has the following requirements:

<a id="Entitlements"></a>

#### Entitlements

A sandboxed user space process must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement in order to use the vmnet API.

<a id="Architecture"></a>

### Architecture

![](https://developer.apple.com/images/com.apple.vmnet/media-2557515@2x.png)

The VM Network API provides support for an interface in the guest operating system. The API provides the MAC address and MTU that you need to be configure on the guest OS interface. The interface receives a private IPv4 address via DHCP. IPv4 traffic originating from the guest operating system must use the private IPv4 address. The system drops packets sent from a different IPv4 address.

You can create a maximum of 32 interfaces with a limit of 4 per guest operating system. Each read or write call allows up to 200 packets to be read or written for a maximum of 256KB. Each packet written needs to be a complete ethernet frame.

## Topics

### Essentials

- [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking): A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.

### Creating a network configuration

- [vmnet_network_create(\_:\_:)](vmnet/vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create(\_:\_:)](vmnet/vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization(\_:\_:)](vmnet/vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization(\_:\_:)](vmnet/vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.

### Starting and stopping interfaces

- [vmnet_start_interface(\_:\_:\_:)](vmnet/vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network(\_:\_:\_:\_:)](vmnet/vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback(\_:\_:\_:\_:)](vmnet/vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface(\_:\_:\_:)](vmnet/vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.

### Customizing a network configuration

- [vmnet_network_configuration_ref](vmnet/vmnet_network_configuration_ref.md): A reference to a network vmnet network configuration.
- [vmnet_network_configuration_add_dhcp_reservation(\_:\_:\_:)](vmnet/vmnet_network_configuration_add_dhcp_reservation%28______%29.md): Configures a new dhcp reservation for a vmnet network.
- [vmnet_network_configuration_add_port_forwarding_rule(\_:\_:\_:\_:\_:\_:)](vmnet/vmnet_network_configuration_add_port_forwarding_rule%28____________%29.md): Configures a new port forwarding rule for a vmnet network.
- [vmnet_network_configuration_disable_router_advertisement(\_:)](vmnet/vmnet_network_configuration_disable_router_advertisement%28__%29.md): Disables router advertisement on a network.
- [vmnet_network_configuration_disable_nat66(\_:)](vmnet/vmnet_network_configuration_disable_nat66%28__%29.md): Disables NAT66 on a network.
- [vmnet_network_configuration_disable_nat44(\_:)](vmnet/vmnet_network_configuration_disable_nat44%28__%29.md): Disables NAT44 on a network.
- [vmnet_network_configuration_disable_dns_proxy(\_:)](vmnet/vmnet_network_configuration_disable_dns_proxy%28__%29.md): Disables the DNS proxy on a network.
- [vmnet_network_configuration_disable_dhcp(\_:)](vmnet/vmnet_network_configuration_disable_dhcp%28__%29.md): Disables DHCP server on a network.
- [vmnet_nat66_prefix_length_key](vmnet/vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_nat66_prefix_key](vmnet/vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_port_forwarding_rule_get_details(\_:\_:\_:\_:\_:)](vmnet/vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.
- [vmnet_network_configuration_set_external_interface(\_:\_:)](vmnet/vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet(\_:\_:\_:)](vmnet/vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix(\_:\_:\_:)](vmnet/vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu(\_:\_:)](vmnet/vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix(\_:\_:\_:)](vmnet/vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.
- [vmnet_network_get_ipv4_subnet(\_:\_:\_:)](vmnet/vmnet_network_get_ipv4_subnet%28______%29.md): Returns the IPv4 subnet of a network.

### Reading and Writing Packets

- [vmnet_read(\_:\_:\_:)](vmnet/vmnet_read%28______%29.md): Attempts to read a specified number of packets from an interface.
- [vmnet_write(\_:\_:\_:)](vmnet/vmnet_write%28______%29.md): Attempts to write specified packets to an interface.

### Data types

- [vmnet_return_t](vmnet/vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmnet/vmpktdesc.md): Describes a packet.
- [interface_ref](vmnet/interface_ref.md): A virtual network interface.
- [interface_event_t](vmnet/interface_event_t.md): Interface event types.
- [operating_modes_t](vmnet/operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet/vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet/vmnet_network_ref.md): A pointer to a network structure.

### Constants

- [interface_desc XPC Dictionary Keys](vmnet/interface_desc_xpc_dictionary_keys.md): XPC dictionary keys supported by the `interface_desc` parameter passed to the `vmnet` function to describe the parameters of the network interface.
- [interface_param XPC Dictionary Keys](vmnet/interface_param_xpc_dictionary_keys.md): XPC dictionary keys used by the `interface_param` argument returned by the completion handler of the `vmnet` function that describes the parameters that should be used to configure the network interface.
- [event XPC Dictionary](vmnet/event_xpc_dictionary.md): XPC dictionary keys used by the `event` value returned to the client in the `handler` callback specified by the `vmnet` function that provides information about the callback event.

### Reference

- [vmnet Constants](vmnet/vmnet_constants.md)
- [vmnet Functions](vmnet/vmnet_functions.md)
- [vmnet Data Types](vmnet/vmnet_data_types.md)

### Variables

- [vmnet_enable_virtio_header_key](vmnet/vmnet_enable_virtio_header_key-swift.var.md): Enable virtio headers in all packets.

# vmnet (Objective-C)

**Framework:** vmnet  
**Kind:** Framework  
**Availability:** Mac Catalyst 13.0+ · macOS 10.10+

Connect with network interfaces to read and write packets on guest operating systems.

<a id="overview"></a>

## Overview

The vmnet framework is an API for virtual machines to read and write packets.

The API allows a Guest OS interface to be in host mode or shared mode. Interfaces in host mode can communicate with the native host system and other interfaces running in host mode. In shared mode, the network interface can send and receive packets to the Internet, the native host, and other interfaces running in sharing mode.

> **Note**

> For more information about virtualization technologies, see the [Hypervisor](hypervisor.md) framework.

<a id="Requirements"></a>

### Requirements

The vmnet framework has the following requirements:

<a id="Entitlements"></a>

#### Entitlements

A sandboxed user space process must have the [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking) entitlement in order to use the vmnet API.

<a id="Architecture"></a>

### Architecture

![](https://developer.apple.com/images/com.apple.vmnet/media-2557515@2x.png)

The VM Network API provides support for an interface in the guest operating system. The API provides the MAC address and MTU that you need to be configure on the guest OS interface. The interface receives a private IPv4 address via DHCP. IPv4 traffic originating from the guest operating system must use the private IPv4 address. The system drops packets sent from a different IPv4 address.

You can create a maximum of 32 interfaces with a limit of 4 per guest operating system. Each read or write call allows up to 200 packets to be read or written for a maximum of 256KB. Each packet written needs to be a complete ethernet frame.

## Topics

### Essentials

- [com.apple.vm.networking](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.vm.networking): A Boolean that indicates whether the app manages virtual network interfaces without escalating privileges to the root user.

### Creating a network configuration

- [vmnet_network_create](vmnet/vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_configuration_create](vmnet/vmnet_network_configuration_create%28____%29.md): Creates a network configuration object with the specified operating mode.
- [vmnet_network_create_with_serialization](vmnet/vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization](vmnet/vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.

### Starting and stopping interfaces

- [vmnet_start_interface](vmnet/vmnet_start_interface%28______%29.md): Starts a new virtual interface instance.
- [vmnet_interface_start_with_network](vmnet/vmnet_interface_start_with_network%28________%29.md): Starts a new virtual interface instance on a network.
- [vmnet_interface_set_event_callback](vmnet/vmnet_interface_set_event_callback%28________%29.md): Schedules a callback to be executed when events for the specified interface are received.
- [vmnet_stop_interface](vmnet/vmnet_stop_interface%28______%29.md): Stops I/O on the virtual interface.

### Customizing a network configuration

- [vmnet_network_configuration_ref](vmnet/vmnet_network_configuration_ref.md): A reference to a network vmnet network configuration.
- [vmnet_network_configuration_add_dhcp_reservation](vmnet/vmnet_network_configuration_add_dhcp_reservation%28______%29.md): Configures a new dhcp reservation for a vmnet network.
- [vmnet_network_configuration_add_port_forwarding_rule](vmnet/vmnet_network_configuration_add_port_forwarding_rule%28____________%29.md): Configures a new port forwarding rule for a vmnet network.
- [vmnet_network_configuration_disable_router_advertisement](vmnet/vmnet_network_configuration_disable_router_advertisement%28__%29.md): Disables router advertisement on a network.
- [vmnet_network_configuration_disable_nat66](vmnet/vmnet_network_configuration_disable_nat66%28__%29.md): Disables NAT66 on a network.
- [vmnet_network_configuration_disable_nat44](vmnet/vmnet_network_configuration_disable_nat44%28__%29.md): Disables NAT44 on a network.
- [vmnet_network_configuration_disable_dns_proxy](vmnet/vmnet_network_configuration_disable_dns_proxy%28__%29.md): Disables the DNS proxy on a network.
- [vmnet_network_configuration_disable_dhcp](vmnet/vmnet_network_configuration_disable_dhcp%28__%29.md): Disables DHCP server on a network.
- [vmnet_nat66_prefix_length_key](vmnet/vmnet_nat66_prefix_length_key.md): Deprecated. The IPv6 prefix (uint64) to use with vmnet shared mode.
- [vmnet_nat66_prefix_key](vmnet/vmnet_nat66_prefix_key.md): The IPv6 prefix string to use with vmnet shared mode.
- [vmnet_port_forwarding_rule_get_details](vmnet/vmnet_port_forwarding_rule_get_details%28__________%29.md): Deprecated. Extracts port forwarding rule details from the rule XPC dictionary object.
- [vmnet_network_configuration_set_external_interface](vmnet/vmnet_network_configuration_set_external_interface%28____%29.md): Configures the external interface of a vmnet network.
- [vmnet_network_configuration_set_ipv4_subnet](vmnet/vmnet_network_configuration_set_ipv4_subnet%28______%29.md): Configures the IPv4 addresses of a vmnet network.
- [vmnet_network_configuration_set_ipv6_prefix](vmnet/vmnet_network_configuration_set_ipv6_prefix%28______%29.md): Configures the IPv6 prefix for a vmnet network object.
- [vmnet_network_configuration_set_mtu](vmnet/vmnet_network_configuration_set_mtu%28____%29.md): Configures the maximum transmission unit (MTU) for a vmnet network.
- [vmnet_network_get_ipv6_prefix](vmnet/vmnet_network_get_ipv6_prefix%28______%29.md): Returns the IPv6 prefix of a network.
- [vmnet_network_get_ipv4_subnet](vmnet/vmnet_network_get_ipv4_subnet%28______%29.md): Returns the IPv4 subnet of a network.

### Reading and Writing Packets

- [vmnet_read](vmnet/vmnet_read%28______%29.md): Attempts to read a specified number of packets from an interface.
- [vmnet_write](vmnet/vmnet_write%28______%29.md): Attempts to write specified packets to an interface.

### Data types

- [vmnet_return_t](vmnet/vmnet_return_t.md): Values returned by functions in the vmnet Framework.
- [vmpktdesc](vmnet/vmpktdesc.md): Describes a packet.
- [interface_ref](vmnet/interface_ref.md): A virtual network interface.
- [interface_event_t](vmnet/interface_event_t.md): Interface event types.
- [operating_modes_t](vmnet/operating_modes_t.md): The operating modes for an interface.
- [vmnet_mode_t](vmnet/vmnet_mode_t.md): A type that defines the operating modes of the vmnet interface.
- [vmnet_network_ref](vmnet/vmnet_network_ref.md): A pointer to a network structure.

### Constants

- [interface_desc XPC Dictionary Keys](vmnet/interface_desc_xpc_dictionary_keys.md): XPC dictionary keys supported by the `interface_desc` parameter passed to the `vmnet` function to describe the parameters of the network interface.
- [interface_param XPC Dictionary Keys](vmnet/interface_param_xpc_dictionary_keys.md): XPC dictionary keys used by the `interface_param` argument returned by the completion handler of the `vmnet` function that describes the parameters that should be used to configure the network interface.
- [event XPC Dictionary](vmnet/event_xpc_dictionary.md): XPC dictionary keys used by the `event` value returned to the client in the `handler` callback specified by the `vmnet` function that provides information about the callback event.

### Reference

- [vmnet Constants](vmnet/vmnet_constants.md)
- [vmnet Functions](vmnet/vmnet_functions.md)
- [vmnet Data Types](vmnet/vmnet_data_types.md)

### Variables

- [vmnet_enable_virtio_header_key](vmnet/vmnet_enable_virtio_header_key-swift.var.md): Enable virtio headers in all packets.

### Macros

- [vmnet_enable_virtio_header_key](vmnet/vmnet_enable_virtio_header_key-c.macro.md)
