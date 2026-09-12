> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostorage/1811117-unlockphysicalextents](https://developer.apple.com/documentation/kernel/iostorage/1811117-unlockphysicalextents)

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

- [complete](1810767-complete.md)
- [copyPhysicalExtent](1810820-copyphysicalextent.md)
- [handleClose](1810866-handleclose.md)
- [handleIsOpen](1810905-handleisopen.md)
- [handleOpen](1810948-handleopen.md)
- [lockPhysicalExtents](1810985-lockphysicalextents.md)
- [open](1811013-open.md)
- [read()](1811038-read.md)
- [read()](1811068-read.md)
- [synchronizeCache](1811091-synchronizecache.md)
- [unmap](1811145-unmap.md)
- [write()](1811168-write.md)
- [write()](1811185-write.md)
