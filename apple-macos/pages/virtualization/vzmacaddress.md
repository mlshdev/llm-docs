> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacaddress](https://developer.apple.com/documentation/virtualization/vzmacaddress)

# VZMACAddress (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The media access control (MAC) address for a network interface in your virtual machine.

## Declaration

```swift
class VZMACAddress
```

<a id="overview"></a>

## Overview

A [VZMACAddress](vzmacaddress.md) object contains the hardware address of your network interface. Every network device has a unique 48-bit MAC address that the system uses to route network packets to that device.

Call the [randomLocallyAdministered()](vzmacaddress/randomlocallyadministered%28%29.md) method to get a local MAC address suitable for use with your network interfaces. Alternatively, you can create a [VZMACAddress](vzmacaddress.md) object yourself from a string or `ether_addr_t` structure.

## Topics

### Creating a MAC address

- [randomLocallyAdministered()](vzmacaddress/randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [init(string:)](vzmacaddress/init%28string_%29.md): Creates a MAC address object from a specially formatted string.
- [init(ethernetAddress:)](vzmacaddress/init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.

### Getting the address

- [string](vzmacaddress/string.md): The MAC address as a formatted string.
- [ethernetAddress](vzmacaddress/ethernetaddress.md): The MAC address as an Ethernet data structure.

### Getting address attributes

- [isBroadcastAddress](vzmacaddress/isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](vzmacaddress/ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](vzmacaddress/isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](vzmacaddress/islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](vzmacaddress/isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configurations

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md): A configuration object that requests the creation of a network device for the guest system.
- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.

# VZMACAddress (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The media access control (MAC) address for a network interface in your virtual machine.

## Declaration

```objectivec
@interface VZMACAddress : NSObject
```

<a id="overview"></a>

## Overview

A [VZMACAddress](vzmacaddress.md) object contains the hardware address of your network interface. Every network device has a unique 48-bit MAC address that the system uses to route network packets to that device.

Call the [randomLocallyAdministeredAddress](vzmacaddress/randomlocallyadministered%28%29.md) method to get a local MAC address suitable for use with your network interfaces. Alternatively, you can create a [VZMACAddress](vzmacaddress.md) object yourself from a string or `ether_addr_t` structure.

## Topics

### Creating a MAC address

- [randomLocallyAdministeredAddress](vzmacaddress/randomlocallyadministered%28%29.md): Returns a valid, random, locally administered, unicast MAC address.
- [initWithString:](vzmacaddress/init%28string_%29.md): Creates a MAC address object from a specially formatted string.
- [initWithEthernetAddress:](vzmacaddress/init%28ethernetaddress_%29.md): Creates a MAC address from the specified 48-bit Ethernet address.

### Getting the address

- [string](vzmacaddress/string.md): The MAC address as a formatted string.
- [ethernetAddress](vzmacaddress/ethernetaddress.md): The MAC address as an Ethernet data structure.

### Getting address attributes

- [isBroadcastAddress](vzmacaddress/isbroadcastaddress.md): A Boolean value that indicates whether the address is a broadcast address.
- [isMulticastAddress](vzmacaddress/ismulticastaddress.md): A Boolean value that indicates whether the address is a multicast address.
- [isUnicastAddress](vzmacaddress/isunicastaddress.md): A Boolean value that indicates whether the address is a unicast address.
- [isLocallyAdministeredAddress](vzmacaddress/islocallyadministeredaddress.md): A Boolean value that indicates whether the address is a locally administered address (LAA).
- [isUniversallyAdministeredAddress](vzmacaddress/isuniversallyadministeredaddress.md): A Boolean value that indicates whether the address is a universally adminstered address (UAA).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md): A configuration object that requests the creation of a network device for the guest system.
- [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md): The common configuration traits for network devices.
