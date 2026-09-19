> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbconfigurationdescriptor

# IOUSBConfigurationDescriptor

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBConfigurationDescriptor {
    ...
} IOUSBConfigurationDescriptor;
```

<a id="overview"></a>

## Overview

Standard USB Configuration Descriptor. It is variable length, so this only specifies the known fields. We use the wTotalLength field to read the whole descriptor. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Instance Properties

- [MaxPower](iousbconfigurationdescriptor/1425565-maxpower.md)
- [bConfigurationValue](iousbconfigurationdescriptor/1426254-bconfigurationvalue.md)
- [bDescriptorType](iousbconfigurationdescriptor/1426163-bdescriptortype.md)
- [bLength](iousbconfigurationdescriptor/1425946-blength.md)
- [bNumInterfaces](iousbconfigurationdescriptor/1425737-bnuminterfaces.md)
- [bmAttributes](iousbconfigurationdescriptor/1425885-bmattributes.md)
- [iConfiguration](iousbconfigurationdescriptor/1425879-iconfiguration.md)
- [wTotalLength](iousbconfigurationdescriptor/1425444-wtotallength.md)

## See Also

### Related Documentation

- [IOUSBConfigurationDescriptor](usb_h_user-space/iousbconfigurationdescriptor.md)
