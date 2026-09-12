> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodeviceconfiguration/sharedmemoryregions](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodeviceconfiguration/sharedmemoryregions)

# sharedMemoryRegions (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The list of shared memory regions.

## Declaration

```swift
var sharedMemoryRegions: [VZVirtioSharedMemoryRegionConfiguration] { get set }
```

<a id="discussion"></a>

## Discussion

The list is empty by default.

# sharedMemoryRegions (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 27.0+

The list of shared memory regions.

## Declaration

```objectivec
@property (copy, readwrite) NSArray<VZVirtioSharedMemoryRegionConfiguration *> * sharedMemoryRegions;
```

<a id="discussion"></a>

## Discussion

The list is empty by default.
