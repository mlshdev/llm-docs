> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzmacplatformconfiguration/hardwaremodel](https://developer.apple.com/documentation/virtualization/vzmacplatformconfiguration/hardwaremodel)

# hardwareModel (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac hardware model.

## Declaration

```swift
@NSCopying var hardwareModel: VZMacHardwareModel { get set }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

When creating a VM, the [hardwareModel](hardwaremodel.md) depends on the restore image that you use to install macOS.

To choose the hardware model, start from `VZMacOSRestoreImage`.[mostFeaturefulSupportedConfiguration](../vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration, then use its `VZMacOSConfigurationRequirements`.[hardwareModel](../vzmacosconfigurationrequirements/hardwaremodel.md) property to get the hardware model.

## See Also

### Getting platform properties

- [auxiliaryStorage](auxiliarystorage.md): The Mac auxiliary storage.
- [machineIdentifier](machineidentifier.md): The Mac machine identifier.

# hardwareModel (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac hardware model.

## Declaration

```objectivec
@property (copy) VZMacHardwareModel * hardwareModel;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

When creating a VM, the [hardwareModel](hardwaremodel.md) depends on the restore image that you use to install macOS.

To choose the hardware model, start from `VZMacOSRestoreImage`.[mostFeaturefulSupportedConfiguration](../vzmacosrestoreimage/mostfeaturefulsupportedconfiguration.md) to get a supported configuration, then use its `VZMacOSConfigurationRequirements`.[hardwareModel](../vzmacosconfigurationrequirements/hardwaremodel.md) property to get the hardware model.

## See Also

### Getting platform properties

- [auxiliaryStorage](auxiliarystorage.md): The Mac auxiliary storage.
- [machineIdentifier](machineidentifier.md): The Mac machine identifier.
