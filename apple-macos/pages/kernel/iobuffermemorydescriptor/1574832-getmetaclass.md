> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobuffermemorydescriptor/1574832-getmetaclass](https://developer.apple.com/documentation/kernel/iobuffermemorydescriptor/1574832-getmetaclass)

# getMetaClass

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

## Declaration

```objectivec
virtual const OSMetaClass * getMetaClass(void);
```

## See Also

### Managing Internal Structures

- [ExpansionData](../ioservice/expansiondata.md)
- [reserved](reserved.md)
- [Create](3180450-create.md): Creates a new memory buffer descriptor object in the current process space.
- [Create_Impl](3074954-create_impl.md)
- [Create_Invoke](3180451-create_invoke.md)
- [GetAddressRange](3180453-getaddressrange.md): Returns the address and length of the memory buffer.
- [SetLength_Invoke](3131492-setlength_invoke.md)
- [SetLength](3180454-setlength.md): Changes the length of the memory buffer.
- [SetLength_Impl](3131491-setlength_impl.md)
- [Dispatch](3180452-dispatch.md)
