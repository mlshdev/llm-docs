> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiotraditionalmemoryballoondeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiotraditionalmemoryballoondeviceconfiguration)

# VZVirtioTraditionalMemoryBalloonDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that provides a way to reclaim memory from the guest system.

## Declaration

```swift
class VZVirtioTraditionalMemoryBalloonDeviceConfiguration
```

<a id="overview"></a>

## Overview

Create a `VZVirtioTraditionalMemoryBalloonDeviceConfiguration` object when you want the ability to reclaim memory from the guest operating system. After creating this object, add it to the [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object. In response, the virtual machine provides a [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md) object, which you use to initiate memory-related requests with the guest system. Access that object from the [memoryBalloonDevices](vzvirtualmachine/memoryballoondevices.md) property of [VZVirtualMachine](vzvirtualmachine.md).

> **Important**

>  Create only one `VZVirtioTraditionalMemoryBalloonDeviceConfiguration` object for your virtual machine.

## Topics

### Creating the Configuration Object

- [init()](vzvirtiotraditionalmemoryballoondeviceconfiguration/init%28%29.md): Creates a memory ballon device configuration object to include with your virtual machine’s configuration data.

## Relationships

### Inherits From

- [VZMemoryBalloonDeviceConfiguration](vzmemoryballoondeviceconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Configuration

- [VZMemoryBalloonDeviceConfiguration](vzmemoryballoondeviceconfiguration.md): The common configuration traits for memory balloon devices.

# VZVirtioTraditionalMemoryBalloonDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

A configuration object that provides a way to reclaim memory from the guest system.

## Declaration

```objectivec
@interface VZVirtioTraditionalMemoryBalloonDeviceConfiguration : VZMemoryBalloonDeviceConfiguration
```

<a id="overview"></a>

## Overview

Create a `VZVirtioTraditionalMemoryBalloonDeviceConfiguration` object when you want the ability to reclaim memory from the guest operating system. After creating this object, add it to the [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object. In response, the virtual machine provides a [VZVirtioTraditionalMemoryBalloonDevice](vzvirtiotraditionalmemoryballoondevice.md) object, which you use to initiate memory-related requests with the guest system. Access that object from the [memoryBalloonDevices](vzvirtualmachine/memoryballoondevices.md) property of [VZVirtualMachine](vzvirtualmachine.md).

> **Important**

>  Create only one `VZVirtioTraditionalMemoryBalloonDeviceConfiguration` object for your virtual machine.

## Topics

### Creating the Configuration Object

- [init](vzvirtiotraditionalmemoryballoondeviceconfiguration/init%28%29.md): Creates a memory ballon device configuration object to include with your virtual machine’s configuration data.

## Relationships

### Inherits From

- [VZMemoryBalloonDeviceConfiguration](vzmemoryballoondeviceconfiguration.md)

## See Also

### Configuration

- [VZMemoryBalloonDeviceConfiguration](vzmemoryballoondeviceconfiguration.md): The common configuration traits for memory balloon devices.
