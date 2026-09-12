> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineview/capturessystemkeys](https://developer.apple.com/documentation/virtualization/vzvirtualmachineview/capturessystemkeys)

# capturesSystemKeys (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.

## Declaration

```swift
var capturesSystemKeys: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Defaults to `false.`

## See Also

### Configuring the VM

- [automaticallyReconfiguresDisplay](automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [virtualMachine](virtualmachine.md): The VM to display in the view.

# capturesSystemKeys (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 12.0+

A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.

## Declaration

```objectivec
@property BOOL capturesSystemKeys;
```

<a id="Discussion"></a>

## Discussion

Defaults to `false.`

## See Also

### Configuring the VM

- [automaticallyReconfiguresDisplay](automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [virtualMachine](virtualmachine.md): The VM to display in the view.
