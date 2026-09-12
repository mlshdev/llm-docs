> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericplatformconfiguration/machineidentifier](https://developer.apple.com/documentation/virtualization/vzgenericplatformconfiguration/machineidentifier)

# machineIdentifier (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A value that represents a unique identifier for the virtual machine.

## Declaration

```swift
@NSCopying var machineIdentifier: VZGenericMachineIdentifier { get set }
```

## See Also

### Identifying the platform configuration

- [isNestedVirtualizationEnabled](isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [isNestedVirtualizationSupported](isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.

# machineIdentifier (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 13.0+

A value that represents a unique identifier for the virtual machine.

## Declaration

```objectivec
@property (copy) VZGenericMachineIdentifier * machineIdentifier;
```

## See Also

### Identifying the platform configuration

- [nestedVirtualizationEnabled](isnestedvirtualizationenabled.md): A Boolean value that indicates whether nested virtualization is in an enabled state.
- [nestedVirtualizationSupported](isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.
