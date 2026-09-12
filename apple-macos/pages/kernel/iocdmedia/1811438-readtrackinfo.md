> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iocdmedia/1811438-readtrackinfo](https://developer.apple.com/documentation/kernel/iocdmedia/1811438-readtrackinfo)

# readTrackInfo

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn readTrackInfo(
 IOMemoryDescriptor *buffer, 
 UInt32address, 
 CDTrackInfoAddressTypeaddressType, 
 UInt16 *actualByteCount); 
```

## Parameters

- `buffer`: Buffer for the data transfer. The size of the buffer implies the size of the data transfer.
- `address`: As documented by MMC.
- `addressType`: As documented by MMC.
- `actualByteCount`: Returns the actual number of bytes transferred in the data transfer.

<a id="return_value"></a>

## Return Value

Returns the status of the data transfer.

<a id="overview"></a>

## Overview

Issue an MMC READ TRACK INFORMATION command.

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
- [setSpeed](1811448-setspeed.md)
