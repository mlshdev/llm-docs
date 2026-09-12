> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmachardwaremodel](https://developer.apple.com/documentation/virtualization/vzmachardwaremodel)

# VZMacHardwareModel (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A specification for the hardware elements and configurations present in a particular Mac hardware model.

## Declaration

```swift
class VZMacHardwareModel
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)
- [Using iCloud with macOS virtual machines](using-icloud-with-macos-virtual-machines.md)

<a id="overview"></a>

## Overview

The Mac hardware model abstracts a set of virtualized hardware elements and configurations.

A version of macOS may only run on certain hardware models. Additionally, the host may also only provide certain hardware models based on the version of macOS and the underlying hardware.

The [isSupported](vzmachardwaremodel/issupported.md) property allows you to discover if the current host supports a particular hardware model.

Choosing the hardware model starts from a restore image with [VZMacOSRestoreImage](vzmacosrestoreimage.md). A restore image describes its supported configuration requirements through its [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) property.

A configuration requirements object has a corresponding hardware model that you can use to configure a VM that meets the requirements. After obtaining the hardware model, use the platform configuration’s [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) to configure the Mac platform object and use [init(creatingStorageAt:hardwareModel:options:)](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create its auxiliary storage.

After creating the VM, use [VZMacOSInstaller](vzmacosinstaller.md) to install macOS on it.

If you serialize the VM on disk, preserve the hardware model used for installation for subsequent boots. The [dataRepresentation](vzmachardwaremodel/datarepresentation.md) property provides a unique binary representation that you serialize to the file system. You can recreate the hardware model from the serialized binary representation with [init(dataRepresentation:)](vzmachardwaremodel/init%28datarepresentation_%29.md).

## Topics

### Creating the hardware model

- [init(dataRepresentation:)](vzmachardwaremodel/init%28datarepresentation_%29.md): Creates an instance of the hardware model described by the specified data representation.

### Configuring the hardware model

- [dataRepresentation](vzmachardwaremodel/datarepresentation.md): Returns the opaque data representation of the hardware model.
- [isSupported](vzmachardwaremodel/issupported.md): A Boolean value that indicates whether the host supports this hardware model.

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

### Related Documentation

- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.
- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

# VZMacHardwareModel (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A specification for the hardware elements and configurations present in a particular Mac hardware model.

## Declaration

```objectivec
@interface VZMacHardwareModel : NSObject
```

## Mentioned In

- [Installing macOS on a Virtual Machine](installing-macos-on-a-virtual-machine.md)
- [Using iCloud with macOS virtual machines](using-icloud-with-macos-virtual-machines.md)

<a id="overview"></a>

## Overview

The Mac hardware model abstracts a set of virtualized hardware elements and configurations.

A version of macOS may only run on certain hardware models. Additionally, the host may also only provide certain hardware models based on the version of macOS and the underlying hardware.

The [supported](vzmachardwaremodel/issupported.md) property allows you to discover if the current host supports a particular hardware model.

Choosing the hardware model starts from a restore image with [VZMacOSRestoreImage](vzmacosrestoreimage.md). A restore image describes its supported configuration requirements through its [mostFeaturefulSupportedConfiguration](vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) property.

A configuration requirements object has a corresponding hardware model that you can use to configure a VM that meets the requirements. After obtaining the hardware model, use the platform configuration’s [hardwareModel](vzmacplatformconfiguration/hardwaremodel.md) to configure the Mac platform object and use [initCreatingStorageAtURL:hardwareModel:options:error:](vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create its auxiliary storage.

After creating the VM, use [VZMacOSInstaller](vzmacosinstaller.md) to install macOS on it.

If you serialize the VM on disk, preserve the hardware model used for installation for subsequent boots. The [dataRepresentation](vzmachardwaremodel/datarepresentation.md) property provides a unique binary representation that you serialize to the file system. You can recreate the hardware model from the serialized binary representation with [initWithDataRepresentation:](vzmachardwaremodel/init%28datarepresentation_%29.md).

## Topics

### Creating the hardware model

- [initWithDataRepresentation:](vzmachardwaremodel/init%28datarepresentation_%29.md): Creates an instance of the hardware model described by the specified data representation.

### Configuring the hardware model

- [dataRepresentation](vzmachardwaremodel/datarepresentation.md): Returns the opaque data representation of the hardware model.
- [supported](vzmachardwaremodel/issupported.md): A Boolean value that indicates whether the host supports this hardware model.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZMacOSInstaller](vzmacosinstaller.md): An object you use to install macOS on the specified virtual machine.
- [VZMacOSRestoreImage](vzmacosrestoreimage.md): An object that describes a version of macOS to install on to a virtual machine.

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacOSVirtualMachineStartOptions](vzmacosvirtualmachinestartoptions.md): A class that describes start options for macOS VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.
