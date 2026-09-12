> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbconfigurationdescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbconfigurationdescriptor)

# IOUSBConfigurationDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBConfigurationDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt16 wTotalLength;
   UInt8 bNumInterfaces;
   UInt8 bConfigurationValue;
   UInt8 iConfiguration;
   UInt8 bmAttributes;
   UInt8 MaxPower;
};
```

<a id="overview"></a>

## Overview

Standard USB Configuration Descriptor. It is variable length, so this only specifies the known fields. We use the wTotalLength field to read the whole descriptor. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBConfigurationDescriptor](https://developer.apple.com/documentation/kernel/iousbconfigurationdescriptor): The structure for storing a USB configuration descriptor.
