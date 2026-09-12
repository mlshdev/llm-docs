> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbhiddescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbhiddescriptor)

# IOUSBHIDDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBHIDDescriptor {
   UInt8 descLen;
   UInt8 descType;
   UInt16 descVersNum;
   UInt8 hidCountryCode;
   UInt8 hidNumDescriptors;
   UInt8 hidDescriptorType;
   UInt8 hidDescriptorLengthLo;
   UInt8 hidDescriptorLengthHi;
};
```

<a id="overview"></a>

## Overview

USB HID Descriptor. See the USB HID Specification at [http://www.usb.org](http://www.usb.org). (This structure should have used the #pragma pack(1) compiler directive to get byte alignment.

## See Also

### Related Documentation

- [IOUSBHIDDescriptor](https://developer.apple.com/documentation/kernel/iousbhiddescriptor): A structure that defines the USB HID descriptor.
