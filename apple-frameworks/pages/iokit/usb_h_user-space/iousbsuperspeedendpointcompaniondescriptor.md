> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbsuperspeedendpointcompaniondescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbsuperspeedendpointcompaniondescriptor)

# IOUSBSuperSpeedEndpointCompanionDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBSuperSpeedEndpointCompanionDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bMaxBurst;
   UInt8 bmAttributes;
   UInt16 wBytesPerInterval;
};
```

<a id="overview"></a>

## Overview

Descriptor for a SuperSpeed USB Endpoint Companion. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBSuperSpeedEndpointCompanionDescriptor](https://developer.apple.com/documentation/kernel/iousbsuperspeedendpointcompaniondescriptor): The descriptor for a SuperSpeed USB endpoint companion.
