> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdmedia/1811448-setspeed](https://developer.apple.com/documentation/kernel/iocdmedia/1811448-setspeed)

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

  kCDSpeedMin specifies the minimum speed for all CD media (1X). kCDSpeedMax specifies the maximum speed supported in hardware.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Set the speed to be used for data transfers.

## See Also

### Miscellaneous

- [getSpeed](1811353-getspeed.md)
- [getTOC](1811363-gettoc.md)
- [read](1811376-read.md)
- [readCD()](1811386-readcd.md)
- [readCD()](1811393-readcd.md)
- [readDiscInfo](1811402-readdiscinfo.md)
- [readISRC](1811412-readisrc.md)
- [readMCN](1811424-readmcn.md)
- [readTOC](1811431-readtoc.md)
- [readTrackInfo](1811438-readtrackinfo.md)
