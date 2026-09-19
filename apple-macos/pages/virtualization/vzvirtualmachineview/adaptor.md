> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/virtualization/vzvirtualmachineview/adaptor

# adaptor

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The virtual machine view adaptor.

## Declaration

```swift
@MainActor @preconcurrency var adaptor: VZVirtualMachineViewAdaptor? { get set }
```

<a id="Discussion"></a>

## Discussion

Use this property to assign a [VZVirtualMachineViewAdaptor](../vzvirtualmachineviewadaptor.md), which is a sendable wrapper that connects a virtual machine view to a virtual machine.
