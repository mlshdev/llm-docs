> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/iousbhiddescriptor](https://developer.apple.com/documentation/iokit/iousbhiddescriptor)

# IOUSBHIDDescriptor

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBHIDDescriptor {
    ...
} IOUSBHIDDescriptor;
```

<a id="overview"></a>

## Overview

USB HID Descriptor. See the USB HID Specification at [http://www.usb.org](http://www.usb.org). (This structure should have used the #pragma pack(1) compiler directive to get byte alignment.

## Topics

### Instance Properties

- [descLen](iousbhiddescriptor/1426203-desclen.md)
- [descType](iousbhiddescriptor/1426322-desctype.md)
- [descVersNum](iousbhiddescriptor/1425858-descversnum.md)
- [hidCountryCode](iousbhiddescriptor/1425535-hidcountrycode.md)
- [hidDescriptorLengthHi](iousbhiddescriptor/1426191-hiddescriptorlengthhi.md)
- [hidDescriptorLengthLo](iousbhiddescriptor/1425379-hiddescriptorlengthlo.md)
- [hidDescriptorType](iousbhiddescriptor/1426111-hiddescriptortype.md)
- [hidNumDescriptors](iousbhiddescriptor/1425584-hidnumdescriptors.md)

## See Also

### Related Documentation

- [IOUSBHIDDescriptor](usb_h_user-space/iousbhiddescriptor.md)
