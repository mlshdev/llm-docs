> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/3074961-withcopy](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3074961-withcopy)

# withCopy

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

Creates a memory buffer with memory descriptor for that buffer.

## Declaration

```objectivec
static OSPtr<IOBufferMemoryDescriptor> withCopy(task_t inTask, IOOptionBits options, vm_map_t sourceMap, mach_vm_address_t source, mach_vm_size_t size);
```

## Parameters

- `inTask`: The task the buffer will be allocated in.
- `options`: Options for the allocation:

  kIODirectionOut, kIODirectionIn - set the direction of the I/O transfer.

  kIOMemoryPhysicallyContiguous - pass to request memory be physically contiguous. This option is heavily discouraged. The request may fail if memory is fragmented, may cause large amounts of paging activity, and may take a very long time to execute.

  kIOMemoryPageable - pass to request memory be non-wired - the default for kernel allocated memory is wired.

  kIOMemoryPurgeable - pass to request memory that may later have its purgeable state set with IOMemoryDescriptor::setPurgeable. Only supported for kIOMemoryPageable allocations.

  kIOMemoryKernelUserShared - pass to request memory that will be mapped into both the kernel and client applications.

  kIOMapInhibitCache - allocate memory with inhibited cache setting.

  kIOMapWriteThruCache - allocate memory with writethru cache setting.

  kIOMapCopybackCache - allocate memory with copyback cache setting.

  kIOMapWriteCombineCache - allocate memory with writecombined cache setting.
- `sourceMap`: The memory map to copy from.
- `source`: The address at which to start copying.
- `size`: The number of bytes to copy.

<a id="return_value"></a>

## Return Value

Returns an instance of class IOBufferMemoryDescriptor to be released by the caller, which will free the memory desriptor and associated buffer.

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
- [withCapacity](1574841-withcapacity.md): Creates a buffer memory descriptor and allocates enough bytes to meet the specified capacity.
- [free](3180456-free.md): Performs any final cleanup for the memory buffer descriptor object.
