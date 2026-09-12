> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/3553361-getdmamaplength](https://developer.apple.com/documentation/kernel/iomemorydescriptor/3553361-getdmamaplength)

# getDMAMapLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 11.0+

## Declaration

```objectivec
uint64_t getDMAMapLength(uint64_t *offset);
```

## See Also

### Getting the Descriptor Information

- [getDirection](1812765-getdirection.md): Gets the direction of memory transfers associated with the descriptor.
- [getDirection](1441925-getdirection.md): Gets the direction of memory transfers associated with the descriptor.
- [getLength](1812776-getlength.md): Accessor to get the length of the memory descriptor (over all its ranges).
- [getLength](1442036-getlength.md): Accessor to get the length of the memory descriptor (over all its ranges).
- [GetLength](3180642-getlength.md): Returns the length of the memory block represented by this object.
- [getFlags](2870265-getflags.md): Returns the options used to create the memory descriptor.
- [getMetaClass](1442096-getmetaclass.md)
