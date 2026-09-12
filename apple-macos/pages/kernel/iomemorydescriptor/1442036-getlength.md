> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1442036-getlength](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1442036-getlength)

# getLength

**Interface language:** Objective-C

**Framework:** Kernel  
**Kind:** Instance Method  
**Availability:** macOS 10.11.4+

Accessor to get the length of the memory descriptor (over all its ranges).

## Declaration

```objectivec
virtual IOByteCount getLength(void);
```

<a id="return_value"></a>

## Return Value

The byte count.

<a id="discussion"></a>

## Discussion

This method returns the total length of the memory described by the descriptor, ie. the sum of its ranges' lengths.

## See Also

### Getting the Descriptor Information

- [getDirection](1812765-getdirection.md): Gets the direction of memory transfers associated with the descriptor.
- [getDirection](1441925-getdirection.md): Gets the direction of memory transfers associated with the descriptor.
- [getLength](1812776-getlength.md): Accessor to get the length of the memory descriptor (over all its ranges).
- [GetLength](3180642-getlength.md): Returns the length of the memory block represented by this object.
- [getDMAMapLength](3553361-getdmamaplength.md)
- [getFlags](2870265-getflags.md): Returns the options used to create the memory descriptor.
- [getMetaClass](1442096-getmetaclass.md)
