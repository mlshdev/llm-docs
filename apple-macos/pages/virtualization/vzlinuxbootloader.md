> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzlinuxbootloader](https://developer.apple.com/documentation/virtualization/vzlinuxbootloader)

# VZLinuxBootLoader (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that loads and configures a Linux kernel as the guest system of your VM.

## Declaration

```swift
class VZLinuxBootLoader
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Create and configure a [VZLinuxBootLoader](vzlinuxbootloader.md) object during the initial configuration of your VM. Use this object to specify the location of the Linux kernel that serves as the guest operating system. You can also specify additional information to use during the boot process, such as command-line parameters to pass to the kernel. Assign the [VZLinuxBootLoader](vzlinuxbootloader.md) object to the [bootLoader](vzvirtualmachineconfiguration/bootloader.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object.  A configuration with `VZLinuxBootLoader` is only valid if used with [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md).

## Topics

### Creating the Linux boot loader

- [init(kernelURL:)](vzlinuxbootloader/init%28kernelurl_%29.md): Creates a boot loader that launches the Linux kernel at the specified URL.

### Configuring the boot parameters

- [commandLine](vzlinuxbootloader/commandline.md): The command-line parameters to pass to the Linux kernel at boot time.
- [initialRamdiskURL](vzlinuxbootloader/initialramdiskurl.md): The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.

### Getting the kernel file

- [kernelURL](vzlinuxbootloader/kernelurl.md): The URL of the Linux kernel file.

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

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.

# VZLinuxBootLoader (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

An object that loads and configures a Linux kernel as the guest system of your VM.

## Declaration

```objectivec
@interface VZLinuxBootLoader : VZBootLoader
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)

<a id="overview"></a>

## Overview

Create and configure a [VZLinuxBootLoader](vzlinuxbootloader.md) object during the initial configuration of your VM. Use this object to specify the location of the Linux kernel that serves as the guest operating system. You can also specify additional information to use during the boot process, such as command-line parameters to pass to the kernel. Assign the [VZLinuxBootLoader](vzlinuxbootloader.md) object to the [bootLoader](vzvirtualmachineconfiguration/bootloader.md) property of your [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object.  A configuration with `VZLinuxBootLoader` is only valid if used with [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md).

## Topics

### Creating the Linux boot loader

- [initWithKernelURL:](vzlinuxbootloader/init%28kernelurl_%29.md): Creates a boot loader that launches the Linux kernel at the specified URL.

### Configuring the boot parameters

- [commandLine](vzlinuxbootloader/commandline.md): The command-line parameters to pass to the Linux kernel at boot time.
- [initialRamdiskURL](vzlinuxbootloader/initialramdiskurl.md): The location of an optional RAM disk, which the boot loader maps into memory before it boots the Linux kernel.

### Getting the kernel file

- [kernelURL](vzlinuxbootloader/kernelurl.md): The URL of the Linux kernel file.

## Relationships

### Inherits From

- [VZBootLoader](vzbootloader.md)

## See Also

### Related Documentation

- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.

### Boot loaders

- [VZBootLoader](vzbootloader.md): The base class that defines the management of the initial process of the guest system.
- [VZEFIBootLoader](vzefibootloader.md): The boot loader configuration the system uses to boot guest-operating systems that expect an Extensible Firmware Interface (EFI) ROM.
- [VZEFIVariableStore](vzefivariablestore.md): An object that represents the Extensible Firmware Interface (EFI) variable store that contains NVRAM variables the EFI exposes.
