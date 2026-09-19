> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtualmachineviewadaptor/init(virtualmachine:)

# init(virtualMachine:)

**Framework:** Virtualization  
**Kind:** Initializer  
**Availability:** macOS 27.0+

Initialize an adaptor for a virtual machine.

## Declaration

```swift
init(virtualMachine: VZVirtualMachine)
```

## Parameters

- `virtualMachine`: The virtual machine to adapt.

<a id="discussion"></a>

## Discussion

If the virtual machine has graphics devices, the first display of the first graphics device is used. If the virtual machine has no graphics devices, the adaptor is created successfully but the view will have no display.
