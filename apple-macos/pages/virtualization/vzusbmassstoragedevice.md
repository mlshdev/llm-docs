> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbmassstoragedevice](https://developer.apple.com/documentation/virtualization/vzusbmassstoragedevice)

# VZUSBMassStorageDevice (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a hot-pluggable USB mass storage device.

## Declaration

```swift
class VZUSBMassStorageDevice
```

<a id="overview"></a>

## Overview

Create this device either by instantiating it directly and passing [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md) to its initializer, or instantiating a `VZUSBMassStorageDeviceConfiguration` in a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md). Direct instantiation creates an object that you can pass to [attach(device:completionHandler:)](vzusbcontroller/attach%28device_completionhandler_%29.md). Instantiation through `VZUSBMassStorageDeviceConfiguration` makes the device available in the [usbDevices](vzusbcontroller/usbdevices.md) property.

## Topics

### Creating a USB mass storage device

- [init(configuration:)](vzusbmassstoragedevice/init%28configuration_%29.md): Creates a USB mass storage device with the provided configuration.

## Relationships

### Inherits From

- [VZStorageDevice](vzstoragedevice.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [VZUSBDevice](vzusbdevice.md)

## See Also

### Related Documentation

- [VZUSBController](vzusbcontroller.md): A class that represents a USB controller in a VM.

### Storage Devices

- [VZUSBPassthroughDevice](vzusbpassthroughdevice.md)

# VZUSBMassStorageDevice (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 15.0+

A class that represents a hot-pluggable USB mass storage device.

## Declaration

```objectivec
@interface VZUSBMassStorageDevice : VZStorageDevice
```

<a id="overview"></a>

## Overview

Create this device either by instantiating it directly and passing [VZUSBMassStorageDeviceConfiguration](vzusbmassstoragedeviceconfiguration.md) to its initializer, or instantiating a `VZUSBMassStorageDeviceConfiguration` in a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md). Direct instantiation creates an object that you can pass to [attachDevice:completionHandler:](vzusbcontroller/attach%28device_completionhandler_%29.md). Instantiation through `VZUSBMassStorageDeviceConfiguration` makes the device available in the [usbDevices](vzusbcontroller/usbdevices.md) property.

## Topics

### Creating a USB mass storage device

- [initWithConfiguration:](vzusbmassstoragedevice/init%28configuration_%29.md): Creates a USB mass storage device with the provided configuration.

## Relationships

### Inherits From

- [VZStorageDevice](vzstoragedevice.md)

### Conforms To

- [VZUSBDevice](vzusbdevice.md)

## See Also

### Related Documentation

- [VZUSBController](vzusbcontroller.md): A class that represents a USB controller in a VM.

### Storage Devices

- [VZUSBPassthroughDevice](vzusbpassthroughdevice.md)
