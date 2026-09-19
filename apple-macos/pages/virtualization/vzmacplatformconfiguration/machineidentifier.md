> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzmacplatformconfiguration/machineidentifier

# machineIdentifier (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac machine identifier.

## Declaration

```swift
@NSCopying var machineIdentifier: VZMacMachineIdentifier { get set }
```

<a id="Discussion"></a>

## Discussion

This value uniquely identifies an instance of a VM. Running two VMs concurrently with the same identifier results in undefined behavior in the guest operating system.

## See Also

### Getting platform properties

- [auxiliaryStorage](auxiliarystorage.md): The Mac auxiliary storage.
- [hardwareModel](hardwaremodel.md): The Mac hardware model.

# machineIdentifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The Mac machine identifier.

## Declaration

```objectivec
@property (copy) VZMacMachineIdentifier * machineIdentifier;
```

<a id="Discussion"></a>

## Discussion

This value uniquely identifies an instance of a VM. Running two VMs concurrently with the same identifier results in undefined behavior in the guest operating system.

## See Also

### Getting platform properties

- [auxiliaryStorage](auxiliarystorage.md): The Mac auxiliary storage.
- [hardwareModel](hardwaremodel.md): The Mac hardware model.
