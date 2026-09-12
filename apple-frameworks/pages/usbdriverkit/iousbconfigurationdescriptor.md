> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbconfigurationdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbconfigurationdescriptor)

# IOUSBConfigurationDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The structure for storing a USB configuration descriptor.

## Declaration

```objectivec
struct IOUSBConfigurationDescriptor;
```

<a id="overview"></a>

## Overview

This descriptor contains information about a specific configuration of a device, including the interfaces that configuration provides. This structure has a variable length, so it defines only the known fields. Use the `wTotalLength` field to read the entire descriptor.

For more information about this descriptor type, see section 9.6.3 of the USB 2.0 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Getting the Descriptor Properties

- [bLength](iousbconfigurationdescriptor/blength.md): The size of the descriptor in bytes.
- [bDescriptorType](iousbconfigurationdescriptor/bdescriptortype.md): The type of the descriptor.
- [wTotalLength](iousbconfigurationdescriptor/wtotallength.md): The total length of the descriptor, including the length of all related interface, endpoint, and vendor-specific descriptors.
- [bNumInterfaces](iousbconfigurationdescriptor/bnuminterfaces.md): The number of interfaces this configuration supports.
- [bConfigurationValue](iousbconfigurationdescriptor/bconfigurationvalue.md): The value to use when selecting this configuration.
- [iConfiguration](iousbconfigurationdescriptor/iconfiguration.md): The index of the string descriptor that describes this configuration.
- [bmAttributes](iousbconfigurationdescriptor/bmattributes.md): A bitmask indicating the configuration’s characteristics.
- [MaxPower](iousbconfigurationdescriptor/maxpower.md): The maximum power consumption of the USB device expressed in 2mA units.

## See Also

### Configuration Descriptors

- [IOUSBConfigurationDescHeader](iousbconfigurationdescheader.md): The header of a configuration descriptor.
- [Power Configuration Settings](power_configuration_settings-enum.md): Constants for configuring the power settings.
