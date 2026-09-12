> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iofilterscheme/1811211-handleopen](https://developer.apple.com/documentation/kernel/iofilterscheme/1811211-handleopen)

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

- [copyPhysicalExtent](1811149-copyphysicalextent.md)
- [handleClose](1811170-handleclose.md)
- [handleIsOpen](1811193-handleisopen.md)
- [lockPhysicalExtents](1811226-lockphysicalextents.md)
- [read](1811238-read.md)
- [synchronizeCache](1811248-synchronizecache.md)
- [unlockPhysicalExtents](1811258-unlockphysicalextents.md)
- [unmap](1811266-unmap.md)
- [write](1811274-write.md)
