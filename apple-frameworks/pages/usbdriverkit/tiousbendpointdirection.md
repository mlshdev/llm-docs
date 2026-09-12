> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousbendpointdirection](https://developer.apple.com/documentation/usbdriverkit/tiousbendpointdirection)

# tIOUSBEndpointDirection

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

The direction of data transfers on an endpoint.

## Declaration

```objectivec
enum tIOUSBEndpointDirection : unsigned int;
```

## Topics

### Getting the Endpoint Direction

- [kIOUSBEndpointDirectionOut](tiousbendpointdirection/kiousbendpointdirectionout.md): Data flows from the driver out to the device.
- [kIOUSBEndpointDirectionIn](tiousbendpointdirection/kiousbendpointdirectionin.md): Data flows from the device into the driver.
- [kIOUSBEndpointDirectionUnknown](tiousbendpointdirection/kiousbendpointdirectionunknown.md): The transfer direction is unknown.

## See Also

### Endpoint Descriptors

- [IOUSBEndpointDescriptor](iousbendpointdescriptor.md): The structure for storing an endpoint descriptor.
- [IOUSBSuperSpeedEndpointCompanionDescriptor](iousbsuperspeedendpointcompaniondescriptor.md): The descriptor for a SuperSpeed USB Endpoint Companion.
- [IOUSBSuperSpeedPlusIsochronousEndpointCompanionDescriptor](iousbsuperspeedplusisochronousendpointcompaniondescriptor.md): The descriptor for a SuperSpeedPlus Isochronous USB Endpoint Companion.
- [tIOUSBEndpointType](tiousbendpointtype.md): Constants describing the types of endpoints.
- [Endpoint Attributes](endpoint_attributes-enum.md): Constants for endpoint attributes.
- [SuperSpeed USB Endpoint Descriptor Options](superspeed_usb_endpoint_descript-enum.md): Constants for super-speed endpoint attributes.
- [tIOUSBEndpointSynchronizationType](tiousbendpointsynchronizationtype.md): Constants for the endpoint synchronization types.
- [tIOUSBEndpointUsageType](tiousbendpointusagetype.md): Constants for the endpoint usage types.
- [tIOUSBLanguageID](tiousblanguageid.md): Constants for the USB language identifiers.
