> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812901-withpersistentmemorydescriptor](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812901-withpersistentmemorydescriptor)

# withPersistentMemoryDescriptor

**Interface language:** Objective-C

**Framework:** Kernel

Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.

## Declaration

```objectivec
static IOMemoryDescriptor * withPersistentMemoryDescriptor(
 IOMemoryDescriptor *originalMD); 
```

## Parameters

- `originalMD`: The memory descriptor to be duplicated.

<a id="return_value"></a>

## Return Value

Either the original memory descriptor with an additional retain or a new memory descriptor, 0 for a bad original memory descriptor or some other resource shortage.

<a id="overview"></a>

## Overview

If the original memory descriptor's address and length is still backed by the same real memory, i.e. the user hasn't deallocated and the reallocated memory at the same address then the original memory descriptor is returned with a additional reference. Otherwise we build a totally new memory descriptor with the same characteristics as the previous one but with a new view of the vm. Note not legal to call this function with anything except an IOGeneralMemoryDescriptor that was created with the kIOMemoryPersistent option.

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
- [withPersistentMemoryDescriptor](1441983-withpersistentmemorydescriptor.md): Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.
- [withPhysicalAddress](1812908-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [withPhysicalAddress](1441877-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [free](3180646-free.md): Performs any final cleanup for the memory descriptor object.
