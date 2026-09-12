> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzentropydeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzentropydeviceconfiguration)

# VZEntropyDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for entropy devices.

## Declaration

```swift
class VZEntropyDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t create a VZEntropyDeviceConfiguration object directly. Instead, instantiate a subclass such as [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) to configure a source of entropy for your virtual machine.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md)

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

- [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md): A source of entropy for the guest’s random number generator.

# VZEntropyDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for entropy devices.

## Declaration

```objectivec
@interface VZEntropyDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t create a VZEntropyDeviceConfiguration object directly. Instead, instantiate a subclass such as [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md) to configure a source of entropy for your virtual machine.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtioEntropyDeviceConfiguration](vzvirtioentropydeviceconfiguration.md): A source of entropy for the guest’s random number generator.
