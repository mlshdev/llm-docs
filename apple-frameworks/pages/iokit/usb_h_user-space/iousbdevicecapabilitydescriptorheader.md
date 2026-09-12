> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbdevicecapabilitydescriptorheader](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdevicecapabilitydescriptorheader)

# IOUSBDeviceCapabilityDescriptorHeader

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDeviceCapabilityDescriptorHeader {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bDevCapabilityType;
   UInt8 bNumDeviceCaps;
};
```

<a id="overview"></a>

## Overview

Header for a Device Capability Descriptor for a USB Device. .

## See Also

### Related Documentation

- [IOUSBDeviceCapabilityDescriptorHeader](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitydescriptorheader): The device capability descriptor header.
