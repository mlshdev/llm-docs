> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdmedia/1811353-getspeed](https://developer.apple.com/documentation/kernel/iocdmedia/1811353-getspeed)

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

  kCDSpeedMin specifies the minimum speed for all CD media (1X). kCDSpeedMax specifies the maximum speed supported in hardware.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Get the current speed used for data transfers.

## See Also

### Miscellaneous

- [getTOC](1811363-gettoc.md)
- [read](1811376-read.md)
- [readCD()](1811386-readcd.md)
- [readCD()](1811393-readcd.md)
- [readDiscInfo](1811402-readdiscinfo.md)
- [readISRC](1811412-readisrc.md)
- [readMCN](1811424-readmcn.md)
- [readTOC](1811431-readtoc.md)
- [readTrackInfo](1811438-readtrackinfo.md)
- [setSpeed](1811448-setspeed.md)
