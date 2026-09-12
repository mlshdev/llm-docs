> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/1574834-withbytes](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574834-withbytes)

# withBytes

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.11.4+

Creates a buffer memory descriptor and fills it with the specified bytes.

## Declaration

```objectivec
static OSPtr<IOBufferMemoryDescriptor> withBytes(const void *bytes, vm_size_t withLength, IODirection withDirection, bool withContiguousMemory);
```

## Parameters

- `bytes`: The bytes to copy into the newly allocated buffer.
- `withLength`: The number of bytes in the `bytes` parameter.
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
- [withCapacity](1574841-withcapacity.md): Creates a buffer memory descriptor and allocates enough bytes to meet the specified capacity.
- [withCopy](3074961-withcopy.md): Creates a memory buffer with memory descriptor for that buffer.
- [free](3180456-free.md): Performs any final cleanup for the memory buffer descriptor object.
