> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevicedelegateprovider](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevicedelegateprovider)

# VZCustomVirtioDeviceDelegateProvider (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

## Declaration

```swift
class VZCustomVirtioDeviceDelegateProvider
```

<a id="overview"></a>

## Overview

The delegate runs in the same process as the guest’s `VZVirtualMachine` instance.

## Topics

### Initializers

- [init(deviceQueue:delegate:)](vzcustomvirtiodevicedelegateprovider/init%28devicequeue_delegate_%29.md): Creates a custom Virtio device delegate provider.

### Instance Properties

- [delegate](vzcustomvirtiodevicedelegateprovider/delegate.md): The delegate object that implements the device.
- [deviceQueue](vzcustomvirtiodevicedelegateprovider/devicequeue.md): The queue the framework uses to synchronize operations for this device.

## Relationships

### Inherits From

- [VZCustomVirtioDeviceProvider](vzcustomvirtiodeviceprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Responding to Virtio driver events

- [VZCustomVirtioDeviceProvider](vzcustomvirtiodeviceprovider.md): A base class that describes the provider of a custom Virtio device.

# VZCustomVirtioDeviceDelegateProvider (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

## Declaration

```objectivec
@interface VZCustomVirtioDeviceDelegateProvider : VZCustomVirtioDeviceProvider
```

<a id="overview"></a>

## Overview

The delegate runs in the same process as the guest’s `VZVirtualMachine` instance.

## Topics

### Instance Properties

- [delegate](vzcustomvirtiodevicedelegateprovider/delegate.md): The delegate object that implements the device.
- [deviceQueue](vzcustomvirtiodevicedelegateprovider/devicequeue.md): The queue the framework uses to synchronize operations for this device.

### Instance Methods

- [initWithDeviceQueue:delegate:](vzcustomvirtiodevicedelegateprovider/init%28devicequeue_delegate_%29.md): Creates a custom Virtio device delegate provider.

## Relationships

### Inherits From

- [VZCustomVirtioDeviceProvider](vzcustomvirtiodeviceprovider.md)

## See Also

### Responding to Virtio driver events

- [VZCustomVirtioDeviceProvider](vzcustomvirtiodeviceprovider.md): A base class that describes the provider of a custom Virtio device.
