> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iomedia/1813630-handleisopen](https://developer.apple.com/documentation/kernel/iomedia/1813630-handleisopen)

# handleIsOpen

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual bool handleIsOpen(
 const IOService *client) const; 
```

## Parameters

- `client`: Client to check the open state of. Set to zero to check the open state of all clients.

<a id="return_value"></a>

## Return Value

Returns true if the client was (or clients were) open, false otherwise.

<a id="overview"></a>

## Overview

The handleIsOpen method determines whether the specified client, or any client if none is specified, presently has an open on this object.

This implementation replaces the IOService definition of handleIsOpen().

## See Also

### Miscellaneous

- [copyPhysicalExtent](1813424-copyphysicalextent.md)
- [getAttributes](1813444-getattributes.md)
- [getBase](1813468-getbase.md)
- [getContent](1813495-getcontent.md)
- [getContentHint](1813522-getcontenthint.md)
- [getPreferredBlockSize](1813553-getpreferredblocksize.md)
- [getSize](1813585-getsize.md)
- [handleClose](1813614-handleclose.md)
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
