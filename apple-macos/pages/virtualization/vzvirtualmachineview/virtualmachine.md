> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineview/virtualmachine](https://developer.apple.com/documentation/virtualization/vzvirtualmachineview/virtualmachine)

# virtualMachine (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The VM to display in the view.

## Declaration

```swift
var virtualMachine: VZVirtualMachine? { get set }
```

## See Also

### Configuring the VM

- [automaticallyReconfiguresDisplay](automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [capturesSystemKeys](capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.

# virtualMachine (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

The VM to display in the view.

## Declaration

```objectivec
@property (strong, nullable) VZVirtualMachine * virtualMachine;
```

## See Also

### Configuring the VM

- [automaticallyReconfiguresDisplay](automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [capturesSystemKeys](capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.
