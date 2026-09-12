> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810446-synchronizecache](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810446-synchronizecache)

# synchronizeCache

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn synchronizeCache(
 IOService *client); 
```

## Parameters

- `client`: Client requesting the cache synchronization.

<a id="return_value"></a>

## Return Value

Returns the status of the cache synchronization.

<a id="overview"></a>

## Overview

Flush the cached data in the storage object, if any, synchronously.

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleClose](1810310-handleclose.md)
- [handleIsOpen](1810337-handleisopen.md)
- [handleOpen](1810366-handleopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
