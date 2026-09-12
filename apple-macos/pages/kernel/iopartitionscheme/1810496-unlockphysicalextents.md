> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810496-unlockphysicalextents](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810496-unlockphysicalextents)

# unlockPhysicalExtents

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual void unlockPhysicalExtents(
 IOService *client); 
```

## Parameters

- `client`: Client requesting the operation.

<a id="overview"></a>

## Overview

Unlock the contents of the storage object for relocation again. This call must balance a successful call to lockPhysicalExtents().

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleClose](1810310-handleclose.md)
- [handleIsOpen](1810337-handleisopen.md)
- [handleOpen](1810366-handleopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
