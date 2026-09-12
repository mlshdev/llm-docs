> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810337-handleisopen](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810337-handleisopen)

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

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleClose](1810310-handleclose.md)
- [handleOpen](1810366-handleopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
