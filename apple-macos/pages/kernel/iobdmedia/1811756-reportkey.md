> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1811756-reportkey](https://developer.apple.com/documentation/kernel/iobdmedia/1811756-reportkey)

# reportKey

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn reportKey(
 IOMemoryDescriptor *buffer, 
 UInt8keyClass, 
 UInt32address, 
 UInt8grantID, 
 UInt8format ); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `keyClass`: As documented by MMC.
- `address`: As documented by MMC.
- `grantID`: As documented by MMC.
- `format`: As documented by MMC.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC REPORT KEY command.

## See Also

### Miscellaneous

- [getSpeed](1811688-getspeed.md)
- [readDiscInfo](1811707-readdiscinfo.md)
- [readStructure](1811722-readstructure.md)
- [readTrackInfo](1811739-readtrackinfo.md)
- [sendKey](1811776-sendkey.md)
- [setSpeed](1811802-setspeed.md)
- [splitTrack](1811824-splittrack.md)
