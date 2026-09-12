> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811170-handleclose](https://developer.apple.com/documentation/kernel/iofilterscheme/1811170-handleclose)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleIsOpen](1811193-handleisopen.md)
- [handleOpen](1811211-handleopen.md)
- [lockPhysicalExtents](1811226-lockphysicalextents.md)
- [read](1811238-read.md)
- [synchronizeCache](1811248-synchronizecache.md)
- [unlockPhysicalExtents](1811258-unlockphysicalextents.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
