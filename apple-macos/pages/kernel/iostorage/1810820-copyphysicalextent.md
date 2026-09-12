> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostorage/1810820-copyphysicalextent](https://developer.apple.com/documentation/kernel/iostorage/1810820-copyphysicalextent)

# copyPhysicalExtent

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOStorage * copyPhysicalExtent(
 IOService *client, 
 UInt64 *byteStart, 
 UInt64 *byteCount); 
```

## Parameters

- `client`: Client requesting the operation.
- `byteStart`: Starting byte offset for the operation. Returns a physical byte offset, relative to the physical storage object, on success.
- `byteCount`: Size of the operation. Returns the actual number of bytes which can be transferred, relative to the physical storage object, on success.

<a id="return_value"></a>

## Return Value

A reference to the physical storage object, which should be released by the caller, or a null on error.

<a id="overview"></a>

## Overview

Convert the specified byte offset into a physical byte offset, relative to a physical storage object. This call should only be made within the context of lockPhysicalExtents().

## See Also

### Miscellaneous

- [complete](1810767-complete.md)
- [handleClose](1810866-handleclose.md)
- [handleIsOpen](1810905-handleisopen.md)
- [handleOpen](1810948-handleopen.md)
- [lockPhysicalExtents](1810985-lockphysicalextents.md)
- [open](1811013-open.md)
- [read()](1811038-read.md)
- [read()](1811068-read.md)
- [synchronizeCache](1811091-synchronizecache.md)
- [unlockPhysicalExtents](1811117-unlockphysicalextents.md)
- [unmap](1811145-unmap.md)
- [write()](1811168-write.md)
- [write()](1811185-write.md)
