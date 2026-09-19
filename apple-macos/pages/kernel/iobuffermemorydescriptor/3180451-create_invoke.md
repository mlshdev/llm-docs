> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/3180451-create_invoke

# Create_Invoke

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Type Method  
**Availability:** macOS 10.15+

## Declaration

```objectivec
static kern_return_t Create_Invoke(const IORPC rpc, Create_Handler func);
```

## See Also

### Managing Internal Structures

- [ExpansionData](../ioservice/expansiondata.md)
- [reserved](reserved.md)
- [Create](3180450-create.md): Creates a new memory buffer descriptor object in the current process space.
- [Create_Impl](3074954-create_impl.md)
- [GetAddressRange](3180453-getaddressrange.md): Returns the address and length of the memory buffer.
- [getMetaClass](1574832-getmetaclass.md)
- [SetLength_Invoke](3131492-setlength_invoke.md)
- [SetLength](3180454-setlength.md): Changes the length of the memory buffer.
- [SetLength_Impl](3131491-setlength_impl.md)
- [Dispatch](3180452-dispatch.md)
