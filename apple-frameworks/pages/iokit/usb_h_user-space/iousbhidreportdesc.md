> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbhidreportdesc

# IOUSBHIDReportDesc

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBHIDReportDesc {
   UInt8 hidDescriptorType;
   UInt8 hidDescriptorLengthLo;
   UInt8 hidDescriptorLengthHi;
};
```

<a id="overview"></a>

## Overview

USB HID Report Descriptor header. See the USB HID Specification at [http://www.usb.org](http://www.usb.org). (This structure should have used the #pragma pack(1) compiler directive to get byte alignment.

## See Also

### Related Documentation

- [IOUSBHIDReportDesc](https://developer.apple.com/documentation/kernel/iousbhidreportdesc): A structure that defines the USB HID report descriptor header.
