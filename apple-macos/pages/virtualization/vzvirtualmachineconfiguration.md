> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration)

# VZVirtualMachineConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.

## Declaration

```swift
class VZVirtualMachineConfiguration
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)
- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object to configure the environment for a macOS or Linux VM. This configuration object contains information about the VM environment, including the devices that the VM exposes to the guest operating system. For example, use the configuration object to specify the network interfaces and storage devices that the operating system may access. For more information on the devices that macOS and Linux guests can support, see the Devices section on the [Virtualization](../virtualization.md) framework page.

You create and configure [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) objects directly. After validating the configuration object, use it to initialize the [VZVirtualMachine](vzvirtualmachine.md) object that manages the virtual environment. The smallest valid configuration includes a value for the [bootLoader](vzvirtualmachineconfiguration/bootloader.md) property; you can also include more devices in the configuration depending on the needs of your app, such as graphics devices, shared directories, and so on. When you finish configuring the object, call the [validate()](vzvirtualmachineconfiguration/validate%28%29.md) method to determine whether a VM can successfully support your configuration. A configuration object is invalid if your app doesn’t have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

For more information on using `VZVirtualMachineConfiguration`, see [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md) and [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md).

## Topics

### Configuring the guest system

- [bootLoader](vzvirtualmachineconfiguration/bootloader.md): The guest system to boot when the VM starts.

### Setting the number of CPUs

- [cpuCount](vzvirtualmachineconfiguration/cpucount.md): The number of CPUs you make available to the guest operating system.
- [minimumAllowedCPUCount](vzvirtualmachineconfiguration/minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.
- [maximumAllowedCPUCount](vzvirtualmachineconfiguration/maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.

### Sizing the memory partition

- [memorySize](vzvirtualmachineconfiguration/memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](vzvirtualmachineconfiguration/minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](vzvirtualmachineconfiguration/maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.

### Adding devices to the VM

- [audioDevices](vzvirtualmachineconfiguration/audiodevices.md): The list of audio devices.
- [consoleDevices](vzvirtualmachineconfiguration/consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](vzvirtualmachineconfiguration/customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](vzvirtualmachineconfiguration/directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](vzvirtualmachineconfiguration/entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](vzvirtualmachineconfiguration/graphicsdevices.md): The list of graphics devices.
- [keyboards](vzvirtualmachineconfiguration/keyboards.md): The list of keyboards.
- [networkDevices](vzvirtualmachineconfiguration/networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](vzvirtualmachineconfiguration/platform.md): The hardware platform to use.
- [pointingDevices](vzvirtualmachineconfiguration/pointingdevices.md): The list of pointing devices.
- [serialPorts](vzvirtualmachineconfiguration/serialports.md): The array of serial ports that you expose to the guest operating system.
- [socketDevices](vzvirtualmachineconfiguration/socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](vzvirtualmachineconfiguration/storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](vzvirtualmachineconfiguration/usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](vzvirtualmachineconfiguration/customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.

### Naming the VM

- [label](vzvirtualmachineconfiguration/label.md): An optional label for the virtual machine.

### Validating the configuration

- [validate()](vzvirtualmachineconfiguration/validate%28%29.md): Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.
- [validateSaveRestoreSupport()](vzvirtualmachineconfiguration/validatesaverestoresupport%28%29.md): Determines whether the framework can save or restore the VM’s current configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

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

- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.

# VZVirtualMachineConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 11.0+

The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.

## Declaration

```objectivec
@interface VZVirtualMachineConfiguration : NSObject
```

## Mentioned In

- [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md)
- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

Use a [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) object to configure the environment for a macOS or Linux VM. This configuration object contains information about the VM environment, including the devices that the VM exposes to the guest operating system. For example, use the configuration object to specify the network interfaces and storage devices that the operating system may access. For more information on the devices that macOS and Linux guests can support, see the Devices section on the [Virtualization](../virtualization.md) framework page.

You create and configure [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md) objects directly. After validating the configuration object, use it to initialize the [VZVirtualMachine](vzvirtualmachine.md) object that manages the virtual environment. The smallest valid configuration includes a value for the [bootLoader](vzvirtualmachineconfiguration/bootloader.md) property; you can also include more devices in the configuration depending on the needs of your app, such as graphics devices, shared directories, and so on. When you finish configuring the object, call the [validateWithError:](vzvirtualmachineconfiguration/validate%28%29.md) method to determine whether a VM can successfully support your configuration. A configuration object is invalid if your app doesn’t have the [com.apple.security.virtualization](https://developer.apple.com/documentation/bundleresources/entitlements/com.apple.security.virtualization) entitlement.

For more information on using `VZVirtualMachineConfiguration`, see [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md) and [Creating and Running a Linux Virtual Machine](creating-and-running-a-linux-virtual-machine.md).

## Topics

### Configuring the guest system

- [bootLoader](vzvirtualmachineconfiguration/bootloader.md): The guest system to boot when the VM starts.

### Setting the number of CPUs

- [CPUCount](vzvirtualmachineconfiguration/cpucount.md): The number of CPUs you make available to the guest operating system.
- [minimumAllowedCPUCount](vzvirtualmachineconfiguration/minimumallowedcpucount.md): The minimum number of CPUs you may configure for the VM.
- [maximumAllowedCPUCount](vzvirtualmachineconfiguration/maximumallowedcpucount.md): The maximum number of CPUs you may configure for the VM.

### Sizing the memory partition

- [memorySize](vzvirtualmachineconfiguration/memorysize.md): The amount of physical memory the guest operating system recognizes.
- [minimumAllowedMemorySize](vzvirtualmachineconfiguration/minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](vzvirtualmachineconfiguration/maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](vzvirtualmachineconfiguration/memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.

### Adding devices to the VM

- [audioDevices](vzvirtualmachineconfiguration/audiodevices.md): The list of audio devices.
- [consoleDevices](vzvirtualmachineconfiguration/consoledevices.md): The array of console devices that you expose to the guest operating system.
- [customVirtioDevices](vzvirtualmachineconfiguration/customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.
- [directorySharingDevices](vzvirtualmachineconfiguration/directorysharingdevices.md): The list of directory sharing devices.
- [entropyDevices](vzvirtualmachineconfiguration/entropydevices.md): The array of randomization devices that you expose to the guest operating system.
- [graphicsDevices](vzvirtualmachineconfiguration/graphicsdevices.md): The list of graphics devices.
- [keyboards](vzvirtualmachineconfiguration/keyboards.md): The list of keyboards.
- [networkDevices](vzvirtualmachineconfiguration/networkdevices.md): The array of network devices that you expose to the guest operating system.
- [platform](vzvirtualmachineconfiguration/platform.md): The hardware platform to use.
- [pointingDevices](vzvirtualmachineconfiguration/pointingdevices.md): The list of pointing devices.
- [serialPorts](vzvirtualmachineconfiguration/serialports.md): The array of serial ports that you expose to the guest operating system.
- [socketDevices](vzvirtualmachineconfiguration/socketdevices.md): The socket device that you use to implement port-based communication with the guest operating system.
- [storageDevices](vzvirtualmachineconfiguration/storagedevices.md): The array of storage devices that you expose to the guest operating system.
- [usbControllers](vzvirtualmachineconfiguration/usbcontrollers.md): The list of configured USB controllers for the VM.
- [customVirtioDevices](vzvirtualmachineconfiguration/customvirtiodevices.md): The array of custom virtio devices that you expose to the guest operating system.

### Naming the VM

- [label](vzvirtualmachineconfiguration/label.md): An optional label for the virtual machine.

### Validating the configuration

- [validateWithError:](vzvirtualmachineconfiguration/validate%28%29.md): Validates the current configuration settings and reports any issues that might prevent the successful initialization of the VM.
- [validateSaveRestoreSupportWithError:](vzvirtualmachineconfiguration/validatesaverestoresupport%28%29.md): Determines whether the framework can save or restore the VM’s current configuration.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Configurations

- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md): The abstract class for VM start options.
- [VZGenericPlatformConfiguration](vzgenericplatformconfiguration.md): The platform configuration for a generic Intel or ARM virtual machine.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
