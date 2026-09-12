> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iostorage/1810767-complete](https://developer.apple.com/documentation/kernel/iostorage/1810767-complete)

# complete

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
static void complete(
 IOStorageCompletion *completion, 
 IOReturn status, 
 UInt64 actualByteCount = 0); 
```

## Parameters

- `completion`: Completion information for the data transfer.
- `status`: Status of the data transfer.
- `actualByteCount`: Actual number of bytes transferred in the data transfer.

<a id="overview"></a>

## Overview

Invokes the specified completion action of the read/write request. If the completion action is unspecified, no action is taken. This method serves simply as a convenience to storage subclass developers.

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810820-copyphysicalextent.md)
- [handleClose](1810866-handleclose.md)
- [handleIsOpen](1810905-handleisopen.md)
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
