> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdmedia/1811197-readdiscinfo](https://developer.apple.com/documentation/kernel/iodvdmedia/1811197-readdiscinfo)

# readDiscInfo

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readDiscInfo(
 IOMemoryDescriptor *buffer, 
 UInt16 *actualByteCount ); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `actualByteCount`: Returns the actual number of bytes transferred in the data transfer.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ DISC INFORMATION command.

## See Also

### Miscellaneous

- [getSpeed](1811144-getspeed.md)
- [readRZoneInfo](1811250-readrzoneinfo.md)
- [readStructure](1811277-readstructure.md)
- [reportKey](1811294-reportkey.md)
- [sendKey](1811314-sendkey.md)
- [setSpeed](1811329-setspeed.md)
