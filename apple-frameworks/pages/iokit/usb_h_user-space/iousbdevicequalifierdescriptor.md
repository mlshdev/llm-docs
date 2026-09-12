> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbdevicequalifierdescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdevicequalifierdescriptor)

# IOUSBDeviceQualifierDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDeviceQualifierDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt16 bcdUSB;
   UInt8 bDeviceClass;
   UInt8 bDeviceSubClass;
   UInt8 bDeviceProtocol;
   UInt8 bMaxPacketSize0;
   UInt8 bNumConfigurations;
   UInt8 bReserved;
};
```

<a id="overview"></a>

## Overview

USB Device Qualifier Descriptor. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBDeviceQualifierDescriptor](https://developer.apple.com/documentation/kernel/iousbdevicequalifierdescriptor): The structure for describing a high-speed capable USB device.
