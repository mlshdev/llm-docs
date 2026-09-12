> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomemorydescriptor/1812765-getdirection](https://developer.apple.com/documentation/kernel/iomemorydescriptor/1812765-getdirection)

# getDirection

**Interface language:** Objective-C

**Framework:** Kernel

Gets the direction of memory transfers associated with the descriptor.

## Declaration

```objectivec
virtual IODirection getDirection(void);
```

<a id="return_value"></a>

## Return Value

The transfer direction.

<a id="overview"></a>

## Overview

This method returns the direction with which the memory descriptor was created.

## See Also

### Getting the Descriptor Information

- [getDirection](1441925-getdirection.md): Gets the direction of memory transfers associated with the descriptor.
- [getLength](1812776-getlength.md): Accessor to get the length of the memory descriptor (over all its ranges).
- [getLength](1442036-getlength.md): Accessor to get the length of the memory descriptor (over all its ranges).
- [GetLength](3180642-getlength.md): Returns the length of the memory block represented by this object.
- [getDMAMapLength](3553361-getdmamaplength.md)
- [getFlags](2870265-getflags.md): Returns the options used to create the memory descriptor.
- [getMetaClass](1442096-getmetaclass.md)
