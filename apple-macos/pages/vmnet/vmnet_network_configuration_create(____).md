> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/vmnet/vmnet_network_configuration_create(_:_:)](https://developer.apple.com/documentation/vmnet/vmnet_network_configuration_create(_:_:))

# vmnet_network_configuration_create(\_:\_:) (Swift)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a network configuration object with the specified operating mode.

## Declaration

```swift
func vmnet_network_configuration_create(_ mode: vmnet_mode_t, _ status: UnsafeMutablePointer<vmnet_return_t>?) -> vmnet_network_configuration_ref?
```

## Parameters

- `mode`: Shared mode or host-only mode.
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

A vmnet network handle on success, otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

All other parameters are optional and have the following default value:

- External interface: default interface per the routing table
- NAT44: enabled
- NAT66: enabled
- DHCP: enabled
- DNS proxy: enabled
- Router advertisement: enabled
- IPv4 subnet: A /24 suffix, under 192.168/16 (the private address space defined by RFC-1918).
- IPv6 prefix: random Unique Local Addresses (ULA) prefix
- Port forwarding rule: none
- DHCP reservation: none
- MTU: 1500

Use [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to release the network configuration object.

## See Also

### Creating a network configuration

- [vmnet_network_create(\_:\_:)](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_create_with_serialization(\_:\_:)](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization(\_:\_:)](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.

# vmnet_network_configuration_create (Objective-C)

**Framework:** vmnet  
**Kind:** Function  
**Availability:** Mac Catalyst 13.0+ · macOS 26.0+

Creates a network configuration object with the specified operating mode.

## Declaration

```objectivec
vmnet_network_configuration_refvmnet_network_configuration_create(vmnet_mode_t mode, vmnet_return_t *status);
```

## Parameters

- `mode`: Shared mode or host-only mode.
- `status`: Optional output parameter, returns status.

<a id="return-value"></a>

## Return Value

A vmnet network handle on success, otherwise `NULL`.

<a id="Discussion"></a>

## Discussion

All other parameters are optional and have the following default value:

- External interface: default interface per the routing table
- NAT44: enabled
- NAT66: enabled
- DHCP: enabled
- DNS proxy: enabled
- Router advertisement: enabled
- IPv4 subnet: A /24 suffix, under 192.168/16 (the private address space defined by RFC-1918).
- IPv6 prefix: random Unique Local Addresses (ULA) prefix
- Port forwarding rule: none
- DHCP reservation: none
- MTU: 1500

Use [CFRelease](https://developer.apple.com/documentation/corefoundation/cfrelease) to release the network configuration object.

## See Also

### Creating a network configuration

- [vmnet_network_create](vmnet_network_create%28____%29.md): Creates a vmnet network based on the provided configuration.
- [vmnet_network_create_with_serialization](vmnet_network_create_with_serialization%28____%29.md): Creates a vmnet network from an XPC object you obtained from calling the vmnet networkcopy serialization API.
- [vmnet_network_copy_serialization](vmnet_network_copy_serialization%28____%29.md): Serializes a vmnet network to an XPC object.
