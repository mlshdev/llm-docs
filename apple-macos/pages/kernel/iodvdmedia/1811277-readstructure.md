> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdmedia/1811277-readstructure](https://developer.apple.com/documentation/kernel/iodvdmedia/1811277-readstructure)

# readStructure

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readStructure(
 IOMemoryDescriptor *buffer, 
 const DVDStructureFormatformat, 
 const UInt32address, 
 const UInt8layer, 
 const UInt8grantID ); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `format`: As documented by MMC.
- `address`: As documented by MMC.
- `layer`: As documented by MMC.
- `grantID`: As documented by MMC.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ DVD STRUCTURE command.

## See Also

### Miscellaneous

- [getSpeed](1811144-getspeed.md)
- [readDiscInfo](1811197-readdiscinfo.md)
- [readRZoneInfo](1811250-readrzoneinfo.md)
- [reportKey](1811294-reportkey.md)
- [sendKey](1811314-sendkey.md)
- [setSpeed](1811329-setspeed.md)
