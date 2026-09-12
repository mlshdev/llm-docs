> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1811824-splittrack](https://developer.apple.com/documentation/kernel/iobdmedia/1811824-splittrack)

# splitTrack

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn splitTrack(
 UInt32address); 
```

## Parameters

- `address`: As documented by MMC.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Issue an MMC RESERVE TRACK command with the ARSV bit.

## See Also

### Miscellaneous

- [getSpeed](1811688-getspeed.md)
- [readDiscInfo](1811707-readdiscinfo.md)
- [readStructure](1811722-readstructure.md)
- [readTrackInfo](1811739-readtrackinfo.md)
- [reportKey](1811756-reportkey.md)
- [sendKey](1811776-sendkey.md)
- [setSpeed](1811802-setspeed.md)
