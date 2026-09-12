> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmackeyboardconfiguration](https://developer.apple.com/documentation/virtualization/vzmackeyboardconfiguration)

# VZMacKeyboardConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A device that defines the configuration for a Mac keyboard.

## Declaration

```swift
class VZMacKeyboardConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration to attach a Mac keyboard configuration to a VM. A [VZVirtualMachineView](vzvirtualmachineview.md) can use this device to send key events to the VM, including the Mac-specific key events, such as the Globe key.

## Topics

### Creating a new Mac keyboard configuration

- [init()](vzmackeyboardconfiguration/init%28%29.md): Creates a new Mac keyboard configuration.

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
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md): A device that defines the configuration for a USB keyboard.

# VZMacKeyboardConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 14.0+

A device that defines the configuration for a Mac keyboard.

## Declaration

```objectivec
@interface VZMacKeyboardConfiguration : VZKeyboardConfiguration
```

<a id="overview"></a>

## Overview

Use this configuration to attach a Mac keyboard configuration to a VM. A [VZVirtualMachineView](vzvirtualmachineview.md) can use this device to send key events to the VM, including the Mac-specific key events, such as the Globe key.

## Topics

### Creating a new Mac keyboard configuration

- [init](vzmackeyboardconfiguration/init%28%29.md): Creates a new Mac keyboard configuration.

## Relationships

### Inherits From

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md)

## See Also

### Keyboards

- [VZKeyboardConfiguration](vzkeyboardconfiguration.md): The base class for a configuring a keyboard.
- [VZUSBKeyboardConfiguration](vzusbkeyboardconfiguration.md): A device that defines the configuration for a USB keyboard.
