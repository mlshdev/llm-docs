> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbendpointdescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbendpointdescriptor)

# IOUSBEndpointDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBEndpointDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bEndpointAddress;
   UInt8 bmAttributes;
   UInt16 wMaxPacketSize;
   UInt8 bInterval;
};
```

<a id="overview"></a>

## Overview

Descriptor for a USB Endpoint. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBEndpointDescriptor](https://developer.apple.com/documentation/kernel/iousbendpointdescriptor): The structure for storing an endpoint descriptor.
