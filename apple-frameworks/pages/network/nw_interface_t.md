> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/network/nw_interface_t](https://developer.apple.com/documentation/network/nw_interface_t)

# nw_interface_t (Swift)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that a network connection uses to send and receive data.

## Declaration

```swift
typealias nw_interface_t = any OS_nw_interface
```

## Topics

### Network Interface Types

- [nw_interface_type_t](nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.

### Inspecting Interfaces

- [nw_interface_get_type(\_:)](nw_interface_get_type%28__%29.md): Accesses the type of the interface, such as Wi-Fi or Loopback.
- [nw_interface_get_name(\_:)](nw_interface_get_name%28__%29.md): Accesses the name of the interface.
- [nw_interface_get_index(\_:)](nw_interface_get_index%28__%29.md): Accesses the system interface index associated with the interface.

# nw_interface_t (Objective-C)

**Framework:** Network  
**Kind:** Type Alias  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+ · watchOS 6.0+

An interface that a network connection uses to send and receive data.

## Declaration

```objectivec
typedef NSObject<OS_nw_interface> * nw_interface_t;
```

## Topics

### Network Interface Types

- [nw_interface_type_t](nw_interface_type_t.md): Types of network interfaces, based on their link layer media types.

### Inspecting Interfaces

- [nw_interface_get_type](nw_interface_get_type%28__%29.md): Accesses the type of the interface, such as Wi-Fi or Loopback.
- [nw_interface_get_name](nw_interface_get_name%28__%29.md): Accesses the name of the interface.
- [nw_interface_get_index](nw_interface_get_index%28__%29.md): Accesses the system interface index associated with the interface.

## See Also

### Paths and Interfaces

- [nw_path_t](nw_path_t.md): An object that contains information about the properties of the network that a connection uses, or that are available to your app.
- [nw_path_monitor_t](nw_path_monitor_t.md): An observer that you use to monitor and react to network changes.
