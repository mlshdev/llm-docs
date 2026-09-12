> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzguestmemorymapping](https://developer.apple.com/documentation/virtualization/vzguestmemorymapping)

# VZGuestMemoryMapping (Swift)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

## Declaration

```swift
class VZGuestMemoryMapping
```

<a id="overview"></a>

## Overview

A `VZGuestMemoryMapping` object provides read and write access to guest’s DRAM for a [VZCustomVirtioDevice](vzcustomvirtiodevice.md) for Virtio devices that need to directly interact with the guest’s DRAM.

Don’t instantiate a`VZGuestMemoryMapping` objects directly. Instead, call the [guestMemoryMapping(atPhysicalAddress:length:)](vzcustomvirtiodevice/guestmemorymapping%28atphysicaladdress_length_%29.md) method and the framework creates a `VZGuestMemoryMapping` object for you.

Throughout its lifetime, a `VZGuestMemoryMapping` object holds a reference to the all of the host memory allocated for the guest’s DRAM. When the virtual machine is rebooted or shutdown, the allocated host memory becomes invalidated and remapped. As such, an instance of `VZGuestMemoryMapping` can’t be used across a reboot or shutdown of the virtual machine.

## Topics

### Instance Properties

- [length](vzguestmemorymapping/length.md): The number of bytes contained by this guest memory mapping object.
- [mutableBytes](vzguestmemorymapping/mutablebytes.md): A pointer to the data this guest memory mapping object contains.
- [physicalAddress](vzguestmemorymapping/physicaladdress.md): The guest’s physical memory base address of this guest memory mapping object.

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

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.

# VZGuestMemoryMapping (Objective-C)

**Framework:** Virtualization  
**Kind:** Class  
**Availability:** macOS 27.0+

An object that represents a chunk of the guest operating system’s dynamic random access memory (DRAM).

## Declaration

```objectivec
@interface VZGuestMemoryMapping : NSObject
```

<a id="overview"></a>

## Overview

A `VZGuestMemoryMapping` object provides read and write access to guest’s DRAM for a [VZCustomVirtioDevice](vzcustomvirtiodevice.md) for Virtio devices that need to directly interact with the guest’s DRAM.

Don’t instantiate a`VZGuestMemoryMapping` objects directly. Instead, call the [guestMemoryMappingAtPhysicalAddress:length:](vzcustomvirtiodevice/guestmemorymapping%28atphysicaladdress_length_%29.md) method and the framework creates a `VZGuestMemoryMapping` object for you.

Throughout its lifetime, a `VZGuestMemoryMapping` object holds a reference to the all of the host memory allocated for the guest’s DRAM. When the virtual machine is rebooted or shutdown, the allocated host memory becomes invalidated and remapped. As such, an instance of `VZGuestMemoryMapping` can’t be used across a reboot or shutdown of the virtual machine.

## Topics

### Instance Properties

- [length](vzguestmemorymapping/length.md): The number of bytes contained by this guest memory mapping object.
- [mutableBytes](vzguestmemorymapping/mutablebytes.md): A pointer to the data this guest memory mapping object contains.
- [physicalAddress](vzguestmemorymapping/physicaladdress.md): The guest’s physical memory base address of this guest memory mapping object.

## Relationships

### Inherits From

- [NSObject](https://developer.apple.com/documentation/objectivec/nsobject-swift.class)

## See Also

### Related Documentation

- [VZCustomVirtioDevice](vzcustomvirtiodevice.md): An interface that represents a custom Virtio device that you provide the implementation for.

### Provisioning options

- [VZMacGuestProvisioningOptions](vzmacguestprovisioningoptions.md): The configuration for guest setup during macOS virtual machine startup.
- [VZGuestProvisioningOptions](vzguestprovisioningoptions.md): The base class for guest provisioning options.
