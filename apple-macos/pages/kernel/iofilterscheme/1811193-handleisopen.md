> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811193-handleisopen](https://developer.apple.com/documentation/kernel/iofilterscheme/1811193-handleisopen)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleClose](1811170-handleclose.md)
- [handleOpen](1811211-handleopen.md)
- [lockPhysicalExtents](1811226-lockphysicalextents.md)
- [read](1811238-read.md)
- [synchronizeCache](1811248-synchronizecache.md)
- [unlockPhysicalExtents](1811258-unlockphysicalextents.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
