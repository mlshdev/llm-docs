> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbbosdescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbbosdescriptor)

# IOUSBBOSDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBBOSDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt16 wTotalLength;
   UInt8 bNumDeviceCaps;
};
```

<a id="overview"></a>

## Overview

BOS Descriptor for a USB Device. .

## See Also

### Related Documentation

- [IOUSBBOSDescriptor](https://developer.apple.com/documentation/kernel/iousbbosdescriptor): The structure for storing a binary object store (BOS) descriptor.
