> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812908-withphysicaladdress](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812908-withphysicaladdress)

# withPhysicalAddress

**Interface language:** Objective-C

**Framework:** Kernel

Creates an IOMemoryDescriptor to describe one physical range.

## Declaration

```objectivec
static IOMemoryDescriptor * withPhysicalAddress( 
 IOPhysicalAddressaddress, 
 IOByteCountwithLength, 
 IODirectionwithDirection ); 
```

## Parameters

- `address`: The physical address of the first byte in the memory.
- `withLength`: The length of memory.
- `withDirection`: An I/O direction to be associated with the descriptor, which may affect the operation of the prepare and complete methods on some architectures.

<a id="return_value"></a>

## Return Value

The created IOMemoryDescriptor on success, to be released by the caller, or zero on failure.

<a id="overview"></a>

## Overview

This method creates and initializes an IOMemoryDescriptor for memory consisting of a single physical memory range.

## See Also

### Creating the Memory Buffer

- [initWithOptions](1812826-initwithoptions.md): Primary initializer for all variants of memory descriptors.
- [initWithOptions](1441969-initwithoptions.md): Primary initializer for all variants of memory descriptors.
- [withOptions](1812897-withoptions.md): Primary initializer for all variants of memory descriptors.
- [withOptions](1441825-withoptions.md): Primary initializer for all variants of memory descriptors.
- [withAddress](1812881-withaddress.md): Creates an IOMemoryDescriptor to describe one virtual range of the kernel task.
- [withAddress](1442032-withaddress.md): Creates an IOMemoryDescriptor to describe one virtual range of the kernel task.
- [withAddressRange](1812885-withaddressrange.md): Creates an IOMemoryDescriptor to describe one virtual range of the specified map.
- [withAddressRange](1441897-withaddressrange.md): Creates an IOMemoryDescriptor to describe one virtual range of the specified map.
- [withAddressRanges](1812892-withaddressranges.md): Creates an IOMemoryDescriptor to describe one or more virtual ranges.
- [withAddressRanges](1441794-withaddressranges.md): Creates an IOMemoryDescriptor to describe one or more virtual ranges.
- [withPersistentMemoryDescriptor](1812901-withpersistentmemorydescriptor.md): Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.
- [withPersistentMemoryDescriptor](1441983-withpersistentmemorydescriptor.md): Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.
- [withPhysicalAddress](1441877-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [free](3180646-free.md): Performs any final cleanup for the memory descriptor object.
