> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/1574841-withcapacity](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574841-withcapacity)

# withCapacity

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

Creates a buffer memory descriptor and allocates enough bytes to meet the specified capacity.

## Declaration

```objectivec
static OSPtr<IOBufferMemoryDescriptor> withCapacity(vm_size_t capacity, IODirection withDirection, bool withContiguousMemory);
```

## Parameters

- `capacity`: The number of bytes to allocate.
- `withDirection`: The direction of the I/O transfer. For example: kIODirectionOut, kIODirectionIn.
- `withContiguousMemory`: A Boolean value that indicates whether to use a contiguous block of memory for the descriptor’s buffer.

## See Also

### Creating a Memory Buffer Descriptor

- [inTaskWithOptions](1813824-intaskwithoptions.md): Creates a memory buffer with memory descriptor for that buffer.
- [inTaskWithOptions](1574847-intaskwithoptions.md): Creates a memory buffer with memory descriptor for that buffer.
- [inTaskWithOptions](3516446-intaskwithoptions.md): Creates a memory buffer with memory descriptor for that buffer.
- [inTaskWithPhysicalMask](1813825-intaskwithphysicalmask.md): Creates a memory buffer with memory descriptor for that buffer.
- [inTaskWithPhysicalMask](1574843-intaskwithphysicalmask.md): Creates a memory buffer with memory descriptor for that buffer.
- [initWithPhysicalMask](1574833-initwithphysicalmask.md): Creates a memory buffer with memory descriptor for that buffer.
- [withOptions](1574835-withoptions.md): Creates a memory buffer with memory descriptor for that buffer.
- [withBytes](1574834-withbytes.md): Creates a buffer memory descriptor and fills it with the specified bytes.
- [withCopy](3074961-withcopy.md): Creates a memory buffer with memory descriptor for that buffer.
- [free](3180456-free.md): Performs any final cleanup for the memory buffer descriptor object.
