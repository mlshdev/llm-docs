> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbinterfacedescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbinterfacedescriptor)

# IOUSBInterfaceDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBInterfaceDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bInterfaceNumber;
   UInt8 bAlternateSetting;
   UInt8 bNumEndpoints;
   UInt8 bInterfaceClass;
   UInt8 bInterfaceSubClass;
   UInt8 bInterfaceProtocol;
   UInt8 iInterface;
};
```

<a id="overview"></a>

## Overview

Descriptor for a USB Interface. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBInterfaceDescriptor](https://developer.apple.com/documentation/kernel/iousbinterfacedescriptor): A descriptor for a specific interface of a USB device.
