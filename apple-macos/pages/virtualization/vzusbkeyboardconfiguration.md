> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzusbkeyboardconfiguration](https://developer.apple.com/documentation/virtualization/vzusbkeyboardconfiguration)

# VZUSBKeyboardConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A device that defines the configuration for a USB keyboard.

## Declaration

```swift
class VZUSBKeyboardConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtualMachineView](vzvirtualmachineview.md) can use this device to send key events to the VM.

## Topics

### Creating a USB keyboard

- [init()](vzusbkeyboardconfiguration/init%28%29.md): Creates a USB keyboard configuration.

## Relationships

### Inherits From

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md)

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

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md): The base class for a configuring a keyboard.
- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md): A device that defines the configuration for a Mac keyboard.

# VZUSBKeyboardConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A device that defines the configuration for a USB keyboard.

## Declaration

```objectivec
@interface VZUSBKeyboardConfiguration : VZKeyboardConfiguration
```

<a id="overview"></a>

## Overview

A [VZVirtualMachineView](vzvirtualmachineview.md) can use this device to send key events to the VM.

## Topics

### Creating a USB keyboard

- [init](vzusbkeyboardconfiguration/init%28%29.md): Creates a USB keyboard configuration.

## Relationships

### Inherits From

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md)

## See Also

### Keyboards

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md): The base class for a configuring a keyboard.
- [VZMacKeyboardConfiguration](vzmackeyboardconfiguration.md): A device that defines the configuration for a Mac keyboard.
