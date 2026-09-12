> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1441794-withaddressranges](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1441794-withaddressranges)

# withAddressRanges

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

Creates an IOMemoryDescriptor to describe one or more virtual ranges.

## Declaration

```objectivec
static OSPtr<IOMemoryDescriptor> withAddressRanges(IOAddressRange *ranges, UInt32 rangeCount, IOOptionBits options, task_t task);
```

## Parameters

- `ranges`: An array of IOAddressRange structures which specify the virtual ranges in the specified map which make up the memory to be described. IOAddressRange is the 64bit version of IOVirtualRange.
- `rangeCount`: The member count of the ranges array.
- `options`: kIOMemoryDirectionMask (options:direction) This nibble indicates the I/O direction to be associated with the descriptor, which may affect the operation of the prepare and complete methods on some architectures. kIOMemoryAsReference For options:type = Virtual or Physical this indicate that the memory descriptor need not copy the ranges array into local memory. This is an optimisation to try to minimise unnecessary allocations.
- `task`: The task each of the virtual ranges are mapped into. Note that unlike IOMemoryDescriptor::withAddress(), kernel_task memory must be explicitly prepared when passed to this api. The task argument may be NULL to specify memory by physical address.

<a id="return_value"></a>

## Return Value

The created IOMemoryDescriptor on success, to be released by the caller, or zero on failure.

<a id="discussion"></a>

## Discussion

This method creates and initializes an IOMemoryDescriptor for memory consisting of an array of virtual memory ranges each mapped into a specified source task. This memory descriptor needs to be prepared before it can be used to extract data from the memory described.

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
- [withPersistentMemoryDescriptor](1812901-withpersistentmemorydescriptor.md): Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.
- [withPersistentMemoryDescriptor](1441983-withpersistentmemorydescriptor.md): Copy constructor that generates a new memory descriptor if the backing memory for the same task's virtual address and length has changed.
- [withPhysicalAddress](1812908-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [withPhysicalAddress](1441877-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [free](3180646-free.md): Performs any final cleanup for the memory descriptor object.
