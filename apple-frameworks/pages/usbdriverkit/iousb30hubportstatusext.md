> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/iousb30hubportstatusext](https://developer.apple.com/documentation/usbdriverkit/iousb30hubportstatusext)

# IOUSB30HubPortStatusExt

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Structure  
**Availability:** DriverKit 19.0+

The structure for getting the port status of a USB 3 hub.

## Declaration

```objectivec
struct IOUSB30HubPortStatusExt;
```

<a id="Discussion"></a>

## Discussion

For information about this type, see section 10.16.2.6 (Get Port Status) of the USB 3.1 specification at [http://www.usb.org](http://www.usb.org).

## Topics

### Getting the Status Properties

- [wPortStatus](iousb30hubportstatusext/wportstatus.md)
- [wPortChange](iousb30hubportstatusext/wportchange.md)
- [dwExtPortStatus](iousb30hubportstatusext/dwextportstatus.md)

## See Also

### Hub Port Status Requests

- [tIOUSBDeviceRequestDirectionValue](tiousbdevicerequestdirectionvalue.md): Enumerated device request direction values.
- [tIOUSB30HubExtStatus](tiousb30hubextstatus.md): Bit masks for getting port status values.
- [tIOUSB30HubPortStatusCode](tiousb30hubportstatuscode.md): Constants for the port status type codes.
- [Hub Parameters](hub_parameters-enum.md): Constants for hub parameters.
