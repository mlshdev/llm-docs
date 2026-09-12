> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbdescriptorheader](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbdescriptorheader)

# IOUSBDescriptorHeader

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBDescriptorHeader {
   UInt8 bLength;
   UInt8 bDescriptorType;
};
```

<a id="overview"></a>

## Overview

Standard header used for all USB descriptors. Used to read the length of a descriptor so that we can allocate storage for the whole descriptor later on.

## See Also

### Related Documentation

- [IOUSBDescriptorHeader](https://developer.apple.com/documentation/kernel/iousbdescriptorheader): The base descriptor header.
