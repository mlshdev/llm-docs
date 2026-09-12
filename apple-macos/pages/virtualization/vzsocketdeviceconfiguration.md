> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzsocketdeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzsocketdeviceconfiguration)

# VZSocketDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for socket device requests.

## Declaration

```swift
class VZSocketDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t create a [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md) object directly. Instead, create a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object and add it to your virtual machine’s configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md)

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

- [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md): A configuration object that requests the creation of a socket device to communicate with the guest system.

# VZSocketDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for socket device requests.

## Declaration

```objectivec
@interface VZSocketDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a [VZSocketDeviceConfiguration](vzsocketdeviceconfiguration.md) object directly. Instead, create a [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md) object and add it to your virtual machine’s configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioSocketDeviceConfiguration](vzvirtiosocketdeviceconfiguration.md): A configuration object that requests the creation of a socket device to communicate with the guest system.
