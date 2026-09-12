> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosvirtualmachinestartoptions](https://developer.apple.com/documentation/virtualization/vzmacosvirtualmachinestartoptions)

# VZMacOSVirtualMachineStartOptions (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that describes start options for macOS VMs.

## Declaration

```swift
class VZMacOSVirtualMachineStartOptions
```

## Topics

### Setting recovery mode

- [startUpFromMacOSRecovery](vzmacosvirtualmachinestartoptions/startupfrommacosrecovery.md): A Boolean value that indicates whether the macOS guest should start in recovery mode.

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

### Instance Properties

- [guestProvisioningOptions](vzmacosvirtualmachinestartoptions/guestprovisioningoptions.md): A value that controls provisioning a macOS guest.

### Instance Methods

- [setGuestProvisioning(\_:)](vzmacosvirtualmachinestartoptions/setguestprovisioning%28__%29.md): Sets guest provisioning options with validation.

## Relationships

### Inherits From

- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

# VZMacOSVirtualMachineStartOptions (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 13.0+

A class that describes start options for macOS VMs.

## Declaration

```objectivec
@interface VZMacOSVirtualMachineStartOptions : VZVirtualMachineStartOptions
```

## Topics

### Setting recovery mode

- [startUpFromMacOSRecovery](vzmacosvirtualmachinestartoptions/startupfrommacosrecovery.md): A Boolean value that indicates whether the macOS guest should start in recovery mode.

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
- [VZGuestMemoryMapping](vzguestmemorymapping.md): An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

### Instance Properties

- [guestProvisioningOptions](vzmacosvirtualmachinestartoptions/guestprovisioningoptions.md): A value that controls provisioning a macOS guest.

### Instance Methods

- [setGuestProvisioningOptions:error:](vzmacosvirtualmachinestartoptions/setguestprovisioning%28__%29.md): Sets guest provisioning options with validation.

## Relationships

### Inherits From

- [VZVirtualMachineStartOptions](vzvirtualmachinestartoptions.md)

## See Also

### Platform components

- [VZVirtualMachineConfiguration](vzvirtualmachineconfiguration.md): The environment attributes and list of devices to use during the configuration of macOS or Linux VMs.
- [VZMacPlatformConfiguration](vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZPlatformConfiguration](vzplatformconfiguration.md): The base class for a platform configuration.
- [VZMacHardwareModel](vzmachardwaremodel.md): A specification for the hardware elements and configurations present in a particular Mac hardware model.
- [VZMacMachineIdentifier](vzmacmachineidentifier.md): A unique identifier for a VM.
- [VZMacAuxiliaryStorage](vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.
