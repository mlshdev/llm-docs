> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzcustomvirtiodevice/guestmemorymapping(atphysicaladdress:length:)](https://developer.apple.com/documentation/virtualization/vzcustomvirtiodevice/guestmemorymapping(atphysicaladdress:length:))

# guestMemoryMapping(atPhysicalAddress:length:) (Swift)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns guest memory mapping referred to by physicalAddress and length.

## Declaration

```swift
func guestMemoryMapping(atPhysicalAddress physicalAddress: UInt64, length: Int) -> VZGuestMemoryMapping?
```

## Parameters

- `physicalAddress`: The guest physical address of the memory.
- `length`: Length of the memory.

<a id="return-value"></a>

## Return Value

A [VZGuestMemoryMapping](../vzguestmemorymapping.md) object that contains the guest memory in the host address space, or `nil` if `physicalAddress` and `length` do not reference a valid guest RAM region.

# guestMemoryMappingAtPhysicalAddress:length: (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Method  
**Availability:** macOS 27.0+

Returns guest memory mapping referred to by physicalAddress and length.

## Declaration

```objectivec
- (VZGuestMemoryMapping *) guestMemoryMappingAtPhysicalAddress:(uint64_t) physicalAddress length:(size_t) length;
```

## Parameters

- `physicalAddress`: The guest physical address of the memory.
- `length`: Length of the memory.

<a id="return-value"></a>

## Return Value

A [VZGuestMemoryMapping](../vzguestmemorymapping.md) object that contains the guest memory in the host address space, or `nil` if `physicalAddress` and `length` do not reference a valid guest RAM region.
