> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosbootloader](https://developer.apple.com/documentation/virtualization/vzmacosbootloader)

# VZMacOSBootLoader (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that loads and configures a boot loader for running macOS on Apple silicon as a guest system of your VM.

## Declaration

```swift
class VZMacOSBootLoader
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

You must use a [VZMacPlatformConfiguration](vzmacplatformconfiguration.md) in conjunction with the macOS boot loader. It’s invalid to use it with any other platform configuration.

## Topics

### Creating a macOS boot loader

- [init()](vzmacosbootloader/init%28%29.md): Creates a macOS boot loader.

## Relationships

### Inherits From

- [VZBootLoader](vzbootloader.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [platform](vzvirtualmachineconfiguration/platform.md): The hardware platform to use.

### Boot images

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.

# VZMacOSBootLoader (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that loads and configures a boot loader for running macOS on Apple silicon as a guest system of your VM.

## Declaration

```objectivec
@interface VZMacOSBootLoader : VZBootLoader
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

You must use a [VZMacPlatformConfiguration](vzmacplatformconfiguration.md) in conjunction with the macOS boot loader. It’s invalid to use it with any other platform configuration.

## Topics

### Creating a macOS boot loader

- [init](vzmacosbootloader/init%28%29.md): Creates a macOS boot loader.

## Relationships

### Inherits From

- [VZBootLoader](vzbootloader.md)

## See Also

### Related Documentation

- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [platform](vzvirtualmachineconfiguration/platform.md): The hardware platform to use.

### Boot images

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
