> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_path_t](https://developer.apple.com/documentation/network/nw_path_t)

# nw_path_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains information about the properties of the network that a connection uses, or that are available to your app.

## Declaration

```swift
typealias nw_path_t = any OS_nw_path
```

## Topics

### Checking Path Availability

- [nw_path_get_status(\_:)](nw_path_get_status%28__%29.md): Checks whether a path can be used by connections.
- [nw_path_status_t](nw_path_status_t.md): Status values indicating whether a path can be used by connections.

### Inspecting Interfaces

- [nw_path_uses_interface_type(\_:\_:)](nw_path_uses_interface_type%28____%29.md): Checks if connections using the path may send traffic over a specific interface type.
- [nw_path_enumerate_interfaces(\_:\_:)](nw_path_enumerate_interfaces%28____%29.md): Enumerates the list of all interfaces available to the path, in order of preference.
- [nw_path_enumerate_interfaces_block_t](nw_path_enumerate_interfaces_block_t.md): A block that enumerates the interfaces available to a path.
- [nw_path_enumerate_gateways(\_:\_:)](nw_path_enumerate_gateways%28____%29.md): Enumerates the list of gateways configured on the interfaces available to a path.
- [nw_path_enumerate_gateways_block_t](nw_path_enumerate_gateways_block_t.md): A block that enumerates the gateways configured on the interfaces available to a path.

### Checking Path Capabilities

- [nw_path_has_ipv4(\_:)](nw_path_has_ipv4%28__%29.md): Checks whether the path can route IPv4 traffic.
- [nw_path_has_ipv6(\_:)](nw_path_has_ipv6%28__%29.md): Checks whether the path can route IPv6 traffic.
- [nw_path_has_dns(\_:)](nw_path_has_dns%28__%29.md): Checks whether the path has a DNS server configured.
- [nw_path_is_constrained(\_:)](nw_path_is_constrained%28__%29.md): Checks whether the path uses an interface in Low Data Mode.
- [nw_path_is_expensive(\_:)](nw_path_is_expensive%28__%29.md): Checks whether the path uses an interface that is considered expensive, such as Cellular or a Personal Hotspot.

### Comparing Paths

- [nw_path_is_equal(\_:\_:)](nw_path_is_equal%28____%29.md): Compares if two paths are identical.

### Inspecting Connected Paths

- [nw_path_copy_effective_local_endpoint(\_:)](nw_path_copy_effective_local_endpoint%28__%29.md): Accesses the local endpoint in use by a connection’s network path.
- [nw_path_copy_effective_remote_endpoint(\_:)](nw_path_copy_effective_remote_endpoint%28__%29.md): Accesses the remote endpoint in use by a connection’s network path.

# nw_path_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An object that contains information about the properties of the network that a connection uses, or that are available to your app.

## Declaration

```objectivec
typedef NSObject<OS_nw_path> * nw_path_t;
```

## Topics

### Checking Path Availability

- [nw_path_get_status](nw_path_get_status%28__%29.md): Checks whether a path can be used by connections.
- [nw_path_status_t](nw_path_status_t.md): Status values indicating whether a path can be used by connections.

### Inspecting Interfaces

- [nw_path_uses_interface_type](nw_path_uses_interface_type%28____%29.md): Checks if connections using the path may send traffic over a specific interface type.
- [nw_path_enumerate_interfaces](nw_path_enumerate_interfaces%28____%29.md): Enumerates the list of all interfaces available to the path, in order of preference.
- [nw_path_enumerate_interfaces_block_t](nw_path_enumerate_interfaces_block_t.md): A block that enumerates the interfaces available to a path.
- [nw_path_enumerate_gateways](nw_path_enumerate_gateways%28____%29.md): Enumerates the list of gateways configured on the interfaces available to a path.
- [nw_path_enumerate_gateways_block_t](nw_path_enumerate_gateways_block_t.md): A block that enumerates the gateways configured on the interfaces available to a path.

### Checking Path Capabilities

- [nw_path_has_ipv4](nw_path_has_ipv4%28__%29.md): Checks whether the path can route IPv4 traffic.
- [nw_path_has_ipv6](nw_path_has_ipv6%28__%29.md): Checks whether the path can route IPv6 traffic.
- [nw_path_has_dns](nw_path_has_dns%28__%29.md): Checks whether the path has a DNS server configured.
- [nw_path_is_constrained](nw_path_is_constrained%28__%29.md): Checks whether the path uses an interface in Low Data Mode.
- [nw_path_is_expensive](nw_path_is_expensive%28__%29.md): Checks whether the path uses an interface that is considered expensive, such as Cellular or a Personal Hotspot.

### Comparing Paths

- [nw_path_is_equal](nw_path_is_equal%28____%29.md): Compares if two paths are identical.

### Inspecting Connected Paths

- [nw_path_copy_effective_local_endpoint](nw_path_copy_effective_local_endpoint%28__%29.md): Accesses the local endpoint in use by a connection’s network path.
- [nw_path_copy_effective_remote_endpoint](nw_path_copy_effective_remote_endpoint%28__%29.md): Accesses the remote endpoint in use by a connection’s network path.

## See Also

### Paths and Interfaces

- [nw_path_monitor_t](nw_path_monitor_t.md): An observer that you use to monitor and react to network changes.
- [nw_interface_t](nw_interface_t.md): An interface that a network connection uses to send and receive data.
