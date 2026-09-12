> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbdevicequalifierdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbdevicequalifierdescriptor)

# IOUSBDeviceQualifierDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The structure for storing a USB device qualifier descriptor.

## Declaration

```objectivec
struct IOUSBDeviceQualifierDescriptor;
```

<a id="overview"></a>

## Overview

For information about this descriptor, see section 9.6.2 of the USB 2.0 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Getting the Descriptor Properties

- [bLength](iousbdevicequalifierdescriptor/blength.md)
- [bDescriptorType](iousbdevicequalifierdescriptor/bdescriptortype.md)
- [bcdUSB](iousbdevicequalifierdescriptor/bcdusb.md)
- [bDeviceClass](iousbdevicequalifierdescriptor/bdeviceclass.md)
- [bDeviceSubClass](iousbdevicequalifierdescriptor/bdevicesubclass.md)
- [bDeviceProtocol](iousbdevicequalifierdescriptor/bdeviceprotocol.md)
- [bMaxPacketSize0](iousbdevicequalifierdescriptor/bmaxpacketsize0.md)
- [bNumConfigurations](iousbdevicequalifierdescriptor/bnumconfigurations.md)
- [bReserved](iousbdevicequalifierdescriptor/breserved.md)

## See Also

### Device Descriptors

- [IOUSBDeviceDescriptor](iousbdevicedescriptor.md): The structure for storing a USB device descriptor.
- [Apple’s Vendor ID](apple_s_vendor_id-enum.md): Apple’s vendor ID, assigned by the USB-IF.
