> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousbendpointtype](https://developer.apple.com/documentation/usbdriverkit/tiousbendpointtype)

# tIOUSBEndpointType

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Constants describing the types of endpoints.

## Declaration

```objectivec
enum tIOUSBEndpointType : unsigned int;
```

## Topics

### Getting the Endpoint Types

- [kIOUSBEndpointTypeControl](tiousbendpointtype/kiousbendpointtypecontrol.md): A control endpoint for the device.
- [kIOUSBEndpointTypeBulk](tiousbendpointtype/kiousbendpointtypebulk.md): An endpoint you use for bulk transfers.
- [kIOUSBEndpointTypeInterrupt](tiousbendpointtype/kiousbendpointtypeinterrupt.md): An endpoint you use for interrupts.
- [kIOUSBEndpointTypeIsochronous](tiousbendpointtype/kiousbendpointtypeisochronous.md): An endpoint you use for isochronous transfers.

## See Also

### Endpoint Descriptors

- [IOUSBEndpointDescriptor](iousbendpointdescriptor.md): The structure for storing an endpoint descriptor.
- [IOUSBSuperSpeedEndpointCompanionDescriptor](iousbsuperspeedendpointcompaniondescriptor.md): The descriptor for a SuperSpeed USB Endpoint Companion.
- [IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor](iousbsuperspeedplusisochronousendpointcompaniondescriptor.md): The descriptor for a SuperSpeedPlus Isochronous USB Endpoint Companion.
- [Endpoint Attributes](endpoint_attributes-enum.md): Constants for endpoint attributes.
- [SuperSpeed USB Endpoint Descriptor Options](superspeed_usb_endpoint_descript-enum.md): Constants for super-speed endpoint attributes.
- [tIOUSBEndpointDirection](tiousbendpointdirection.md): The direction of data transfers on an endpoint.
- [tIOUSBEndpointSynchronizationType](tiousbendpointsynchronizationtype.md): Constants for the endpoint synchronization types.
- [tIOUSBEndpointUsageType](tiousbendpointusagetype.md): Constants for the endpoint usage types.
- [tIOUSBLanguageID](tiousblanguageid.md): Constants for the USB language identifiers.
