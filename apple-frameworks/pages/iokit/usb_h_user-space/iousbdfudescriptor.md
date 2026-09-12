> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbdfudescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdfudescriptor)

# IOUSBDFUDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDFUDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bmAttributes;
   UInt16 wDetachTimeout;
   UInt16 wTransferSize;
};
```

<a id="overview"></a>

## Overview

USB Device Firmware Update Descriptor. See the USB Device Firmware Update Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBDFUDescriptor](https://developer.apple.com/documentation/kernel/iousbdfudescriptor): A structure that defines the USB device firmware update descriptor.
