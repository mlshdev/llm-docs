> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceprovider](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceprovider)

# VZCustomVirtioDeviceProvider (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A base class that describes the provider of a custom Virtio device.

## Declaration

```swift
class VZCustomVirtioDeviceProvider
```

<a id="overview"></a>

## Overview

A Custom Virtio device provider describes how the custom Virtio device is implemented. Don’t instantiate `VZCustomVirtioDeviceProvider` directly. use one of its subclasses such as [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

### Responding to Virtio driver events

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

# VZCustomVirtioDeviceProvider (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A base class that describes the provider of a custom Virtio device.

## Declaration

```objectivec
@interface VZCustomVirtioDeviceProvider : NSObject
```

<a id="overview"></a>

## Overview

A Custom Virtio device provider describes how the custom Virtio device is implemented. Don’t instantiate `VZCustomVirtioDeviceProvider` directly. use one of its subclasses such as [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.

### Responding to Virtio driver events

- [VZCustomVirtioDeviceDelegateProvider](vzcustomvirtiodevicedelegateprovider.md): A custom Virtio Device provider for devices that implement a custom Virtio device configuration delegate.
