> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbsuperspeedhubdescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbsuperspeedhubdescriptor)

# IOUSBSuperSpeedHubDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

A structure that defines the descriptor for a Super Speed USB hub.

## Declaration

```objectivec
struct IOUSBSuperSpeedHubDescriptor;
```

<a id="overview"></a>

## Overview

For more information about this descriptor type, see section 10.13.2.1 of the USB 3.0 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Accessing the Descriptor Properties

- [bLength](iousbsuperspeedhubdescriptor/blength.md)
- [bDescriptorType](iousbsuperspeedhubdescriptor/bdescriptortype.md)
- [bNumberPorts](iousbsuperspeedhubdescriptor/bnumberports.md)
- [wHubCharacteristics](iousbsuperspeedhubdescriptor/whubcharacteristics.md)
- [bPowerOnToPowerGood](iousbsuperspeedhubdescriptor/bpowerontopowergood.md)
- [bHubControllerCurrent](iousbsuperspeedhubdescriptor/bhubcontrollercurrent.md)
- [bHubDecodeLatency](iousbsuperspeedhubdescriptor/bhubdecodelatency.md)
- [wHubDelay](iousbsuperspeedhubdescriptor/whubdelay.md)
- [deviceRemovable](iousbsuperspeedhubdescriptor/deviceremovable.md)

## See Also

### USB Descriptors

- [IOUSB20HubDescriptor](iousb20hubdescriptor.md): A structure that defines the descriptor for a USB hub.
- [SuperSpeed Hub Characteristics](superspeed_hub_characteristics-enum.md): Constants for specifying super-speed hub characteristics.
- [UASPipeDescriptor](uaspipedescriptor.md): A structure that defines the Mass Storage Specific UAS pipe usage descriptor.
