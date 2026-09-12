> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacauxiliarystorage](https://developer.apple.com/documentation/virtualization/vzmacauxiliarystorage)

# VZMacAuxiliaryStorage (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information the boot loader needs for booting macOS as a guest operating system.

## Declaration

```swift
class VZMacAuxiliaryStorage
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

The Mac auxiliary storage contains data used by the boot loader and the guest operating system. It’s necessary to boot a macOS guest OS.

When creating a new VM, use [init(creatingStorageAt:hardwareModel:options:)](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create a default initialized auxiliary storage.

The hardware model you use when creating the new auxiliary storage depends on the restore image that you’ll use for installation. From the restore image, use [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration. A configuration has a [VZMacHardwareModel](vzmachardwaremodel.md) associated with it.

After initializing the new auxiliary storage, set it on `VZMacPlatformConfiguration`.[auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md).

The hardware model in `VZMacPlatformConfiguration`.[hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) must be identical to the one used to create the empty auxiliary storage., otherwise the behavior isn’t defined.

When installing macOS, the [VZMacOSInstaller](vzmacosinstaller.md) lays out data on the auxiliary storage. After installation, the macOS guest uses the auxiliary storage for every subsequent boot.

When moving or performing a backup of a VM, you must move or copy the file containing the auxiliary storage along with the main disk image.

To boot a VM created with `VZMacOSInstaller`, use [init(contentsOfURL:)](vzmacauxiliarystorage/init%28contentsofurl_%29.md) to set up the auxiliary storage from the existing file used during installation.

When using an existing file, the hardware model of the `VZMacPlatformConfiguration`.[hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) must match the hardware model used when creating the original file.

## Topics

### Creating the auxiliary storage

- [init(contentsOfURL:)](vzmacauxiliarystorage/init%28contentsofurl_%29.md): Deprecated. Initializes an auxiliary storage object with data from the location at the URL you provide.
- [init(url:)](vzmacauxiliarystorage/init%28url_%29-68cz.md): Initializes an auxiliary storage object with data from the location at the URL you provide.
- [init(creatingStorageAt:hardwareModel:options:)](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md): Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.
- [VZMacAuxiliaryStorage.InitializationOptions](vzmacauxiliarystorage/initializationoptions.md): Options you can set when creating new auxiliary storage.

### Configuring the auxiliary storage location

- [url](vzmacauxiliarystorage/url.md): The URL of the auxiliary storage on the local file system.

### Initializers

- [init(URL:)](vzmacauxiliarystorage/init%28url_%29-42aee.md)
- [init(contentsOf:)](vzmacauxiliarystorage/init%28contentsof_%29.md): Deprecated.
- [init(creatingStorageAtURL:hardwareModel:options:)](vzmacauxiliarystorage/init%28creatingstorageaturl_hardwaremodel_options_%29.md)

### Default Implementations

- [VZMacAuxiliaryStorage Implementations](vzmacauxiliarystorage/vzmacauxiliarystorage-implementations.md)

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.
- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.

# VZMacAuxiliaryStorage (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

An object that contains information the boot loader needs for booting macOS as a guest operating system.

## Declaration

```objectivec
@interface VZMacAuxiliaryStorage : NSObject
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)

<a id="overview"></a>

## Overview

The Mac auxiliary storage contains data used by the boot loader and the guest operating system. It’s necessary to boot a macOS guest OS.

When creating a new VM, use [initCreatingStorageAtURL:hardwareModel:options:error:](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create a default initialized auxiliary storage.

The hardware model you use when creating the new auxiliary storage depends on the restore image that you’ll use for installation. From the restore image, use [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration. A configuration has a [VZMacHardwareModel](vzmachardwaremodel.md) associated with it.

After initializing the new auxiliary storage, set it on `VZMacPlatformConfiguration`.[auxiliaryStorage](vzmacplatformconfiguration/auxiliarystorage.md).

The hardware model in `VZMacPlatformConfiguration`.[hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) must be identical to the one used to create the empty auxiliary storage., otherwise the behavior isn’t defined.

When installing macOS, the [VZMacOSInstaller](vzmacosinstaller.md) lays out data on the auxiliary storage. After installation, the macOS guest uses the auxiliary storage for every subsequent boot.

When moving or performing a backup of a VM, you must move or copy the file containing the auxiliary storage along with the main disk image.

To boot a VM created with `VZMacOSInstaller`, use [init(contentsOfURL:)](vzmacauxiliarystorage/init%28contentsofurl_%29.md) to set up the auxiliary storage from the existing file used during installation.

When using an existing file, the hardware model of the `VZMacPlatformConfiguration`.[hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) must match the hardware model used when creating the original file.

## Topics

### Creating the auxiliary storage

- [initWithURL:](vzmacauxiliarystorage/init%28url_%29-68cz.md): Initializes an auxiliary storage object with data from the location at the URL you provide.
- [initCreatingStorageAtURL:hardwareModel:options:error:](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md): Creates an initialized Mac auxiliary storage instance that describes a specific hardware model at a URL you specify.
- [VZMacAuxiliaryStorageInitializationOptions](vzmacauxiliarystorage/initializationoptions.md): Options you can set when creating new auxiliary storage.

### Configuring the auxiliary storage location

- [URL](vzmacauxiliarystorage/url.md): The URL of the auxiliary storage on the local file system.

### Instance Methods

- [initWithContentsOfURL:](vzmacauxiliarystorage/init%28contentsof_%29.md): Deprecated.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.
- [VZMacOSConfigurationRequirements](vzmacosconfigurationrequirements.md): An object that describes the parameter constraints required by a specific configuration of macOS.
- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
