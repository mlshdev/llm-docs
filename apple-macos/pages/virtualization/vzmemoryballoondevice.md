> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmemoryballoondevice](https://developer.apple.com/documentation/virtualization/vzmemoryballoondevice)

# VZMemoryBalloonDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behavior for memory devices.

## Declaration

```swift
class VZMemoryBalloonDevice
```

<a id="overview"></a>

## Overview

Don’t instantiate this class directly. To request a memory ballon device, add an appropriate configuration object to the [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md) property of the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object that you use to configure the virtual machine. In response, the system instantiates the subclass of [VZMemoryBalloonDevice](vzmemoryballoondevice.md) that matches your request. For example, if you supply a [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object in your configuration, the system creates a [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md) object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Memory balloon devices

- [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md): The object you use to change the amount of memory allocated to the guest system.

# VZMemoryBalloonDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common behavior for memory devices.

## Declaration

```objectivec
@interface VZMemoryBalloonDevice : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate this class directly. To request a memory ballon device, add an appropriate configuration object to the [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md) property of the [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object that you use to configure the virtual machine. In response, the system instantiates the subclass of [VZMemoryBalloonDevice](vzmemoryballoondevice.md) that matches your request. For example, if you supply a [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md) object in your configuration, the system creates a [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md) object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md)

## See Also

### Memory balloon devices

- [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md): The object you use to change the amount of memory allocated to the guest system.
