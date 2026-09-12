> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbdevicecapabilitycontainerid](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdevicecapabilitycontainerid)

# IOUSBDeviceCapabilityContainerID

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDeviceCapabilityContainerID {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bDevCapabilityType;
   UInt8 bReservedID;
   UInt8 containerID[16];
};
```

<a id="overview"></a>

## Overview

Device Capability Container ID

## See Also

### Related Documentation

- [IOUSBDeviceCapabilityContainerID](https://developer.apple.com/documentation/kernel/iousbdevicecapabilitycontainerid): The structure for the container ID device capability.
