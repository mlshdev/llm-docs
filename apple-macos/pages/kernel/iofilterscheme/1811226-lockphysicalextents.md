> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811226-lockphysicalextents](https://developer.apple.com/documentation/kernel/iofilterscheme/1811226-lockphysicalextents)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleClose](1811170-handleclose.md)
- [handleIsOpen](1811193-handleisopen.md)
- [handleOpen](1811211-handleopen.md)
- [read](1811238-read.md)
- [synchronizeCache](1811248-synchronizecache.md)
- [unlockPhysicalExtents](1811258-unlockphysicalextents.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
