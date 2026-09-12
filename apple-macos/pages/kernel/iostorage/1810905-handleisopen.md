> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostorage/1810905-handleisopen](https://developer.apple.com/documentation/kernel/iostorage/1810905-handleisopen)

# handleIsOpen

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual bool handleIsOpen(
 const IOService *client) const = 0; 
```

## Parameters

- `client`: Client to check the open state of. Set to zero to check the open state of all clients.

<a id="return_value"></a>

## Return Value

Returns true if the client was (or clients were) open, false otherwise.

<a id="overview"></a>

## Overview

The handleIsOpen method determines whether the specified client, or any client if none is specified, presently has an open on this object.

## See Also

### Miscellaneous

- [complete](1810767-complete.md)
- [copyPhysicalExtent](1810820-copyphysicalextent.md)
- [handleClose](1810866-handleclose.md)
- [handleOpen](1810948-handleopen.md)
- [lockPhysicalExtents](1810985-lockphysicalextents.md)
- [open](1811013-open.md)
- [read()](1811038-read.md)
- [read()](1811068-read.md)
- [synchronizeCache](1811091-synchronizecache.md)
- [unlockPhysicalExtents](1811117-unlockphysicalextents.md)
- [unmap](1811145-unmap.md)
- [write()](1811168-write.md)
- [write()](1811185-write.md)
