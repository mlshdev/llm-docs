> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzkeyboardconfiguration](https://developer.apple.com/documentation/virtualization/vzkeyboardconfiguration)

# VZKeyboardConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a configuring a keyboard.

## Declaration

```swift
class VZKeyboardConfiguration
```

<a id="overview"></a>

## Overview

`VZKeyboardConfiguration` defines the abstract interface that defines a virtual keyboard that you connect to a guest operating system. Don’t instantiate `VZKeyboardConfiguration` directly, use one of its subclasses such as [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md)
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Keyboards

- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md): A device that defines the configuration for a Mac keyboard.
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md): A device that defines the configuration for a USB keyboard.

# VZKeyboardConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The base class for a configuring a keyboard.

## Declaration

```objectivec
@interface VZKeyboardConfiguration : NSObject
```

<a id="overview"></a>

## Overview

`VZKeyboardConfiguration` defines the abstract interface that defines a virtual keyboard that you connect to a guest operating system. Don’t instantiate `VZKeyboardConfiguration` directly, use one of its subclasses such as [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md) instead.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Inherited By

- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md)
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Keyboards

- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md): A device that defines the configuration for a Mac keyboard.
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md): A device that defines the configuration for a USB keyboard.
