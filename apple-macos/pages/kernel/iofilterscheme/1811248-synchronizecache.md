> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811248-synchronizecache](https://developer.apple.com/documentation/kernel/iofilterscheme/1811248-synchronizecache)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleClose](1811170-handleclose.md)
- [handleIsOpen](1811193-handleisopen.md)
- [handleOpen](1811211-handleopen.md)
- [lockPhysicalExtents](1811226-lockphysicalextents.md)
- [read](1811238-read.md)
- [unlockPhysicalExtents](1811258-unlockphysicalextents.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
