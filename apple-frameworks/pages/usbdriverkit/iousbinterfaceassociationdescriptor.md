> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbinterfaceassociationdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbinterfaceassociationdescriptor)

# IOUSBInterfaceAssociationDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The USB Interface Association Descriptor.

## Declaration

```objectivec
struct IOUSBInterfaceAssociationDescriptor;
```

<a id="overview"></a>

## Overview

This type defines the ECN to the USB 2.0 Spec. See the USB Specification at [http://www.usb.org](http://www.usb.org). USB 3.0 9.6.4: Interface Association.

## Topics

### Accessing the Descriptor Properties

- [bLength](iousbinterfaceassociationdescriptor/blength.md)
- [bDescriptorType](iousbinterfaceassociationdescriptor/bdescriptortype.md)
- [bFirstInterface](iousbinterfaceassociationdescriptor/bfirstinterface.md)
- [bInterfaceCount](iousbinterfaceassociationdescriptor/binterfacecount.md)
- [bFunctionClass](iousbinterfaceassociationdescriptor/bfunctionclass.md)
- [bFunctionSubClass](iousbinterfaceassociationdescriptor/bfunctionsubclass.md)
- [bFunctionProtocol](iousbinterfaceassociationdescriptor/bfunctionprotocol.md)
- [iFunction](iousbinterfaceassociationdescriptor/ifunction.md)

## See Also

### Interface Descriptors

- [IOUSBInterfaceDescriptor](iousbinterfacedescriptor.md): A descriptor for a specific interface of a USB device.
