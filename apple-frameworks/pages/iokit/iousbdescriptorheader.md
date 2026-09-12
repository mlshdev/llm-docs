> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbdescriptorheader](https://developer.apple.com/documentation/iokit/iousbdescriptorheader)

# IOUSBDescriptorHeader

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBDescriptorHeader {
    ...
} IOUSBDescriptorHeader;
```

<a id="overview"></a>

## Overview

Standard header used for all USB descriptors. Used to read the length of a descriptor so that we can allocate storage for the whole descriptor later on.

## Topics

### Instance Properties

- [bDescriptorType](iousbdescriptorheader/1425797-bdescriptortype.md)
- [bLength](iousbdescriptorheader/1425367-blength.md)

## See Also

### Related Documentation

- [IOUSBDescriptorHeader](usb_h_user-space/iousbdescriptorheader.md)
