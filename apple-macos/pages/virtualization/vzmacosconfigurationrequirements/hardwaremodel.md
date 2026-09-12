> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacosconfigurationrequirements/hardwaremodel](https://developer.apple.com/documentation/virtualization/vzmacosconfigurationrequirements/hardwaremodel)

# hardwareModel (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The hardware model for this configuration.

## Declaration

```swift
@NSCopying var hardwareModel: VZMacHardwareModel { get }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Use a hardware model to configure a new VM that meets a set of specific requirements.

After creating the hardware model, use `VZMacPlatformConfiguration` [hardwareModel](../vzmacplatformconfiguration/hardwaremodel.md) to configure the Mac platform, and [init(creatingStorageAt:hardwareModel:options:)](../vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create its auxiliary storage.

## See Also

### Related Documentation

- [VZMacPlatformConfiguration](../vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZMacAuxiliaryStorage](../vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

### Configuration Requirements

- [minimumSupportedCPUCount](minimumsupportedcpucount.md): The minimum supported number of CPUs for this configuration.
- [minimumSupportedMemorySize](minimumsupportedmemorysize.md): The minimum supported memory size for this configuration.

# hardwareModel (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The hardware model for this configuration.

## Declaration

```objectivec
@property (copy, readonly) VZMacHardwareModel * hardwareModel;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

Use a hardware model to configure a new VM that meets a set of specific requirements.

After creating the hardware model, use `VZMacPlatformConfiguration` [hardwareModel](../vzmacplatformconfiguration/hardwaremodel.md) to configure the Mac platform, and [initCreatingStorageAtURL:hardwareModel:options:error:](../vzmacauxiliarystorage/init%28creatingstorageat_hardwaremodel_options_%29.md) to create its auxiliary storage.

## See Also

### Related Documentation

- [VZMacPlatformConfiguration](../vzmacplatformconfiguration.md): The platform configuration for booting macOS on Apple silicon.
- [VZMacAuxiliaryStorage](../vzmacauxiliarystorage.md): An object that contains information the boot loader needs for booting macOS as a guest operating system.

### Configuration Requirements

- [minimumSupportedCPUCount](minimumsupportedcpucount.md): The minimum supported number of CPUs for this configuration.
- [minimumSupportedMemorySize](minimumsupportedmemorysize.md): The minimum supported memory size for this configuration.
