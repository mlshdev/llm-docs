> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdmedia/1811412-readisrc](https://developer.apple.com/documentation/kernel/iocdmedia/1811412-readisrc)

# readISRC

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readISRC(
 UInt8track,
 CDISRCisrc); 
```

## Parameters

- `track`: Track number from which to read the ISRC.
- `isrc`: Buffer for the ISRC data. Buffer contents will be zero-terminated.

<a id="return_value"></a>

## Return Value

Returns the status of the operation.

<a id="overview"></a>

## Overview

Read the International Standard Recording Code for the specified track.

## See Also

### Miscellaneous

- [getSpeed](1811353-getspeed.md)
- [getTOC](1811363-gettoc.md)
- [read](1811376-read.md)
- [readCD()](1811386-readcd.md)
- [readCD()](1811393-readcd.md)
- [readDiscInfo](1811402-readdiscinfo.md)
- [readMCN](1811424-readmcn.md)
- [readTOC](1811431-readtoc.md)
- [readTrackInfo](1811438-readtrackinfo.md)
- [setSpeed](1811448-setspeed.md)
