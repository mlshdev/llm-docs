> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzgenericplatformconfiguration/isnestedvirtualizationenabled](https://developer.apple.com/documentation/virtualization/vzgenericplatformconfiguration/isnestedvirtualizationenabled)

# isNestedVirtualizationEnabled (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether nested virtualization is in an enabled state.

## Declaration

```swift
var isNestedVirtualizationEnabled: Bool { get set }
```

## See Also

### Identifying the platform configuration

- [machineIdentifier](machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [isNestedVirtualizationSupported](isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.

# nestedVirtualizationEnabled (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 15.0+

A Boolean value that indicates whether nested virtualization is in an enabled state.

## Declaration

```objectivec
@property (readwrite, getter=isNestedVirtualizationEnabled) BOOL nestedVirtualizationEnabled;
```

## See Also

### Identifying the platform configuration

- [machineIdentifier](machineidentifier.md): A value that represents a unique identifier for the virtual machine.
- [nestedVirtualizationSupported](isnestedvirtualizationsupported.md): A Boolean value that describes whether the platform configuration supports nested virtualization.
- [VZGenericMachineIdentifier](../vzgenericmachineidentifier.md): An object that represents a unique identifier for a virtual machine.
