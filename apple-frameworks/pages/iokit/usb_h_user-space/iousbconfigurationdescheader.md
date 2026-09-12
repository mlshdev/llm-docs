> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbconfigurationdescheader](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbconfigurationdescheader)

# IOUSBConfigurationDescHeader

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBConfigurationDescHeader {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt16 wTotalLength;
};
```

<a id="overview"></a>

## Overview

Header of a IOUSBConfigurationDescriptor. Used to get the total length of the descriptor.

## See Also

### Related Documentation

- [IOUSBConfigurationDescHeader](https://developer.apple.com/documentation/kernel/iousbconfigurationdescheader): The header of a configuration descriptor.
