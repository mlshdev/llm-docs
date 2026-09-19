> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/usbdriverkit/tiousbdevicerequestdirectionvalue

# tIOUSBDeviceRequestDirectionValue

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Enumerated device request direction values.

## Declaration

```objectivec
enum tIOUSBDeviceRequestDirectionValue : unsigned int;
```

## Topics

### Getting the Request Direction

- [kIOUSBDeviceRequestDirectionValueIn](tiousbdevicerequestdirectionvalue/kiousbdevicerequestdirectionvaluein.md)
- [kIOUSBDeviceRequestDirectionValueOut](tiousbdevicerequestdirectionvalue/kiousbdevicerequestdirectionvalueout.md)

## See Also

### Hub Port Status Requests

- [IOUSB30HubPortStatusExt](iousb30hubportstatusext.md): The structure for getting the port status of a USB 3 hub.
- [tIOUSB30HubExtStatus](tiousb30hubextstatus.md): Bit masks for getting port status values.
- [tIOUSB30HubPortStatusCode](tiousb30hubportstatuscode.md): Constants for the port status type codes.
- [Hub Parameters](hub_parameters-enum.md): Constants for hub parameters.
