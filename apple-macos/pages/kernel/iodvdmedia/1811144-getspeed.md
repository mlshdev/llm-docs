> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iodvdmedia/1811144-getspeed](https://developer.apple.com/documentation/kernel/iodvdmedia/1811144-getspeed)

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

  kDVDSpeedMin specifies the minimum speed for all DVD media (1X). kDVDSpeedMax specifies the maximum speed supported in hardware.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Get the current speed used for data transfers.

## See Also

### Miscellaneous

- [readDiscInfo](1811197-readdiscinfo.md)
- [readRZoneInfo](1811250-readrzoneinfo.md)
- [readStructure](1811277-readstructure.md)
- [reportKey](1811294-reportkey.md)
- [sendKey](1811314-sendkey.md)
- [setSpeed](1811329-setspeed.md)
