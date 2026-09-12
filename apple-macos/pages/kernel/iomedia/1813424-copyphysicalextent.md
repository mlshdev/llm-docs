> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomedia/1813424-copyphysicalextent](https://developer.apple.com/documentation/kernel/iomedia/1813424-copyphysicalextent)

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

- [getAttributes](1813444-getattributes.md)
- [getBase](1813468-getbase.md)
- [getContent](1813495-getcontent.md)
- [getContentHint](1813522-getcontenthint.md)
- [getPreferredBlockSize](1813553-getpreferredblocksize.md)
- [getSize](1813585-getsize.md)
- [handleClose](1813614-handleclose.md)
- [handleIsOpen](1813630-handleisopen.md)
- [handleOpen](1813647-handleopen.md)
- [init](1813657-init.md)
- [isEjectable](1813664-isejectable.md)
- [isFormatted](1813670-isformatted.md)
- [isWhole](1813677-iswhole.md)
- [isWritable](1813683-iswritable.md)
- [lockPhysicalExtents](1813689-lockphysicalextents.md)
- [read](1813696-read.md)
- [synchronizeCache](1813702-synchronizecache.md)
- [unlockPhysicalExtents](1813710-unlockphysicalextents.md)
- [unmap](1813719-unmap.md)
- [write](1813725-write.md)
