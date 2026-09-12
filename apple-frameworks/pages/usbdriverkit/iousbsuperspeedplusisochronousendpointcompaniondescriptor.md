> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousbsuperspeedplusisochronousendpointcompaniondescriptor](https://developer.apple.com/documentation/usbdriverkit/iousbsuperspeedplusisochronousendpointcompaniondescriptor)

# IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The descriptor for a SuperSpeedPlus Isochronous USB Endpoint Companion.

## Declaration

```objectivec
struct IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor;
```

<a id="overview"></a>

## Overview

See USB 3.1 9.6.8: SuperSpeedPlus Isochronous Endpoint Companion in the USB Specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Accessing the Descriptor Properties

- [bLength](iousbsuperspeedplusisochronousendpointcompaniondescriptor/blength.md)
- [bDescriptorType](iousbsuperspeedplusisochronousendpointcompaniondescriptor/bdescriptortype.md)
- [wReserved](iousbsuperspeedplusisochronousendpointcompaniondescriptor/wreserved.md)
- [dwBytesPerInterval](iousbsuperspeedplusisochronousendpointcompaniondescriptor/dwbytesperinterval.md)

## See Also

### Endpoint Descriptors

- [IOUSBEndpointDescriptor](iousbendpointdescriptor.md): The structure for storing an endpoint descriptor.
- [IOUSBSuperSpeedEndpointCompanionDescriptor](iousbsuperspeedendpointcompaniondescriptor.md): The descriptor for a SuperSpeed USB Endpoint Companion.
- [tIOUSBEndpointType](tiousbendpointtype.md): Constants describing the types of endpoints.
- [Endpoint Attributes](endpoint_attributes-enum.md): Constants for endpoint attributes.
- [SuperSpeed USB Endpoint Descriptor Options](superspeed_usb_endpoint_descript-enum.md): Constants for super-speed endpoint attributes.
- [tIOUSBEndpointDirection](tiousbendpointdirection.md): The direction of data transfers on an endpoint.
- [tIOUSBEndpointSynchronizationType](tiousbendpointsynchronizationtype.md): Constants for the endpoint synchronization types.
- [tIOUSBEndpointUsageType](tiousbendpointusagetype.md): Constants for the endpoint usage types.
- [tIOUSBLanguageID](tiousblanguageid.md): Constants for the USB language identifiers.
