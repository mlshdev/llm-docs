> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdmedia/1811250-readrzoneinfo](https://developer.apple.com/documentation/kernel/iodvdmedia/1811250-readrzoneinfo)

# readRZoneInfo

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readRZoneInfo(
 IOMemoryDescriptor *buffer, 
 UInt32address, 
 DVDRZoneInfoAddressTypeaddressType, 
 UInt16 *actualByteCount ); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `address`: As documented by MMC.
- `addressType`: As documented by MMC.
- `actualByteCount`: Returns the actual number of bytes transferred in the data transfer.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ RZONE INFORMATION (READ TRACK INFORMATION) command.

## See Also

### Miscellaneous

- [getSpeed](1811144-getspeed.md)
- [readDiscInfo](1811197-readdiscinfo.md)
- [readStructure](1811277-readstructure.md)
- [reportKey](1811294-reportkey.md)
- [sendKey](1811314-sendkey.md)
- [setSpeed](1811329-setspeed.md)
