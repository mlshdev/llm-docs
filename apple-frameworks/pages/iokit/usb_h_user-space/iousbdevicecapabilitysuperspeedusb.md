> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdevicecapabilitysuperspeedusb

# IOUSBDeviceCapabilitySuperSpeedUSB

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDeviceCapabilitySuperSpeedUSB {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bDevCapabilityType;
   UInt8 bmAttributes;
   UInt16 wSpeedsSupported;
   UInt8 bFunctionalitySupport;
   UInt8 bU1DevExitLat;
   UInt16 wU2DevExitLat;
};
```

<a id="overview"></a>

## Overview

Device Capability SuperSpeed USB

## See Also

### Related Documentation

- [IOUSBDeviceCapabilitySuperSpeedUSB](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitysuperspeedusb): The structure for the SuperSpeed USB device capability.
