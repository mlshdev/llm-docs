> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1441969-initwithoptions](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1441969-initwithoptions)

# initWithOptions

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Primary initializer for all variants of memory descriptors.

## Declaration

```objectivec
virtual bool initWithOptions(void *buffers, UInt32 count, UInt32 offset, task_t task, IOOptionBits options, IOMapper *mapper);
```

<a id="return_value"></a>

## Return Value

true on success, false on failure.

<a id="discussion"></a>

## Discussion

For a more complete description see IOMemoryDescriptor::withOptions. Note this function can be used to re-init a previously created memory descriptor.

## See Also

### Creating the Memory Buffer

- [initWithOptions](1812826-initwithoptions.md): Primary initializer for all variants of memory descriptors.
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
- [withPhysicalAddress](1812908-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [withPhysicalAddress](1441877-withphysicaladdress.md): Creates an IOMemoryDescriptor to describe one physical range.
- [free](3180646-free.md): Performs any final cleanup for the memory descriptor object.
