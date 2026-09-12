> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810387-lockphysicalextents](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810387-lockphysicalextents)

# lockPhysicalExtents

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual bool lockPhysicalExtents(
 IOService *client); 
```

## Parameters

- `client`: Client requesting the operation.

<a id="return_value"></a>

## Return Value

Returns true if the lock was successful, false otherwise.

<a id="overview"></a>

## Overview

Lock the contents of the storage object against relocation temporarily, for the purpose of getting physical extents.

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleClose](1810310-handleclose.md)
- [handleIsOpen](1810337-handleisopen.md)
- [handleOpen](1810366-handleopen.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
