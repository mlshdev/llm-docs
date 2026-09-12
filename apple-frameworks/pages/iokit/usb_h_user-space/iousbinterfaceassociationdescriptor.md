> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/iokit/usb_h_user-space/iousbinterfaceassociationdescriptor](https://developer.apple.com/documentation/iokit/usb_h_user-space/iousbinterfaceassociationdescriptor)

# IOUSBInterfaceAssociationDescriptor

**Interface language:** Objective-C

**Framework:** IOKit

## Declaration

```objectivec
struct IOUSBInterfaceAssociationDescriptor {
   UInt8 bLength;
   UInt8 bDescriptorType;
   UInt8 bFirstInterface;
   UInt8 bInterfaceCount;
   UInt8 bFunctionClass;
   UInt8 bFunctionSubClass;
   UInt8 bFunctionProtocol;
   UInt8 iFunction;
};
```

<a id="overview"></a>

## Overview

USB Inerface Association Descriptor. ECN to the USB 2.0 Spec. See the USB Specification at [http://www.usb.org](http://www.usb.org).

## See Also

### Related Documentation

- [IOUSBInterfaceAssociationDescriptor](https://developer.apple.com/documentation/kernel/iousbinterfaceassociationdescriptor): The descriptor that associates multiple interfaces to the same function.
