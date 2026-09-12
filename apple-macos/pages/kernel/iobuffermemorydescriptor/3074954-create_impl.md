> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/3074954-create_impl](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3074954-create_impl)

# Create_Impl

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Create_Impl(uint64_t options, uint64_t capacity, uint64_t alignment, IOBufferMemoryDescriptor **memory);
```

## See Also

### Managing Internal Structures

- [ExpansionData](../ioservice/expansiondata.md)
- [reserved](reserved.md)
- [Create](3180450-create.md): Creates a new memory buffer descriptor object in the current process space.
- [Create_Invoke](3180451-create_invoke.md)
- [GetAddressRange](3180453-getaddressrange.md): Returns the address and length of the memory buffer.
- [getMetaClass](1574832-getmetaclass.md)
- [SetLength_Invoke](3131492-setlength_invoke.md)
- [SetLength](3180454-setlength.md): Changes the length of the memory buffer.
- [SetLength_Impl](3131491-setlength_impl.md)
- [Dispatch](3180452-dispatch.md)
