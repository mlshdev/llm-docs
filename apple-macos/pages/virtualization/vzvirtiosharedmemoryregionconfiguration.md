> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtiosharedmemoryregionconfiguration](https://developer.apple.com/documentation/virtualization/vzvirtiosharedmemoryregionconfiguration)

# VZVirtioSharedMemoryRegionConfiguration (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The configuration of a Virtio shared memory region.

## Declaration

```swift
class VZVirtioSharedMemoryRegionConfiguration
```

<a id="overview"></a>

## Overview

A `VZVirtioSharedMemoryRegionConfiguration` represents a memory region that’s continuously shared between the custom Virtio device implementation and the guest. A shared memory region is identified by an ID, whose meaning is specific to the device.

After configuration,  the framework advertises the shared memory region to the guest. During runtime, you can use the [mapMemory(\_:atOffset:size:completionHandler:)](vzvirtiosharedmemoryregion/mapmemory%28__atoffset_size_completionhandler_%29.md) and [unmapMemory(atOffset:size:completionHandler:)](vzvirtiosharedmemoryregion/unmapmemory%28atoffset_size_completionhandler_%29.md) APIs to map and unmap host memory into the shared memory region. How a device uses a shared memory region is specific to the device.

## Topics

### Initializers

- [init(regionID:size:)](vzvirtiosharedmemoryregionconfiguration/init%28regionid_size_%29.md): Initializes a shared memory region with a shared memory region ID and size.

### Instance Properties

- [regionID](vzvirtiosharedmemoryregionconfiguration/regionid.md): The shared memory region ID.
- [size](vzvirtiosharedmemoryregionconfiguration/size.md): The size of the shared memory region.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

### Managing shared memory

- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

# VZVirtioSharedMemoryRegionConfiguration (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

The configuration of a Virtio shared memory region.

## Declaration

```objectivec
@interface VZVirtioSharedMemoryRegionConfiguration : NSObject
```

<a id="overview"></a>

## Overview

A `VZVirtioSharedMemoryRegionConfiguration` represents a memory region that’s continuously shared between the custom Virtio device implementation and the guest. A shared memory region is identified by an ID, whose meaning is specific to the device.

After configuration,  the framework advertises the shared memory region to the guest. During runtime, you can use the [mapMemory:atOffset:size:completionHandler:](vzvirtiosharedmemoryregion/mapmemory%28__atoffset_size_completionhandler_%29.md) and [unmapMemoryAtOffset:size:completionHandler:](vzvirtiosharedmemoryregion/unmapmemory%28atoffset_size_completionhandler_%29.md) APIs to map and unmap host memory into the shared memory region. How a device uses a shared memory region is specific to the device.

## Topics

### Instance Properties

- [regionID](vzvirtiosharedmemoryregionconfiguration/regionid.md): The shared memory region ID.
- [size](vzvirtiosharedmemoryregionconfiguration/size.md): The size of the shared memory region.

### Instance Methods

- [initWithRegionID:size:](vzvirtiosharedmemoryregionconfiguration/init%28regionid_size_%29.md): Initializes a shared memory region with a shared memory region ID and size.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

### Conforms To

- [NSCopying](https://developer.apple.com/documentation/foundation/nscopying)

## See Also

### Related Documentation

- [VZCustomVirtioDeviceConfiguration](vzcustomvirtiodeviceconfiguration.md): An object that defines a custom Virtio Device configuration.
- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.
- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.

### Managing shared memory

- [VZVirtioSharedMemoryRegion](vzvirtiosharedmemoryregion.md): A class that represents a Virtio shared memory region for a custom Virtio device in a virtual machine.
