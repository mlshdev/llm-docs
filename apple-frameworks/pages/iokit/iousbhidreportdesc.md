> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/iousbhidreportdesc

# IOUSBHIDReportDesc

**Interface language:** Objective-C

**Framework:** IOKit  
**Kind:** Structure  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

## Declaration

```objectivec
typedef struct IOUSBHIDReportDesc {
    ...
} IOUSBHIDReportDesc;
```

<a id="overview"></a>

## Overview

USB HID Report Descriptor header. See the USB HID Specification at [http://www.usb.org](http://www.usb.org). (This structure should have used the #pragma pack(1) compiler directive to get byte alignment.

## Topics

### Instance Properties

- [hidDescriptorLengthHi](iousbhidreportdesc/1426294-hiddescriptorlengthhi.md)
- [hidDescriptorLengthLo](iousbhidreportdesc/1425781-hiddescriptorlengthlo.md)
- [hidDescriptorType](iousbhidreportdesc/1425638-hiddescriptortype.md)

## See Also

### Related Documentation

- [IOUSBHIDReportDesc](usb_h_user-space/iousbhidreportdesc.md)
