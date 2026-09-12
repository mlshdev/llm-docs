> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/usbdriverkit/tiousb30hubextstatus](https://developer.apple.com/documentation/usbdriverkit/tiousb30hubextstatus)

# tIOUSB30HubExtStatus

**Interface language:** Objective-C

**Framework:** USBDriverKit  
**Kind:** Enumeration  
**Availability:** DriverKit 19.0+

Bit masks for getting port status values.

## Declaration

```objectivec
enum tIOUSB30HubExtStatus : unsigned int;
```

## Topics

### Getting the Extended Status Codes

- [kIOUSB30HubExtStatusRxSublinkSpeedID](tiousb30hubextstatus/kiousb30hubextstatusrxsublinkspeedid.md)
- [kIOUSB30HubExtStatusRxSublinkSpeedIDPhase](tiousb30hubextstatus/kiousb30hubextstatusrxsublinkspeedidphase.md)
- [kIOUSB30HubExtStatusTxSublinkSpeedID](tiousb30hubextstatus/kiousb30hubextstatustxsublinkspeedid.md)
- [kIOUSB30HubExtStatusTxSublinkSpeedIDPhase](tiousb30hubextstatus/kiousb30hubextstatustxsublinkspeedidphase.md)
- [kIOUSB30HubExtStatusRxLaneCount](tiousb30hubextstatus/kiousb30hubextstatusrxlanecount.md)
- [kIOUSB30HubExtStatusRxLaneCountPhase](tiousb30hubextstatus/kiousb30hubextstatusrxlanecountphase.md)
- [kIOUSB30HubExtStatusTxLaneCount](tiousb30hubextstatus/kiousb30hubextstatustxlanecount.md)
- [kIOUSB30HubExtStatusTxLaneCountPhase](tiousb30hubextstatus/kiousb30hubextstatustxlanecountphase.md)

## See Also

### Hub Port Status Requests

- [IOUSB30HubPortStatusExt](iousb30hubportstatusext.md): The structure for getting the port status of a USB 3 hub.
- [tIOUSBDeviceRequestDirectionValue](tiousbdevicerequestdirectionvalue.md): Enumerated device request direction values.
- [tIOUSB30HubPortStatusCode](tiousb30hubportstatuscode.md): Constants for the port status type codes.
- [Hub Parameters](hub_parameters-enum.md): Constants for hub parameters.
