> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdblockstoragedevice/1811564-readdiscstructure](https://developer.apple.com/documentation/kernel/iobdblockstoragedevice/1811564-readdiscstructure)

# readDiscStructure

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readDiscStructure(
 IOMemoryDescriptor *buffer, 
 UInt8format, 
 UInt32address, 
 UInt8layer, 
 UInt8grantID, 
 UInt8type ) = 0; 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `format`: As documented by MMC.
- `address`: As documented by MMC.
- `layer`: As documented by MMC.
- `grantID`: As documented by MMC.
- `type`: As documented by MMC.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ DISC STRUCTURE command.

## See Also

### Miscellaneous

- [init](1811554-init.md)
- [splitTrack](1811575-splittrack.md)
