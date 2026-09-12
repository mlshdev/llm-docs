> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1811739-readtrackinfo](https://developer.apple.com/documentation/kernel/iobdmedia/1811739-readtrackinfo)

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readTrackInfo(
 IOMemoryDescriptor *buffer, 
 UInt32address, 
 UInt8addressType, 
 UInt8open, 
 UInt16 *actualByteCount ); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `address`: As documented by MMC.
- `addressType`: As documented by MMC.
- `open`: Reserved for future use. Set to zero.
- `actualByteCount`: Returns the actual number of bytes transferred in the data transfer.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ TRACK INFORMATION command.

## See Also

### Miscellaneous

- [getSpeed](1811688-getspeed.md)
- [readDiscInfo](1811707-readdiscinfo.md)
- [readStructure](1811722-readstructure.md)
- [reportKey](1811756-reportkey.md)
- [sendKey](1811776-sendkey.md)
- [setSpeed](1811802-setspeed.md)
- [splitTrack](1811824-splittrack.md)
