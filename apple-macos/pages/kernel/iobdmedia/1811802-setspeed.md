> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1811802-setspeed](https://developer.apple.com/documentation/kernel/iobdmedia/1811802-setspeed)

# setSpeed

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn setSpeed(
 UInt16kilobytesPerSecond); 
```

## Parameters

- `kilobytesPerSecond`: Speed to be used for data transfers, in kB/s.

  kBDSpeedMin specifies the minimum speed for all BD media (1X). kBDSpeedMax specifies the maximum speed supported in hardware.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Set the speed to be used for data transfers.

## See Also

### Miscellaneous

- [getSpeed](1811688-getspeed.md)
- [readDiscInfo](1811707-readdiscinfo.md)
- [readStructure](1811722-readstructure.md)
- [readTrackInfo](1811739-readtrackinfo.md)
- [reportKey](1811756-reportkey.md)
- [sendKey](1811776-sendkey.md)
- [splitTrack](1811824-splittrack.md)
