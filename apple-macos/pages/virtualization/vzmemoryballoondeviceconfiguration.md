> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmemoryballoondeviceconfiguration](https://developer.apple.com/documentation/virtualization/vzmemoryballoondeviceconfiguration)

# VZMemoryBalloonDeviceConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for memory balloon devices.

## Declaration

```swift
class VZMemoryBalloonDeviceConfiguration
```

<a id="overview"></a>

## Overview

Don’t instantiate this abstract class directly. Instead, instantiate one of its subclasses such as [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md)

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

- [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md): A configuration object that provides a way to reclaim memory from the guest system.

# VZMemoryBalloonDeviceConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The common configuration traits for memory balloon devices.

## Declaration

```objectivec
@interface VZMemoryBalloonDeviceConfiguration : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate this abstract class directly. Instead, instantiate one of its subclasses such as [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md).

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configuration

- [VZVirtioTraditionalMemoryBalloonDeviceConfiguration](vzvirtiotraditionalmemoryballoondeviceconfiguration.md): A configuration object that provides a way to reclaim memory from the guest system.
