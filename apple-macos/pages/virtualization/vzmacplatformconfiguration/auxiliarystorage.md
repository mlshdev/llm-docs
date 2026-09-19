> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmacplatformconfiguration/auxiliarystorage

# auxiliaryStorage (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac auxiliary storage.

## Declaration

```swift
var auxiliaryStorage: VZMacAuxiliaryStorage? { get set }
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

When creating a VM, the hardware model of the `auxiliaryStorage` must match the hardware model of the `hardwareModel` property. Defaults to `nil`, but you must set a value for a configuration to be valid.

## See Also

### Getting platform properties

- [hardwareModel](hardwaremodel.md): The Mac hardware model.
- [machineIdentifier](machineidentifier.md): The Mac machine identifier.

# auxiliaryStorage (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac auxiliary storage.

## Declaration

```objectivec
@property (strong, nullable) VZMacAuxiliaryStorage * auxiliaryStorage;
```

## Mentioned In

- [Installing macOS on a Virtual Machine](../installing-macos-on-a-virtual-machine.md)

<a id="Discussion"></a>

## Discussion

When creating a VM, the hardware model of the `auxiliaryStorage` must match the hardware model of the `hardwareModel` property. Defaults to `nil`, but you must set a value for a configuration to be valid.

## See Also

### Getting platform properties

- [hardwareModel](hardwaremodel.md): The Mac hardware model.
- [machineIdentifier](machineidentifier.md): The Mac machine identifier.
