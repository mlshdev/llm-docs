> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vznetworkdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vznetworkdeviceconfiguration)

# VZNetworkDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for network devices.

## Declaration

```swift
class VZNetworkDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate the [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md) class directly. Instead, instantiate one of its subclasses, such as [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md). Then use the properties of this class to configure the network device.

## Topics

### Setting configuration attributes

- [attachment](vznetworkdeviceconfiguration/attachment.md): The object that defines how the virtual network device communicates with the host system.
- [macAddress](vznetworkdeviceconfiguration/macaddress.md): The media access control (MAC) address to assign to the network device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md)

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
- [VZMACAddress](vzmacaddress.md): The media access control (MAC) address for a network interface in your virtual machine.

# VZNetworkDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for network devices.

## Declaration

```objectivec
@interface VZNetworkDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate the [VZNetworkDeviceConfiguration](vznetworkdeviceconfiguration.md) class directly. Instead, instantiate one of its subclasses, such as [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md). Then use the properties of this class to configure the network device.

## Topics

### Setting configuration attributes

- [attachment](vznetworkdeviceconfiguration/attachment.md): The object that defines how the virtual network device communicates with the host system.
- [MACAddress](vznetworkdeviceconfiguration/macaddress.md): The media access control (MAC) address to assign to the network device.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioNetworkDeviceConfiguration](vzvirtionetworkdeviceconfiguration.md): A configuration object that requests the creation of a network device for the guest system.
- [VZMACAddress](vzmacaddress.md): The media access control (MAC) address for a network interface in your virtual machine.
