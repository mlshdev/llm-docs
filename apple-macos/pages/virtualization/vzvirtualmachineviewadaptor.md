> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineviewadaptor](https://developer.apple.com/documentation/virtualization/vzvirtualmachineviewadaptor)

# VZVirtualMachineViewAdaptor

**Framework:** Virtualization  
**Kind:** Structure  
**Availability:** macOS 27.0+

A sendable wrapper that connects a virtual machine view to a virtual machine.

## Declaration

```swift
struct VZVirtualMachineViewAdaptor
```

<a id="Discussion"></a>

## Discussion

`VZVirtualMachineViewAdaptor` enables Swift 6 strict concurrency when using [VZVirtualMachineView](vzvirtualmachineview.md). Since [VZVirtualMachine](vzvirtualmachine.md) operates on a specific dispatch queue and is not [Sendable](https://developer.apple.com/documentation/swift/sendable), assigning it directly to [virtualMachine](vzvirtualmachineview/virtualmachine.md) would be a compiler error when crossing isolation boundaries. The adaptor holds a strong reference to the virtual machine, allowing you to  safely copy it  across actor boundaries.

The following example demonstrates how to create and run a `VZVirtualMachineViewAdaptor` from the main actor.

```swift
    // Create an adaptor from a virtual machine.
    let adaptor = VZVirtualMachineViewAdaptor(virtualMachine: vm)

    // Pass the adaptor to a view on the main actor.
    await MainActor.run {
        view.adaptor = adaptor
    }
```

## Topics

### Initializers

- [init(virtualMachine:)](vzvirtualmachineviewadaptor/init%28virtualmachine_%29.md): Initialize an adaptor for a virtual machine.

## Relationships

### Conforms To

- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

## See Also

### Devices

- [VZGraphicsDevice](vzgraphicsdevice.md): A class that represents a graphics device in a VM.
- [VZGraphicsDisplay](vzgraphicsdisplay.md): A class that represents a graphics display in a VM.
- [VZMacGraphicsDevice](vzmacgraphicsdevice.md): An object that represents a Mac graphics device.
- [VZVirtioGraphicsScanout](vzvirtiographicsscanout.md): A Virtio graphics scanout that corresponds to a Virtio graphics scanout configuration.
- [VZMacGraphicsDisplay](vzmacgraphicsdisplay.md): An object that represents the graphics display on a Mac.
- [VZVirtioGraphicsDevice](vzvirtiographicsdevice.md): A Virtio graphics device.
