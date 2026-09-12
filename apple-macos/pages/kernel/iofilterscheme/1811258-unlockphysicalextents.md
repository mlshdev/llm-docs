> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811258-unlockphysicalextents](https://developer.apple.com/documentation/kernel/iofilterscheme/1811258-unlockphysicalextents)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleClose](1811170-handleclose.md)
- [handleIsOpen](1811193-handleisopen.md)
- [handleOpen](1811211-handleopen.md)
- [lockPhysicalExtents](1811226-lockphysicalextents.md)
- [read](1811238-read.md)
- [synchronizeCache](1811248-synchronizecache.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
