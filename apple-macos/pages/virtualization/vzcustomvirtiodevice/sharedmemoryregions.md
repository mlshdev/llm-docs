> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/sharedmemoryregions](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/sharedmemoryregions)

# sharedMemoryRegions (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

An array of shared memory regions that this device exposes to the guest.

## Declaration

```swift
var sharedMemoryRegions: [VZVirtioSharedMemoryRegion] { get }
```

## See Also

### Related Documentation

- [VZVirtioSharedMemoryRegion](../vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

# sharedMemoryRegions (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

An array of shared memory regions that this device exposes to the guest.

## Declaration

```objectivec
@property (copy, readonly) NSArray<VZVirtioSharedMemoryRegion *> * sharedMemoryRegions;
```

## See Also

### Related Documentation

- [VZVirtioSharedMemoryRegion](../vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.
