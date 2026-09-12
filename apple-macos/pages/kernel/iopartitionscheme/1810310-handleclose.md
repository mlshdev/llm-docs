> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810310-handleclose](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810310-handleclose)

# handleClose

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual void handleClose(
 IOService *client,
 IOOptionBitsoptions); 
```

## Parameters

- `client`: Client requesting the close.
- `options`: Options for the close. Set to zero.

<a id="overview"></a>

## Overview

The handleClose method closes the client's access to this object.

This implementation replaces the IOService definition of handleClose().

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleIsOpen](1810337-handleisopen.md)
- [handleOpen](1810366-handleopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
