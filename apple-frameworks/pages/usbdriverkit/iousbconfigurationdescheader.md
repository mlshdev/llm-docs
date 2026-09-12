> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbconfigurationdescheader](https://developer.apple.com/documentation/usbdriverkit/iousbconfigurationdescheader)

# IOUSBConfigurationDescHeader

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The header of a configuration descriptor.

## Declaration

```objectivec
struct IOUSBConfigurationDescHeader;
```

<a id="overview"></a>

## Overview

Use this method to get the total length of the descriptor. See “USB 2.0 9.6.3: Configuration.”

## Topics

### Accessing the Descriptor Properties

- [bLength](iousbconfigurationdescheader/blength.md)
- [bDescriptorType](iousbconfigurationdescheader/bdescriptortype.md)
- [wTotalLength](iousbconfigurationdescheader/wtotallength.md)

## See Also

### Configuration Descriptors

- [IOUSBConfigurationDescriptor](iousbconfigurationdescriptor.md): The structure for storing a USB configuration descriptor.
- [Power Configuration Settings](power_configuration_settings-enum.md): Constants for configuring the power settings.
