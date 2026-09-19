> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtualmachine/delegate

# delegate (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A custom object you use to determine when the VM stops.

## Declaration

```swift
weak var delegate: (any VZVirtualMachineDelegate)? { get set }
```

## See Also

### Responding to a stopped VM

- [VZVirtualMachineDelegate](../vzvirtualmachinedelegate.md): The methods you use to respond to changes in the state of the VM.

# delegate (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

A custom object you use to determine when the VM stops.

## Declaration

```objectivec
@property (weak, nullable) id<VZVirtualMachineDelegate> delegate;
```

## See Also

### Responding to a stopped VM

- [VZVirtualMachineDelegate](../vzvirtualmachinedelegate.md): The methods you use to respond to changes in the state of the VM.
