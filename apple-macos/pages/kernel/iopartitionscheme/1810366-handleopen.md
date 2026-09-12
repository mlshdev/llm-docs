> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iopartitionscheme/1810366-handleopen](https://developer.apple.com/documentation/kernel/iopartitionscheme/1810366-handleopen)

# handleOpen

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual bool handleOpen(
 IOService *client, 
 IOOptionBitsoptions, 
 void *access); 
```

## Parameters

- `client`: Client requesting the open.
- `options`: Options for the open. Set to zero.
- `access`: Access level for the open. Set to kIOStorageAccessReader or kIOStorageAccessReaderWriter.

<a id="return_value"></a>

## Return Value

Returns true if the open was successful, false otherwise.

<a id="overview"></a>

## Overview

The handleOpen method grants or denies permission to access this object to an interested client. The argument is an IOStorageAccess value that specifies the level of access desired -- reader or reader-writer.

This method can be invoked to upgrade or downgrade the access level for an existing client as well. The previous access level will prevail for upgrades that fail, of course. A downgrade should never fail. If the new access level should be the same as the old for a given client, this method will do nothing and return success. In all cases, one, singular close-per-client is expected for all opens-per-client received.

This implementation replaces the IOService definition of handleOpen().

## See Also

### Miscellaneous

- [copyPhysicalExtent](1810278-copyphysicalextent.md)
- [handleClose](1810310-handleclose.md)
- [handleIsOpen](1810337-handleisopen.md)
- [lockPhysicalExtents](1810387-lockphysicalextents.md)
- [read](1810409-read.md)
- [synchronizeCache](1810446-synchronizecache.md)
- [unlockPhysicalExtents](1810496-unlockphysicalextents.md)
- [unmap](1810548-unmap.md)
- [write](1810601-write.md)
