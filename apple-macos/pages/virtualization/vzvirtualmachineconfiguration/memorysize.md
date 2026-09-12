> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/virtualization/vzvirtualmachineconfiguration/memorysize](https://developer.apple.com/documentation/virtualization/vzvirtualmachineconfiguration/memorysize)

# memorySize (Swift)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The amount of physical memory the guest operating system recognizes.

## Declaration

```swift
var memorySize: UInt64 { get set }
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the *physical memory* available to the guest operating system. This physical memory doesn’t necessarily map to the physical memory of the host computer. Instead, it’s a contiguous block of virtual memory that the host system reserves, but doesn’t allocate immediately, for the guest system. The guest operating system treats this memory as its physical memory and allocates pages from it as needed.

The value of this property must be a multiple of 1 MB. The value must also be greater than or equal to the value in [minimumAllowedMemorySize](minimumallowedmemorysize.md), and less than or equal to the value in [maximumAllowedMemorySize](maximumallowedmemorysize.md).

The guest system’s physical memory size doesn’t change unless you use a memory balloon device to change it. For more information, see the [memoryBalloonDevices](memoryballoondevices.md) property.

## See Also

### Sizing the memory partition

- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.

# memorySize (Objective-C)

**Framework:** Virtualization  
**Kind:** Instance Property  
**Availability:** macOS 11.0+

The amount of physical memory the guest operating system recognizes.

## Declaration

```objectivec
@property (readwrite) uint64_t memorySize;
```

<a id="Discussion"></a>

## Discussion

The value in this property represents the *physical memory* available to the guest operating system. This physical memory doesn’t necessarily map to the physical memory of the host computer. Instead, it’s a contiguous block of virtual memory that the host system reserves, but doesn’t allocate immediately, for the guest system. The guest operating system treats this memory as its physical memory and allocates pages from it as needed.

The value of this property must be a multiple of 1 MB. The value must also be greater than or equal to the value in [minimumAllowedMemorySize](minimumallowedmemorysize.md), and less than or equal to the value in [maximumAllowedMemorySize](maximumallowedmemorysize.md).

The guest system’s physical memory size doesn’t change unless you use a memory balloon device to change it. For more information, see the [memoryBalloonDevices](memoryballoondevices.md) property.

## See Also

### Sizing the memory partition

- [minimumAllowedMemorySize](minimumallowedmemorysize.md): The minimum amount of memory that you may configure for the VM.
- [maximumAllowedMemorySize](maximumallowedmemorysize.md): The maximum amount of memory that you may configure for the VM.
- [memoryBalloonDevices](memoryballoondevices.md): An array that you configure with a memory balloon device, used to update the memory in the VM.
