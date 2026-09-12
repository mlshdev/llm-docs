> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdmedia/1811688-getspeed](https://developer.apple.com/documentation/kernel/iobdmedia/1811688-getspeed)

# getSpeed

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn getSpeed(
 UInt16 *kilobytesPerSecond); 
```

## Parameters

- `kilobytesPerSecond`: Returns the current speed used for data transfers, in kB/s.

  kBDSpeedMin specifies the minimum speed for all BD media (1X). kBDSpeedMax specifies the maximum speed supported in hardware.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Get the current speed used for data transfers.

## See Also

### Miscellaneous

- [readDiscInfo](1811707-readdiscinfo.md)
- [readStructure](1811722-readstructure.md)
- [readTrackInfo](1811739-readtrackinfo.md)
- [reportKey](1811756-reportkey.md)
- [sendKey](1811776-sendkey.md)
- [setSpeed](1811802-setspeed.md)
- [splitTrack](1811824-splittrack.md)
