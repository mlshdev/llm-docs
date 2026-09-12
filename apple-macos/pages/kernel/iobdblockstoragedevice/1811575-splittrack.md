> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/kernel/iobdblockstoragedevice/1811575-splittrack](https://developer.apple.com/documentation/kernel/iobdblockstoragedevice/1811575-splittrack)

# splitTrack

**Interface language:** Objective-C

**Framework:** Kernel

## Declaration

```objectivec
virtual IOReturn splitTrack(
 UInt32address) = 0; 
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

- [init](1811554-init.md)
- [readDiscStructure](1811564-readdiscstructure.md)
