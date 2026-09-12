> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacplatformconfiguration](https://developer.apple.com/documentation/virtualization/vzmacplatformconfiguration)

# VZMacPlatformConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The platform configuration for booting macOS on Apple silicon.

## Declaration

```swift
class VZMacPlatformConfiguration
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

When creating a VM, the [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) and [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md) depend on the restore image that you use to install macOS.

To choose the hardware model, start from `VZMacOSRestoreImage`.[mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration, then use its `VZMacOSConfigurationRequirements`.[hardwareModel](vzmacosconfigurationrequirements/hardwaremodel.md) property to get the hardware model.

Use the hardware model to set up `VZMacPlatformConfiguration` and to initialize a new auxiliary storage with [init(creatingStorageAt:hardwareModel:options:)](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md).

When you save a VM to disk and load it again, you must restore the [hardwareModel](vzmacosconfigurationrequirements/hardwaremodel.md), [machineIdentifier](vzmacplatformconfiguration/machineidentifier.md) and [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md) properties to their original values.

If you create multiple VMs from the same configuration, each should have a unique `auxiliaryStorage` and `machineIdentifier`.

## Topics

### Creating a platform configuration

- [init()](vzmacplatformconfiguration/init%28%29.md): Creates a new Mac platform configuration.

### Getting platform properties

- [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md): The Mac auxiliary storage.
- [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md): The Mac hardware model.
- [machineIdentifier](vzmacplatformconfiguration/machineidentifier.md): The Mac machine identifier.

## Relationships

### Inherits From

- [VZPlatformConfiguration](vzplatformconfiguration.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

# VZMacPlatformConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

The platform configuration for booting macOS on Apple silicon.

## Declaration

```objectivec
@interface VZMacPlatformConfiguration : VZPlatformConfiguration
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

When creating a VM, the [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) and [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md) depend on the restore image that you use to install macOS.

To choose the hardware model, start from `VZMacOSRestoreImage`.[mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration, then use its `VZMacOSConfigurationRequirements`.[hardwareModel](vzmacosconfigurationrequirements/hardwaremodel.md) property to get the hardware model.

Use the hardware model to set up `VZMacPlatformConfiguration` and to initialize a new auxiliary storage with [initCreatingStorageAtURL:hardwareModel:options:error:](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md).

When you save a VM to disk and load it again, you must restore the [hardwareModel](vzmacosconfigurationrequirements/hardwaremodel.md), [machineIdentifier](vzmacplatformconfiguration/machineidentifier.md) and [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md) properties to their original values.

If you create multiple VMs from the same configuration, each should have a unique `auxiliaryStorage` and `machineIdentifier`.

## Topics

### Creating a platform configuration

- [init](vzmacplatformconfiguration/init%28%29.md): Creates a new Mac platform configuration.

### Getting platform properties

- [auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md): The Mac auxiliary storage.
- [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md): The Mac hardware model.
- [machineIdentifier](vzmacplatformconfiguration/machineidentifier.md): The Mac machine identifier.

## Relationships

### Inherits From

- [VZPlatformConfiguration](vzplatformconfiguration.md)

## See Also

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.
