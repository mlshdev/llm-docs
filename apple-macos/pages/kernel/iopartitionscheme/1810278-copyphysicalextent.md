> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810278-copyphysicalextent](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810278-copyphysicalextent)

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

- [handleClose](1810310-handleclose.md)
- [handleIsOpen](1810337-handleisopen.md)
- [handleOpen](1810366-handleopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
