> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzbridgednetworkinterface](https://developer.apple.com/documentation/virtualization/vzbridgednetworkinterface)

# VZBridgedNetworkInterface (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that identifies the supported network interfaces of the host computer.

## Declaration

```swift
class VZBridgedNetworkInterface
```

<a id="overview"></a>

## Overview

Use a [VZBridgedNetworkInterface](vzbridgednetworkinterface.md) object to retrieve the physical interfaces on the host computer. Use a bridged network interface to create a [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object, which maps that interface to one of your virtual machine’s network devices. The host computer and your virtual machine share access to the physical network interface, but communicate over it using distinct network layers.

You don’t create [VZBridgedNetworkInterface](vzbridgednetworkinterface.md) objects directly. Instead, the system creates one object for each physical interface of the host computer and stores those objects in the [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md) property. Iterate over the objects in that property to retrieve the network interfaces you need.

## Topics

### Getting the available interfaces

- [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md): The bridged network interfaces that you may use in your virtual machine.

### Getting the interface description

- [identifier](vzbridgednetworkinterface/identifier.md): The unique BSD name of this network interface.
- [localizedDisplayName](vzbridgednetworkinterface/localizeddisplayname.md): A user-visible name for the network interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

# VZBridgedNetworkInterface (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that identifies the supported network interfaces of the host computer.

## Declaration

```objectivec
@interface VZBridgedNetworkInterface : NSObject
```

<a id="overview"></a>

## Overview

Use a [VZBridgedNetworkInterface](vzbridgednetworkinterface.md) object to retrieve the physical interfaces on the host computer. Use a bridged network interface to create a [VZBridgedNetworkDeviceAttachment](vzbridgednetworkdeviceattachment.md) object, which maps that interface to one of your virtual machine’s network devices. The host computer and your virtual machine share access to the physical network interface, but communicate over it using distinct network layers.

You don’t create [VZBridgedNetworkInterface](vzbridgednetworkinterface.md) objects directly. Instead, the system creates one object for each physical interface of the host computer and stores those objects in the [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md) property. Iterate over the objects in that property to retrieve the network interfaces you need.

## Topics

### Getting the available interfaces

- [networkInterfaces](vzbridgednetworkinterface/networkinterfaces.md): The bridged network interfaces that you may use in your virtual machine.

### Getting the interface description

- [identifier](vzbridgednetworkinterface/identifier.md): The unique BSD name of this network interface.
- [localizedDisplayName](vzbridgednetworkinterface/localizeddisplayname.md): A user-visible name for the network interface.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)
