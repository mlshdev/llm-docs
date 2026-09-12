> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousblowlatencyisocframe](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousblowlatencyisocframe)

# IOUSBLowLatencyIsocFrame

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBLowLatencyIsocFrame {
   IOReturn frStatus;
   UInt16 frReqCount;
   UInt16 frActCount;
   AbsoluteTime frTimeStamp;
};
```

<a id="overview"></a>

## Overview

Structure used to encode information about each isoc frame that is processed at hardware interrupt time (low latency).

## Topics

### Fields

- [frStatus](../iousblowlatencyisocframe/1425755-frstatus.md): Returns status associated with the frame.
- [frReqCount](../iousblowlatencyisocframe/1425652-frreqcount.md): Input specifiying how many bytes to read or write.
- [frActCount](../iousblowlatencyisocframe/1426008-fractcount.md): Actual # of bytes transferred.
- [frTimeStamp](../iousblowlatencyisocframe/1426222-frtimestamp.md): Time stamp that indicates time when frame was procesed.

## See Also

### Related Documentation

- [IOUSBLowLatencyIsocFrame](https://developer.apple.com/documentation/kernel/iousblowlatencyisocframe): A structure for encoding information about each low-latency isochronous frame.
