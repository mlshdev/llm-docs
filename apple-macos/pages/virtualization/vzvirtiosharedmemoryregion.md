> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosharedmemoryregion](https://developer.apple.com/documentation/virtualization/vzvirtiosharedmemoryregion)

# VZVirtioSharedMemoryRegion (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

## Declaration

```swift
class VZVirtioSharedMemoryRegion
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZVirtioSharedMemoryRegion` directly.

Virtio shared memory regions are first configured on the [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md) through [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md). When you create a [VZCustomVirtioDevice](vzcustomvirtiodevice.md), the shared memory region is available through the [sharedMemoryRegions](vzcustomvirtiodevice/sharedmemoryregions.md) property.

Use this class to manage the shared memory region during virtual machine runtime to map and unmap host memory into and from the shared memory region.

## Topics

### Instance Properties

- [regionID](vzvirtiosharedmemoryregion/regionid.md): The shared memory region ID.
- [size](vzvirtiosharedmemoryregion/size.md): The size of the shared memory region.

### Instance Methods

- [mapMemory(\_:atOffset:size:completionHandler:)](vzvirtiosharedmemoryregion/mapmemory%28__atoffset_size_completionhandler_%29.md): Maps a chunk of host memory into the shared memory region.
- [unmapMemory(atOffset:size:completionHandler:)](vzvirtiosharedmemoryregion/unmapmemory%28atoffset_size_completionhandler_%29.md): Unmaps a chunk of host memory from the shared memory region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md): The configuration of a Virtio shared memory region.
- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Managing shared memory

- [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md): The configuration of a Virtio shared memory region.

# VZVirtioSharedMemoryRegion (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

## Declaration

```objectivec
@interface VZVirtioSharedMemoryRegion : NSObject
```

<a id="overview"></a>

## Overview

Don’t instantiate a `VZVirtioSharedMemoryRegion` directly.

Virtio shared memory regions are first configured on the [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md) through [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md). When you create a [VZCustomVirtioDevice](vzcustomvirtiodevice.md), the shared memory region is available through the [sharedMemoryRegions](vzcustomvirtiodevice/sharedmemoryregions.md) property.

Use this class to manage the shared memory region during virtual machine runtime to map and unmap host memory into and from the shared memory region.

## Topics

### Instance Properties

- [regionID](vzvirtiosharedmemoryregion/regionid.md): The shared memory region ID.
- [size](vzvirtiosharedmemoryregion/size.md): The size of the shared memory region.

### Instance Methods

- [mapMemory:atOffset:size:completionHandler:](vzvirtiosharedmemoryregion/mapmemory%28__atoffset_size_completionhandler_%29.md): Maps a chunk of host memory into the shared memory region.
- [unmapMemoryAtOffset:size:completionHandler:](vzvirtiosharedmemoryregion/unmapmemory%28atoffset_size_completionhandler_%29.md): Unmaps a chunk of host memory from the shared memory region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md): The configuration of a Virtio shared memory region.
- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Managing shared memory

- [VZVirtioSharedMemoryRegionConfiguration](vzvirtiosharedmemoryregionconfiguration.md): The configuration of a Virtio shared memory region.
