> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousblowlatencyisocframe](https://developer.apple.com/documentation/iokit/iousblowlatencyisocframe)

# IOUSBLowLatencyIsocFrame

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 18.4+ · macOS 10.2+

## Declaration

```objectivec
typedef struct IOUSBLowLatencyIsocFrame {
    ...
} IOUSBLowLatencyIsocFrame;
```

<a id="overview"></a>

## Overview

Structure used to encode information about each isoc frame that is processed at hardware interrupt time (low latency).

## Topics

### Instance Properties

- [frActCount](iousblowlatencyisocframe/1426008-fractcount.md): Actual # of bytes transferred.
- [frReqCount](iousblowlatencyisocframe/1425652-frreqcount.md): Input specifiying how many bytes to read or write.
- [frStatus](iousblowlatencyisocframe/1425755-frstatus.md): Returns status associated with the frame.
- [frTimeStamp](iousblowlatencyisocframe/1426222-frtimestamp.md): Time stamp that indicates time when frame was procesed.

## See Also

### Related Documentation

- [IOUSBLowLatencyIsocFrame](usb_h_user-space/iousblowlatencyisocframe.md)
