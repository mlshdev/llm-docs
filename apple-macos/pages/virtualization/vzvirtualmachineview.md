> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineview](https://developer.apple.com/documentation/virtualization/vzvirtualmachineview)

# VZVirtualMachineView (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A view that allows user interaction with a VM.

## Declaration

```swift
class VZVirtualMachineView
```

<a id="overview"></a>

## Overview

The `VZVirtualMachineView` is a UI element that shows the contents of the VM frame buffer that you can optionally configure to respond to changes in the host’s display settings. If the VM configuration includes a keyboard and a pointing device, the view forwards keyboard and mouse events to the VM through those devices.

For a [Sendable](https://developer.apple.com/documentation/swift/sendable) wrapper that connects a virtual machine view to a virtual machine, see [VZVirtualMachineViewAdaptor](vzvirtualmachineviewadaptor.md).

## Topics

### Configuring a view adaptor

- [adaptor](vzvirtualmachineview/adaptor.md): The virtual machine view adaptor.

### Configuring the VM

- [automaticallyReconfiguresDisplay](vzvirtualmachineview/automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [capturesSystemKeys](vzvirtualmachineview/capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.
- [virtualMachine](vzvirtualmachineview/virtualmachine.md): The VM to display in the view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSAccessibilityElementProtocol](../appkit/nsaccessibilityelementprotocol.md)
- [NSAccessibilityProtocol](../appkit/nsaccessibilityprotocol.md)
- [NSAnimatablePropertyContainer](../appkit/nsanimatablepropertycontainer.md)
- [NSAppearanceCustomization](../appkit/nsappearancecustomization.md)
- [NSCoding](https://developer.apple.com/documentation/foundation/nscoding)
- [NSDraggingDestination](../appkit/nsdraggingdestination.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSStandardKeyBindingResponding](../appkit/nsstandardkeybindingresponding.md)
- [NSTouchBarProvider](../appkit/nstouchbarprovider.md)
- [NSUserActivityRestoring](../appkit/nsuseractivityrestoring.md)
- [NSUserInterfaceItemIdentification](../appkit/nsuserinterfaceitemidentification.md)

## See Also

### Runtime

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.

# VZVirtualMachineView (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 12.0+

A view that allows user interaction with a VM.

## Declaration

```objectivec
@interface VZVirtualMachineView : NSView
```

<a id="overview"></a>

## Overview

The `VZVirtualMachineView` is a UI element that shows the contents of the VM frame buffer that you can optionally configure to respond to changes in the host’s display settings. If the VM configuration includes a keyboard and a pointing device, the view forwards keyboard and mouse events to the VM through those devices.

For a [Sendable](https://developer.apple.com/documentation/swift/sendable) wrapper that connects a virtual machine view to a virtual machine, see [VZVirtualMachineViewAdaptor](vzvirtualmachineviewadaptor.md).

## Topics

### Configuring the VM

- [automaticallyReconfiguresDisplay](vzvirtualmachineview/automaticallyreconfiguresdisplay.md): A Boolean value that indicates whether the graphics display associated with this view automatically reconfigures with respect to view changes.
- [capturesSystemKeys](vzvirtualmachineview/capturessystemkeys.md): A Boolean value that determines whether the system should send certain system keyboard shortcuts to the guest instead of the host.
- [virtualMachine](vzvirtualmachineview/virtualmachine.md): The VM to display in the view.

## Relationships

### Inherits From

- [NSView](../appkit/nsview.md)

## See Also

### Runtime

- [VZVirtualMachine](vzvirtualmachine.md): An object that manages the overall state and configuration of your VM.
- [VZLinuxRosettaDirectoryShare](vzlinuxrosettadirectoryshare.md): The Linux directory share for Rosetta.
