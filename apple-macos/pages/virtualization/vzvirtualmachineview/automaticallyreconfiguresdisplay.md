> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineview/automaticallyreconfiguresdisplay](https://developer.apple.com/documentation/virtualization/vzvirtualmachineview/automaticallyreconfiguresdisplay)

# automaticallyReconfiguresDisplay (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.

## Declaration

```swift
var automaticallyReconfiguresDisplay: Bool { get set }
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to automatically resize or reconfigure this graphics display when the view properties update. For example, resizing the display when the view has a live resize operation. When enabled, the graphics display automatically reconfigures to match the host display environment.

You can set this property on only a single [VZVirtualMachineView](../vzvirtualmachineview.md) targeting a particular [VZGraphicsDisplay](../vzgraphicsdisplay.md) at a time. If multiple `VZVirtualMachineView` views targeting the same VZGraphicsDisplay enable this property, only one view respects the property, and the framework disables the property on the other views.

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the VM

- [capturesSystemKeys](capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.
- [virtualMachine](virtualmachine.md): The VM to display in the view.

# automaticallyReconfiguresDisplay (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 14.0+

A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.

## Declaration

```objectivec
@property BOOL automaticallyReconfiguresDisplay;
```

<a id="Discussion"></a>

## Discussion

Set this property to [true](https://developer.apple.com/documentation/swift/true) to automatically resize or reconfigure this graphics display when the view properties update. For example, resizing the display when the view has a live resize operation. When enabled, the graphics display automatically reconfigures to match the host display environment.

You can set this property on only a single [VZVirtualMachineView](../vzvirtualmachineview.md) targeting a particular [VZGraphicsDisplay](../vzgraphicsdisplay.md) at a time. If multiple `VZVirtualMachineView` views targeting the same VZGraphicsDisplay enable this property, only one view respects the property, and the framework disables the property on the other views.

The default is [false](https://developer.apple.com/documentation/swift/false).

## See Also

### Configuring the VM

- [capturesSystemKeys](capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.
- [virtualMachine](virtualmachine.md): The VM to display in the view.
